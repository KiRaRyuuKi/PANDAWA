'use client';

import React, { useEffect, useState, useCallback } from 'react';
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

interface Komoditas {
  nama_komoditas: string;
}

interface PrediksiPanen {
  id_prediksi: number;
  id_kecamatan: number;
  id_komoditas: number;
  kecamatan: Kecamatan;
  komoditas: Komoditas;
  luas_panen: number;
  tahun_prediksi: number;
  hasil_prediksi: number;
  hasil_rata_rata: number;
}

interface SelectOption {
  value: string;
  label: string;
}

export default function TablePrediksi() {
  const [data, setData] = useState<PrediksiPanen[]>([]);
  const [filteredData, setFilteredData] = useState<PrediksiPanen[]>([]);
  const [kecamatanOptions, setKecamatanOptions] = useState<SelectOption[]>([]);
  const [komoditasOptions, setKomoditasOptions] = useState<SelectOption[]>([]);
  const [tahunOptions, setTahunOptions] = useState<SelectOption[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    kecamatan: '',
    komoditas: '',
    tahun: ''
  });
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/prediksi', {
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
          new Set(result.map((item: PrediksiPanen) => item.kecamatan?.nama_kecamatan))
        ).filter(Boolean).map(kecamatan => ({
          value: kecamatan as string,
          label: kecamatan as string
        }));

        setKecamatanOptions([{ value: '', label: 'Semua Kecamatan' }, ...uniqueKecamatan]);

        // Extract unique komoditas names for filter options
        const uniqueKomoditas = Array.from(
          new Set(result.map((item: PrediksiPanen) => item.komoditas?.nama_komoditas))
        ).filter(Boolean).map(komoditas => ({
          value: komoditas as string,
          label: komoditas as string
        }));

        setKomoditasOptions([{ value: '', label: 'Semua Komoditas' }, ...uniqueKomoditas]);

        // Extract and sort unique years for filter options
        const uniqueTahun = Array.from(
          new Set(result.map((item: PrediksiPanen) => item.tahun_prediksi))
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
      console.error('Gagal mengambil data prediksi panen:', error);
      setError('Gagal mengambil data prediksi panen');
      toast.error('Gagal mengambil data prediksi panen');
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

    if (filters.komoditas) {
      result = result.filter(item =>
        item.komoditas?.nama_komoditas?.toLowerCase() === filters.komoditas.toLowerCase()
      );
    }

    if (filters.tahun) {
      result = result.filter(item =>
        String(item.tahun_prediksi) === filters.tahun
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

  const handleTahunFilterChange = (value: string) => {
    setFilters(prev => ({ ...prev, tahun: value }));
  };

  // Calculate pagination values
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const formatNumber = (value: number) => {
    return value.toLocaleString('id-ID', { maximumFractionDigits: 3 });
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      {/* Header, Filter dan Tombol Refresh */}
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
            <div className="relative flex-1 sm:flex-none max-w-[150px]">
              <Select
                options={komoditasOptions}
                placeholder="--Pilih Komoditas--"
                onChange={handleKomoditasFilterChange}
                className="dark:bg-dark-900 w-full"
                value={filters.komoditas}
                disabled={isLoading}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
                <Image src="/images/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
              </span>
            </div>
            <div className="relative flex-1 sm:flex-none max-w-[150px]">
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
                Komoditas
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Luas Panen (Ha)
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Tahun
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Hasil Prediksi (Ton)
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Rata-rata Produksi (Ton/Ha)
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="px-5 py-8 text-center text-gray-500 dark:text-gray-400">
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
                <TableCell colSpan={6} className="px-5 py-5 text-center text-theme-sm text-gray-500 dark:text-gray-400">
                  Tidak ada data yang sesuai dengan filter
                </TableCell>
              </TableRow>
            ) : (
              currentItems.map((item) => (
                <TableRow key={item.id_prediksi}>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">
                    {item.kecamatan?.nama_kecamatan || 'N/A'}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">
                    {item.komoditas?.nama_komoditas || 'N/A'}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                    {formatNumber(item.luas_panen)}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                    {item.tahun_prediksi}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                    <Badge size="sm" color="success">
                      {formatNumber(item.hasil_prediksi)}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                    {formatNumber(item.hasil_rata_rata)}
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
    </div>
  );
}