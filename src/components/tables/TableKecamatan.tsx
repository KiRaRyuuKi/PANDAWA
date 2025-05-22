'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal/Modal";
import Input from "../ui/input/InputField";
import Label from "../ui/label/Label";
import TextArea from "../ui/input/TextArea";
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
  id_kecamatan: number;
  id_komoditas?: number;
  komoditas?: {
    nama_komoditas: string;
  };
  nama_kecamatan: string;
  nama_komoditas?: string;
  deskripsi: string;
  gambar?: string;
  area: number;
  posisi_x?: number;
  posisi_y?: number;
}

interface Komoditas {
  id_komoditas: number;
  nama_komoditas: string;
}

interface SelectOption {
  value: string;
  label: string;
}

export default function TableKecamatan() {
  const [data, setData] = useState<Kecamatan[]>([]);
  const [filteredData, setFilteredData] = useState<Kecamatan[]>([]);
  const [kecamatanOptions, setKecamatanOptions] = useState<SelectOption[]>([]);
  const [komoditasOptions, setKomoditasOptions] = useState<SelectOption[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedKecamatan, setSelectedKecamatan] = useState<Kecamatan | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    kecamatan: '',
    komoditas: ''
  });
  const { isOpen, openModal, closeModal } = useModal();
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Format a Kecamatan object for display, handling nested komoditas
  const formatKecamatan = useCallback((item: any): Kecamatan => {
    return {
      ...item,
      nama_komoditas: item.komoditas?.nama_komoditas || item.nama_komoditas || 'Tidak ada',
      area: typeof item.area === 'string' ? parseFloat(item.area) : item.area
    };
  }, []);

  const fetchKecamatanData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/kecamatan', {
        headers: {
          'Cache-Control': 'no-cache'
        }
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.json();

      // Format data consistently
      const formattedData = result.map(formatKecamatan);

      setData(formattedData);
      setFilteredData(formattedData);

      // Extract unique kecamatan names for filter options
      const uniqueKecamatan = Array.from(
        new Set(formattedData.map((item: Kecamatan) => item.nama_kecamatan))
      ).map(kecamatan => ({
        value: kecamatan as string,
        label: kecamatan as string
      }));

      setKecamatanOptions([{ value: '', label: 'Semua Kecamatan' }, ...uniqueKecamatan]);
    } catch (error) {
      console.error('Gagal mengambil data kecamatan:', error);
      setError('Terjadi kesalahan saat mengambil data kecamatan');
      toast.error('Gagal mengambil data kecamatan');
    } finally {
      setIsLoading(false);
    }
  }, [formatKecamatan]);

  const fetchKomoditasData = useCallback(async () => {
    try {
      const res = await fetch('/api/komoditas', {
        headers: {
          'Cache-Control': 'no-cache'
        }
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.json();

      // Extract unique komoditas names from data since API might not be returning expected format
      const uniqueKomoditas = Array.from(
        new Set(data.filter(item => item.nama_komoditas).map(item => item.nama_komoditas))
      ).map(komoditas => ({
        value: komoditas as string,
        label: komoditas as string
      }));

      setKomoditasOptions([{ value: '', label: 'Semua Komoditas' }, ...uniqueKomoditas]);
    } catch (error) {
      console.error('Gagal mengambil data komoditas:', error);
      // Don't set an error here, just use the data we already have
      // Extract komoditas options from current kecamatan data as fallback
      const uniqueKomoditas = Array.from(
        new Set(data.filter(item => item.nama_komoditas).map(item => item.nama_komoditas))
      ).map(komoditas => ({
        value: komoditas as string,
        label: komoditas as string
      }));

      setKomoditasOptions([{ value: '', label: 'Semua Komoditas' }, ...uniqueKomoditas]);
    }
  }, [data]);

  useEffect(() => {
    fetchKecamatanData();
  }, [fetchKecamatanData]);

  // Fetch komoditas data after kecamatan data is loaded
  useEffect(() => {
    if (data.length > 0) {
      fetchKomoditasData();
    }
  }, [fetchKomoditasData, data]);

  // Apply filters when filters or data change
  useEffect(() => {
    if (data.length > 0) {
      applyFilters();
    }
  }, [filters, data]);

  const applyFilters = () => {
    let result = [...data];

    if (filters.kecamatan) {
      result = result.filter(item =>
        item.nama_kecamatan?.toLowerCase() === filters.kecamatan.toLowerCase()
      );
    }

    if (filters.komoditas) {
      result = result.filter(item =>
        item.nama_komoditas?.toLowerCase() === filters.komoditas.toLowerCase()
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

  const handleKomoditasFilterChange = (value: string) => {
    setFilters(prev => ({ ...prev, komoditas: value }));
  };

  const handleEdit = (id: number) => {
    const selected = data.find(item => item.id_kecamatan === id);
    if (selected) {
      setSelectedKecamatan({ ...selected });
      openModal();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Kecamatan
  ) => {
    if (selectedKecamatan) {
      let value: string | number = e.target.value;

      // Convert area to number for the area field
      if (field === 'area' && value !== '') {
        value = parseFloat(value);
        if (isNaN(value)) {
          value = 0;
        }
      }

      setSelectedKecamatan({
        ...selectedKecamatan,
        [field]: value
      });
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedKecamatan) return;

    // Validate input
    if (!selectedKecamatan.nama_kecamatan?.trim()) {
      toast.error('Nama kecamatan tidak boleh kosong');
      return;
    }

    if (!selectedKecamatan.deskripsi?.trim()) {
      toast.error('Deskripsi tidak boleh kosong');
      return;
    }

    if (!selectedKecamatan.area || selectedKecamatan.area <= 0) {
      toast.error('Area harus diisi dengan nilai yang valid');
      return;
    }

    setIsSubmitting(true);

    const updatedData = {
      nama_kecamatan: selectedKecamatan.nama_kecamatan.trim(),
      deskripsi: selectedKecamatan.deskripsi.trim(),
      area: selectedKecamatan.area,
    };

    try {
      const res = await fetch(`/api/kecamatan/${selectedKecamatan.id_kecamatan}`, {
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
            item.id_kecamatan === selectedKecamatan.id_kecamatan
              ? { ...item, ...updatedData, nama_komoditas: item.nama_komoditas }
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

  // Function to truncate text for display
  const truncateText = (text: string, maxLength: number) => {
    if (!text) return '';
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  // Loading spinner component that matches the button loading style
  const LoadingSpinner = () => (
    <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

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
                placeholder="--Select an Kecamatan--"
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
                options={komoditasOptions}
                placeholder="--Select an Komoditas--"
                onChange={handleKomoditasFilterChange}
                className="dark:bg-dark-900 w-full"
                value={filters.komoditas}
                disabled={isLoading}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
                <Image src="/images/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
              </span>
            </div>
            <Button
              size="sm"
              className="flex-shrink-0"
              onClick={() => fetchKecamatanData()}
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
                Deskripsi
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Area (ha)
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Komoditas Unggulan
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
                <TableRow key={item.id_kecamatan}>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">
                    {item.nama_kecamatan}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 text-justify dark:text-gray-400">
                    <div className="max-w-xs lg:max-w-md">
                      {truncateText(item.deskripsi, 100)}
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                    {item.area.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                    <Badge size="sm" color="success">
                      {item.nama_komoditas || 'Tidak ada'}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-center">
                    <button
                      onClick={() => handleEdit(item.id_kecamatan)}
                      className="bg-gray-50 border p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isLoading}
                      aria-label="Edit kecamatan"
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
              Edit Data Kecamatan
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Silahkan Edit Data Kecamatan pada form ini
            </p>
          </div>
          <form className="flex flex-col" onSubmit={handleSave}>
            <div className="custom-scrollbar max-h-[350px] overflow-y-auto px-2 pb-3">
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Data Kecamatan
                </h5>
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-4">
                  <div className="col-span-2 lg:col-span-1">
                    <Label htmlFor="nama_kecamatan">Nama Kecamatan<span className="text-red-500">*</span></Label>
                    <Input
                      id="nama_kecamatan"
                      type="text"
                      value={selectedKecamatan?.nama_kecamatan || ''}
                      onChange={(e) => handleInputChange(e, 'nama_kecamatan')}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  {selectedKecamatan?.nama_komoditas && (
                    <div className="col-span-3 lg:col-span-2">
                      <Label>Komoditas Unggulan</Label>
                      <div className="p-2 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <Badge size="md" color="success">{selectedKecamatan.nama_komoditas}</Badge>
                      </div>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        *Komoditas unggulan tidak dapat diubah melalui form ini
                      </p>
                    </div>
                  )}
                  <div className="col-span-2 lg:col-span-1">
                    <Label htmlFor="area">Luas Area (ha)<span className="text-red-500">*</span></Label>
                    <Input
                      id="area"
                      type="number"
                      value={selectedKecamatan?.area || ''}
                      onChange={(e) => handleInputChange(e, 'area')}
                      disabled={isSubmitting}
                      step={0.001}
                      min="0"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1 mt-4">
                  <Label htmlFor="deskripsi">Deskripsi<span className="text-red-500">*</span></Label>
                  <TextArea
                    id="deskripsi"
                    value={selectedKecamatan?.deskripsi || ''}
                    onChange={(e) => handleInputChange(e, 'deskripsi')}
                    rows={3}
                    disabled={isSubmitting}
                    className="text-gray-600"
                    required
                  />
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