'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal/Modal";
import Input from "../ui/input/InputField";
import Label from "../ui/label/Label";
import Image from 'next/image';
import { toast } from 'react-hot-toast';

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

interface Kecamatan {
  nama_kecamatan: string;
}

interface Penduduk {
  id_penduduk: number;
  id_kecamatan: number;
  kecamatan: Kecamatan;
  laju_pertumbuhan: string;
  jumlah_penduduk: number;
  data_tahun: number;
}

interface SelectOption {
  value: string;
  label: string;
}

export default function TablePenduduk() {
  const [data, setData] = useState<Penduduk[]>([]);
  const [filteredData, setFilteredData] = useState<Penduduk[]>([]);
  const [kecamatanOptions, setKecamatanOptions] = useState<SelectOption[]>([]);
  const [tahunOptions, setTahunOptions] = useState<SelectOption[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPenduduk, setSelectedPenduduk] = useState<Penduduk | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    kecamatan: '',
    tahun: ''
  });
  const { isOpen, openModal, closeModal } = useModal();
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/penduduk', {
        headers: {
          'Cache-Control': 'no-cache'
        }
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.json();

      if (Array.isArray(result)) {
        setData(result);
        setFilteredData(result);

        // Extract unique kecamatan names for filter options
        const uniqueKecamatan = Array.from(
          new Set(result.map((item: Penduduk) => item.kecamatan?.nama_kecamatan))
        ).filter(Boolean).map(kecamatan => ({
          value: kecamatan as string,
          label: kecamatan as string
        }));

        setKecamatanOptions([{ value: '', label: 'Semua Kecamatan' }, ...uniqueKecamatan]);

        // Extract and sort unique years for filter options
        const uniqueTahun = Array.from(
          new Set(result.map((item: Penduduk) => item.data_tahun))
        )
          .map(tahun => ({
            value: String(tahun),
            label: String(tahun)
          }))
          .sort((a, b) => parseInt(b.value) - parseInt(a.value));

        setTahunOptions([{ value: '', label: 'Semua Tahun' }, ...uniqueTahun]);
      } else {
        console.error('Expected array but got:', result);
        setError('Format data tidak sesuai');
        toast.error('Format data tidak sesuai');
      }
    } catch (error) {
      console.error('Gagal mengambil data penduduk:', error);
      setError('Gagal mengambil data penduduk');
      toast.error('Gagal mengambil data penduduk');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (data.length > 0) {
      applyFilters();
    }
  }, [filters, data]);

  const applyFilters = () => {
    let result = [...data];

    if (filters.kecamatan) {
      result = result.filter(item =>
        item.kecamatan?.nama_kecamatan?.toLowerCase() === filters.kecamatan.toLowerCase()
      );
    }

    if (filters.tahun) {
      result = result.filter(item =>
        String(item.data_tahun) === filters.tahun
      );
    }

    setFilteredData(result);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const handleKecamatanFilterChange = (value: string) => {
    setFilters(prev => ({ ...prev, kecamatan: value }));
  };

  const handleTahunFilterChange = (value: string) => {
    setFilters(prev => ({ ...prev, tahun: value }));
  };

  const handleEdit = (id: number) => {
    const selected = data.find(item => item.id_penduduk === id);
    if (selected) {
      setSelectedPenduduk({ ...selected });
      openModal();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Penduduk
  ) => {
    if (selectedPenduduk) {
      const inputValue = e.target.value;

      // Handle each field with proper type
      if (field === 'data_tahun') {
        const numericValue = parseInt(inputValue) || new Date().getFullYear();
        setSelectedPenduduk({
          ...selectedPenduduk,
          [field]: numericValue
        });
      } else if (field === 'jumlah_penduduk') {
        const numericValue = parseFloat(inputValue) || 0;
        setSelectedPenduduk({
          ...selectedPenduduk,
          [field]: numericValue
        });
      } else {
        // For string fields like 'laju_pertumbuhan'
        setSelectedPenduduk({
          ...selectedPenduduk,
          [field]: inputValue
        });
      }
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPenduduk) return;

    // Validate input
    if (!selectedPenduduk.laju_pertumbuhan?.trim()) {
      toast.error('Laju pertumbuhan tidak boleh kosong');
      return;
    }

    if (selectedPenduduk.jumlah_penduduk === undefined || selectedPenduduk.jumlah_penduduk < 0) {
      toast.error('Jumlah penduduk tidak boleh kosong');
      return;
    }

    if (!selectedPenduduk.data_tahun || selectedPenduduk.data_tahun < 1900 || selectedPenduduk.data_tahun > 2100) {
      toast.error('Tahun harus diisi dengan nilai yang valid');
      return;
    }

    setIsSubmitting(true);

    const updatedData = {
      laju_pertumbuhan: selectedPenduduk.laju_pertumbuhan.trim(),
      jumlah_penduduk: selectedPenduduk.jumlah_penduduk,
      data_tahun: selectedPenduduk.data_tahun
    };

    try {
      const res = await fetch(`/api/penduduk/${selectedPenduduk.id_penduduk}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        const result = await res.json();
        toast.success("Data berhasil diperbarui");

        // Optimistically update the UI
        setData(prevData =>
          prevData.map(item =>
            item.id_penduduk === selectedPenduduk.id_penduduk
              ? {
                ...item,
                laju_pertumbuhan: updatedData.laju_pertumbuhan,
                jumlah_penduduk: updatedData.jumlah_penduduk,
                data_tahun: updatedData.data_tahun
              }
              : item
          )
        );

        closeModal();
      } else {
        const errorData = await res.json();
        toast.error(`Gagal update: ${errorData.error || 'Unknown error'}`);
        console.error("Gagal update:", errorData.error);
      }
    } catch (error) {
      console.error("Error saat menyimpan:", error);
      toast.error("Terjadi kesalahan saat menyimpan data");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate pagination values
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      {/* Header, Filter dan Tombol Tambah */}
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
            <div className="relative flex-1 sm:flex-none min-w-[150px]">
              <Select
                options={kecamatanOptions}
                placeholder="--Pilih Kecamatan--"
                onChange={handleKecamatanFilterChange}
                className="dark:bg-dark-900 w-full"
                value={filters.kecamatan}
                disabled={isLoading}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
                <Image src="/images/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
              </span>
            </div>
            <div className="relative flex-1 sm:flex-none min-w-[150px]">
              <Select
                options={tahunOptions}
                placeholder="--Pilih Tahun--"
                onChange={handleTahunFilterChange}
                className="dark:bg-dark-900 w-full"
                value={filters.tahun}
                disabled={isLoading}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
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
      </div>

      {/* Tabel */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Kecamatan
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Laju Pertumbuhan
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Jumlah Penduduk
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Tahun
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-center text-theme-xs text-gray-500 dark:text-gray-400">
                Action
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="px-5 py-8 text-center text-gray-500 dark:text-gray-400">
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
                <TableCell colSpan={5} className="px-5 py-5 text-center text-theme-sm text-gray-500 dark:text-gray-400">
                  Tidak ada data yang sesuai dengan filter
                </TableCell>
              </TableRow>
            ) : (
              currentItems.map((item) => (
                <TableRow key={item.id_penduduk}>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">
                    {item.kecamatan?.nama_kecamatan || 'N/A'}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 text-justify dark:text-gray-400">
                    {item.laju_pertumbuhan}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                    <Badge size="sm" color="success">
                      {item.jumlah_penduduk}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 text-justify dark:text-gray-400">
                    {item.data_tahun}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-center">
                    <button
                      onClick={() => handleEdit(item.id_penduduk)}
                      className="bg-gray-50 border p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isLoading}
                      aria-label="Edit penduduk"
                    >
                      <Image src="/images/icons/pencil.svg" width={20} height={20} alt="Edit" />
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
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[800px] m-4">
        <div className="no-scrollbar relative w-full max-w-[800px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Data Penduduk
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Silahkan Edit Data Penduduk pada form ini
            </p>
          </div>
          <form className="flex flex-col" onSubmit={handleSave}>
            <div className="custom-scrollbar max-h-[350px] overflow-y-auto px-2 pb-3">
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Data Penduduk
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label htmlFor="nama_kecamatan">Nama Kecamatan</Label>
                    <Input
                      id="nama_kecamatan"
                      type="text"
                      value={selectedPenduduk?.kecamatan?.nama_kecamatan || ''}
                      disabled={true}
                      className="bg-gray-50"
                    />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      *Nama kecamatan tidak dapat diubah melalui form ini
                    </p>
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label htmlFor="data_tahun">Tahun<span className="text-red-500">*</span></Label>
                    <Input
                      id="data_tahun"
                      type="number"
                      value={selectedPenduduk?.data_tahun || ''}
                      onChange={(e) => handleInputChange(e, 'data_tahun')}
                      disabled={isSubmitting}
                      min="2020"
                      max="2030"
                      required
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label htmlFor="laju_pertumbuhan">Laju Pertumbuhan<span className="text-red-500">*</span></Label>
                    <Input
                      id="laju_pertumbuhan"
                      type="text"
                      value={selectedPenduduk?.laju_pertumbuhan || ''}
                      onChange={(e) => handleInputChange(e, 'laju_pertumbuhan')}
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label htmlFor="jumlah_penduduk">Jumlah Penduduk<span className="text-red-500">*</span></Label>
                    <Input
                      id="jumlah_penduduk"
                      type="number"
                      value={selectedPenduduk?.jumlah_penduduk || ''}
                      onChange={(e) => handleInputChange(e, 'jumlah_penduduk')}
                      disabled={isSubmitting}
                      step={0.000}
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