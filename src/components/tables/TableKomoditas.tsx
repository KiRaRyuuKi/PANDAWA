'use client';

import React, { useEffect, useState } from 'react';
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal/Modal";
import Input from "../ui/input/InputField";
import Label from "../ui/label/Label";
import Image from 'next/image';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../ui/table/Tabel';

import Badge from '../ui/badge/Badge';
import Button from '../ui/button/Button';
import Pagination from './Pagination';
import Select from '../ui/select/Select';
import ShowEntriesSelect from './ShowEntriesSelect';

interface HasilPanen {
  id: number;
  id_panen: number;
  id_kecamatan: number;
  nama_kecamatan: string;
  id_komoditas: number;
  nama_komoditas: string;
  tahun_panen: number;
  produksi: number;
  luas_panen: number;
  produktivitas: number;
}

interface KecamatanOption {
  value: string;
  label: string;
}

interface KomoditasOption {
  value: string;
  label: string;
}

export default function TableKomoditas() {
  const [hasilPanen, setHasilPanen] = useState<HasilPanen[]>([]);
  const [filteredData, setFilteredData] = useState<HasilPanen[]>([]);
  const [kecamatanOptions, setKecamatanOptions] = useState<KecamatanOption[]>([]);
  const [komoditasOptions, setKomoditasOptions] = useState<KomoditasOption[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [selectedItem, setSelectedItem] = useState<HasilPanen | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [filters, setFilters] = useState({
    kecamatan: '',
    komoditas: '',
    tahun: '',
    tahunOptions: [] as { value: string, label: string }[]
  });
  const { isOpen, openModal, closeModal } = useModal();

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      console.log('Fetching data from /api/komoditas');
      const res = await fetch('/api/komoditas');
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const result = await res.json();
      console.log('Data fetched:', result);

      if (Array.isArray(result)) {
        const processedData = result.map(item => ({
          ...item,
          id_panen: item.id_panen || item.id,
          id: item.id || item.id_panen,
          nama_kecamatan: item.kecamatan?.nama_kecamatan || item.nama_kecamatan,
          nama_komoditas: item.komoditas?.nama_komoditas || item.nama_komoditas
        }));

        setHasilPanen(processedData);
        setFilteredData(processedData);

        const uniqueKecamatan = Array.from(
          new Set(processedData.map((item: HasilPanen) => item.id_kecamatan))
        ).map(id => {
          const item = processedData.find((d: HasilPanen) => d.id_kecamatan === id);
          return {
            value: id.toString(),
            label: item?.nama_kecamatan || 'Unknown'
          };
        });

        setKecamatanOptions([{ value: '', label: 'Semua Kecamatan' }, ...uniqueKecamatan]);

        const uniqueKomoditas = Array.from(
          new Set(processedData.map((item: HasilPanen) => item.id_komoditas))
        ).map(id => {
          const item = processedData.find((d: HasilPanen) => d.id_komoditas === id);
          return {
            value: id.toString(),
            label: item?.nama_komoditas || 'Unknown'
          };
        });

        setKomoditasOptions([{ value: '', label: 'Semua Komoditas' }, ...uniqueKomoditas]);

        const uniqueTahun = Array.from(
          new Set(processedData.map((item: HasilPanen) => item.tahun_panen))
        ).map(tahun => ({
          value: String(tahun),
          label: String(tahun)
        })).sort((a, b) => parseInt(b.value) - parseInt(a.value));

        setFilters(prev => ({
          ...prev,
          tahunOptions: [{ value: '', label: 'Semua Tahun' }, ...uniqueTahun]
        }));
      } else {
        console.error('Expected array but got:', result);
        setError('Format data tidak sesuai');
      }
    } catch (error) {
      console.error('Gagal mengambil data hasil panen:', error);
      setError('Gagal mengambil data: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, hasilPanen]);

  const applyFilters = () => {
    let result = [...hasilPanen];

    if (filters.kecamatan) {
      result = result.filter(item => item.id_kecamatan.toString() === filters.kecamatan);
    }

    if (filters.komoditas) {
      result = result.filter(item => item.id_komoditas.toString() === filters.komoditas);
    }

    if (filters.tahun) {
      result = result.filter(item => item.tahun_panen.toString() === filters.tahun);
    }

    setFilteredData(result);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handleKecamatanFilterChange = (value: string) => {
    setFilters(prev => ({ ...prev, kecamatan: value }));
  };

  const handleKomoditasFilterChange = (value: string) => {
    setFilters(prev => ({ ...prev, komoditas: value }));
  };

  const handleTahunFilterChange = (value: string) => {
    setFilters(prev => ({ ...prev, tahun: value }));
  };

  const handleEdit = (id: number) => {
    const selected = hasilPanen.find(item => item.id === id || item.id_panen === id);
    if (selected) {
      setSelectedItem({ ...selected });
      openModal();
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/komoditas/${id}`, {
          method: 'DELETE',
        });

        if (res.ok) {
          const result = await res.json();
          console.log('Delete successful:', result);
          // Remove the deleted item from state
          setHasilPanen(prevData => prevData.filter(item => item.id !== id && item.id_panen !== id));
          setFilteredData(prevData => prevData.filter(item => item.id !== id && item.id_panen !== id));
          setMessage("Data berhasil dihapus");
        } else {
          const errorData = await res.json();
          setMessage(`Gagal menghapus: ${errorData.error || 'Unknown error'}`);
          console.error("Gagal menghapus:", errorData.error);
        }
      } catch (error) {
        console.error("Error saat menghapus:", error);
        setMessage("Terjadi kesalahan saat menghapus data");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    field: keyof HasilPanen
  ) => {
    if (selectedItem) {
      const value = e.target.value;

      let parsedValue: string | number = value;
      if (field === 'tahun_panen') {
        parsedValue = parseInt(value) || 0;
      } else if (['luas_panen', 'produksi', 'produktivitas'].includes(field)) {
        parsedValue = parseFloat(value) || 0;
      }

      setSelectedItem({
        ...selectedItem,
        [field]: parsedValue
      });
    }
  };

  const handleSelectChange = (value: string, field: 'id_kecamatan' | 'id_komoditas') => {
    if (selectedItem) {
      setSelectedItem({
        ...selectedItem,
        [field]: parseInt(value) || 0
      });
    }
  };

  const handleSave = async () => {
    if (!selectedItem) return;

    setIsSubmitting(true);
    setMessage("");

    const updatedData = {
      id_kecamatan: selectedItem.id_kecamatan,
      id_komoditas: selectedItem.id_komoditas,
      tahun_panen: selectedItem.tahun_panen,
      luas_panen: selectedItem.luas_panen,
      produksi: selectedItem.produksi,
      produktivitas: selectedItem.produktivitas
    };

    try {
      const updateId = selectedItem.id_panen || selectedItem.id;

      console.log(`Updating hasil panen with ID: ${updateId}`, updatedData);
      const res = await fetch(`/api/komoditas/${updateId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        const result = await res.json();
        setMessage("Data berhasil diperbarui");

        // Update local state with the updated item
        setHasilPanen(prevData =>
          prevData.map(item =>
            (item.id === selectedItem.id || item.id_panen === selectedItem.id_panen)
              ? {
                ...item,
                ...updatedData,
                nama_kecamatan: item.nama_kecamatan,
                nama_komoditas: item.nama_komoditas
              }
              : item
          )
        );

        closeModal();

        // Fetch fresh data to ensure everything is in sync
        await fetchData();
      } else {
        const errorData = await res.json();
        setMessage(`Gagal update: ${errorData.error || 'Unknown error'}`);
        console.error("Gagal update:", errorData.error);
      }
    } catch (error) {
      console.error("Error saat menyimpan:", error);
      setMessage("Terjadi kesalahan saat menyimpan data");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatNumber = (value: number) => {
    return value.toLocaleString('id-ID', { maximumFractionDigits: 3 });
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      {/* Filter Section */}
      <div className="p-5 border-b border-gray-100 dark:border-white/[0.05]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex justify-between items-center border-gray-200 dark:border-white/[0.05]">
            <ShowEntriesSelect
              currentPage={currentPage}
              totalPages={totalPages}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          </div>
          <div className="flex flex-wrap justify-end gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none max-w-[150px]">
              <Select
                options={kecamatanOptions}
                placeholder="--Select an Kecamatan--"
                onChange={handleKecamatanFilterChange}
                className="dark:bg-dark-900"
              />
              <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                <Image src="/images/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
              </span>
            </div>
            <div className="relative flex-1 sm:flex-none max-w-[150px]">
              <Select
                options={komoditasOptions}
                placeholder="--Select an Komoditas--"
                onChange={handleKomoditasFilterChange}
                className="dark:bg-dark-900"
              />
              <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                <Image src="/images/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
              </span>
            </div>
            <div className="relative flex-1 sm:flex-none max-w-[150px]">
              <Select
                options={filters.tahunOptions || []}
                placeholder="--Select an Tahun--"
                onChange={handleTahunFilterChange}
                className="dark:bg-dark-900"
              />
              <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                <Image src="/images/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
              </span>
            </div>
            <Button
              size="sm"
              className="flex-shrink-0"
              onClick={() => fetchData()}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Refresh
                </span>
              ) : (
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Refresh
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Error display */}
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Success message display */}
        {message && !error && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
            {message}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Kecamatan
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Komoditas
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Tahun Panen
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Produksi (Ton)
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Luas Panen (Ha)
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Produktivitas (Ton/Ha)
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="px-5 py-8 text-center text-gray-500 dark:text-gray-400">
                  <div className="flex flex-col items-center justify-center py-6">
                    <div className="mb-3 flex justify-center">
                      <svg className="animate-spin h-10 w-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Sedang memuat data...</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : currentItems.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="px-5 py-5 text-center text-theme-sm text-gray-500 dark:text-gray-400">
                  Tidak ada data yang sesuai dengan filter
                </TableCell>
              </TableRow>
            ) : (
              currentItems.map((item) => (
                <TableRow key={item.id || item.id_panen}>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">
                    {item.nama_kecamatan}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">
                    {item.nama_komoditas}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                    {item.tahun_panen}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                    <Badge size="sm" color="success">
                      {formatNumber(item.produksi)}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                    {formatNumber(item.luas_panen)}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                    {formatNumber(item.produktivitas)}
                  </TableCell>
                  <TableCell className="flex px-5 py-3 text-theme-sm text-center">
                    <button
                      onClick={() => handleEdit(item.id || item.id_panen)}
                      className="bg-gray-50 border p-2 mr-2 rounded-lg"
                      disabled={isLoading}
                    >
                      <Image src="/images/icons/pencil.svg" width={20} height={20} alt="Edit" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id || item.id_panen)}
                      className="bg-gray-50 border p-2 fill-red-600 rounded-lg"
                      disabled={isLoading}
                    >
                      <Image src="/images/icons/trash.svg" width={20} height={20} alt="Delete" />
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 border-t border-gray-100 dark:border-white/[0.05]">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredData.length > 0 ? indexOfFirstItem + 1 : 0} - {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      {/* Edit Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Data Hasil Panen
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Silahkan edit data hasil panen pada form ini
            </p>
          </div>
          <form className="flex flex-col" onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}>
            <div className="custom-scrollbar max-h-[350px] overflow-y-auto px-2 pb-3">
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Data Hasil Panen
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label>Kecamatan</Label>
                    <div className="relative">
                      <Select
                        options={kecamatanOptions.filter(option => option.value !== '')}
                        value={selectedItem?.id_kecamatan?.toString() || ''}
                        onChange={(value) => handleSelectChange(value, 'id_kecamatan')}
                        disabled={isSubmitting}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
                        <Image src="/images/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
                      </span>
                    </div>
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Komoditas</Label>
                    <div className="relative">
                      <Select
                        options={komoditasOptions.filter(option => option.value !== '')}
                        value={selectedItem?.id_komoditas?.toString() || ''}
                        onChange={(value) => handleSelectChange(value, 'id_komoditas')}
                        disabled={isSubmitting}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
                        <Image src="/images/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
                      </span>
                    </div>
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Tahun Panen</Label>
                    <Input
                      type="number"
                      value={selectedItem?.tahun_panen?.toString() || ''}
                      onChange={(e) => handleInputChange(e, 'tahun_panen')}
                      disabled={isSubmitting}
                      min="2020"
                      max="2030"
                      required
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Produksi (Ton)</Label>
                    <Input
                      type="number"
                      value={selectedItem?.produksi?.toString() || ''}
                      onChange={(e) => handleInputChange(e, 'produksi')}
                      disabled={isSubmitting}
                      step={0.001}
                      min="0"
                      required
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Luas Panen (Ha)</Label>
                    <Input
                      type="number"
                      value={selectedItem?.luas_panen?.toString() || ''}
                      onChange={(e) => handleInputChange(e, 'luas_panen')}
                      disabled={isSubmitting}
                      step={0.001}
                      min="0"
                      required
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Produktivitas (Ton/Ha)</Label>
                    <Input
                      type="number"
                      value={selectedItem?.produktivitas?.toString() || ''}
                      onChange={(e) => handleInputChange(e, 'produktivitas')}
                      disabled={isSubmitting}
                      step={0.001}
                      min="0"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button
                size="sm"
                variant="outline"
                type="button"
                onClick={closeModal}
                disabled={isSubmitting}
              >
                Batal
              </Button>
              <Button
                size="sm"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Menyimpan...
                  </span>
                ) : 'Simpan Perubahan'}
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}