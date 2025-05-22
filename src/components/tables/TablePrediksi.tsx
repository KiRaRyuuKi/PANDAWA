'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../ui/table/Tabel';

import Badge from '../ui/badge/Badge';
import Pagination from './Pagination';
import Select from '../ui/select/Select';

interface PrediksiPanen {
  id_prediksi: string | number;
  id_kecamatan: number;
  nama_kecamatan: string;
  id_komoditas: number;
  nama_komoditas: string;
  tahun: number;
  luas_panen: number;
  rata_rata_produksi: number;
  hasil_prediksi: number;
}

interface FilterOption {
  value: string;
  label: string;
}

export default function TablePrediksi() {
  // State definitions
  const [prediksiData, setPrediksiData] = useState<PrediksiPanen[]>([]);
  const [filteredData, setFilteredData] = useState<PrediksiPanen[]>([]);
  const [kecamatanOptions, setKecamatanOptions] = useState<FilterOption[]>([]);
  const [komoditasOptions, setKomoditasOptions] = useState<FilterOption[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    kecamatan: '',
    komoditas: '1',
    tahun: '',
    tahunOptions: [] as FilterOption[]
  });

  const itemsPerPage = 5;

  // Calculate pagination values
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Fetch prediksi panen data
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      console.log('Fetching data from /api/prediksi');
      const res = await fetch('/api/prediksi');
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const result = await res.json();
      console.log('Data fetched:', result);

      if (Array.isArray(result)) {
        setPrediksiData(result);
        setFilteredData(result);

        // Generate kecamatan options for filter dropdown
        const uniqueKecamatan = Array.from(
          new Set(result.map((item: PrediksiPanen) => item.id_kecamatan))
        ).map(id_kecamatan => {
          const item = result.find((d: PrediksiPanen) => d.id_kecamatan === id_kecamatan);
          return {
            value: id_kecamatan.toString(),
            label: item?.nama_kecamatan || 'Unknown'
          };
        });

        setKecamatanOptions([{ value: '', label: 'Semua Kecamatan' }, ...uniqueKecamatan]);

        // Generate komoditas options for filter dropdown
        const uniqueKomoditas = Array.from(
          new Set(result.map((item: PrediksiPanen) => item.id_komoditas))
        ).map(id_komoditas => {
          const item = result.find((d: PrediksiPanen) => d.id_komoditas === id_komoditas);
          return {
            value: id_komoditas.toString(),
            label: item?.nama_komoditas || 'Unknown'
          };
        });

        setKomoditasOptions([{ value: '', label: 'Semua Komoditas' }, ...uniqueKomoditas]);

        // Generate tahun options for filter dropdown
        const uniqueTahun = Array.from(
          new Set(result.map((item: PrediksiPanen) => item.tahun))
        ).map(tahun => ({
          value: String(tahun),
          label: String(tahun)
        })).sort((a, b) => parseInt(b.value) - parseInt(a.value)); // Sort by year descending

        setFilters(prev => ({
          ...prev,
          tahunOptions: [{ value: '', label: 'Semua Tahun' }, ...uniqueTahun]
        }));
      } else {
        console.error('Expected array but got:', result);
        setError('Format data tidak sesuai');
      }
    } catch (error) {
      console.error('Gagal mengambil data prediksi panen:', error);
      setError('Gagal mengambil data: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // This will trigger filtering by komoditas ID 1 (Padi) after data loading
    if (komoditasOptions.length > 0 && filters.komoditas === '1') {
      // Force the applyFilters to run after komoditasOptions are populated
      applyFilters();
    }
  }, [komoditasOptions]);

  // Apply filters when filter state changes
  useEffect(() => {
    applyFilters();
  }, [filters, prediksiData]);

  // Filter function
  const applyFilters = () => {
    let result = [...prediksiData];

    if (filters.kecamatan) {
      result = result.filter(item => item.id_kecamatan.toString() === filters.kecamatan);
    }

    if (filters.komoditas) {
      result = result.filter(item => item.id_komoditas.toString() === filters.komoditas);
    }

    if (filters.tahun) {
      result = result.filter(item => item.tahun.toString() === filters.tahun);
    }

    setFilteredData(result);
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle filter changes
  const handleKecamatanFilterChange = (value: string) => {
    setFilters(prev => ({ ...prev, kecamatan: value }));
  };

  const handleKomoditasFilterChange = (value: string) => {
    setFilters(prev => ({ ...prev, komoditas: value }));
  };

  const handleTahunFilterChange = (value: string) => {
    setFilters(prev => ({ ...prev, tahun: value }));
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      {/* Filter Section */}
      <div className="p-5 border-b border-gray-100 dark:border-white/[0.05]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white/90">Data Prediksi Panen</h4>
          <div className="flex flex-wrap justify-end gap-2 w-full sm:w-auto">
            <div className="relative">
              <Select
                options={kecamatanOptions}
                placeholder="Kecamatan"
                onChange={handleKecamatanFilterChange}
                className="dark:bg-dark-900"
              />
              <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                <Image src="/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
              </span>
            </div>
            <div className="relative">
              <Select
                options={komoditasOptions}
                placeholder="Komoditas"
                onChange={handleKomoditasFilterChange}
                className="dark:bg-dark-900"
                value={filters.komoditas}
              />
              <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                <Image src="/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
              </span>
            </div>
            <div className="relative">
              <Select
                options={filters.tahunOptions || []}
                placeholder="Tahun"
                onChange={handleTahunFilterChange}
                className="dark:bg-dark-900"
              />
              <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                <Image src="/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
              </span>
            </div>
          </div>
        </div>

        {/* Error display */}
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-full">
          <Table>
            {/* Table Header */}
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
                  Tahun
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
                  Rata-rata Produksi (Ton/Ha)
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Hasil Prediksi (Ton)
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="px-5 py-3 text-center text-theme-sm text-gray-500 dark:text-gray-400">
                    Loading data...
                  </TableCell>
                </TableRow>
              ) : currentItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="px-5 py-3 text-center text-theme-sm text-gray-500 dark:text-gray-400">
                    Tidak ada data yang sesuai dengan filter
                  </TableCell>
                </TableRow>
              ) : (
                currentItems.map((item) => (
                  <TableRow key={item.id_prediksi}>
                    <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">
                      {item.nama_kecamatan}
                    </TableCell>
                    <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">
                      {item.nama_komoditas}
                    </TableCell>
                    <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                      {item.tahun}
                    </TableCell>
                    <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                      {item.luas_panen}
                    </TableCell>
                    <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                      {item.rata_rata_produksi}
                    </TableCell>
                    <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                      <Badge size="sm" color="success">
                        {item.hasil_prediksi}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          {filteredData.length > 0 && (
            <div className="flex justify-end p-4 border-t border-gray-100 dark:border-white/[0.05]">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}