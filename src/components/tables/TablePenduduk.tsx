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

interface Penduduk {
  id_penduduk: number;
  nama_kecamatan: string;
  laju_pertumbuhan: string;
  jml_penduduk: string;
  tahun: number;
}

export default function TablePenduduk() {
  const [data, setData] = useState<Penduduk[]>([]);
  const [filteredData, setFilteredData] = useState<Penduduk[]>([]);
  const [kecamatanOptions, setKecamatanOptions] = useState<{ value: string, label: string }[]>([]);
  const [tahunOptions, setTahunOptions] = useState<{ value: string, label: string }[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPenduduk, setSelectedPenduduk] = useState<Penduduk | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [filters, setFilters] = useState({
    kecamatan: '',
    tahun: ''
  });
  const { isOpen, openModal, closeModal } = useModal();

  const itemsPerPage = 5;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      console.log('Fetching data from /api/penduduk');
      const res = await fetch('/api/penduduk');
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const result = await res.json();
      console.log('Data fetched:', result);

      if (Array.isArray(result)) {
        setData(result);
        setFilteredData(result);

        const uniqueKecamatan = Array.from(new Set(result.map((item: Penduduk) => item.nama_kecamatan)))
          .map(kecamatan => ({
            value: kecamatan as string,
            label: kecamatan as string
          }));



        setKecamatanOptions([{ value: '', label: 'Semua Kecamatan' }, ...uniqueKecamatan]);

        const uniqueTahun = Array.from(new Set(result.map((item: Penduduk) => item.tahun)))
          .map(tahun => ({
            value: String(tahun),
            label: String(tahun)
          }))
          .sort((a, b) => parseInt(b.value) - parseInt(a.value));

        setTahunOptions([{ value: '', label: 'Semua Tahun' }, ...uniqueTahun]);
      } else {
        console.error('Expected array but got:', result);
        setError('Format data tidak sesuai');
      }
    } catch (error) {
      console.error('Gagal mengambil data penduduk:', error);
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
  }, [filters, data]);

  const applyFilters = () => {
    let result = [...data];

    if (filters.kecamatan) {
      result = result.filter(item => item.nama_kecamatan === filters.kecamatan);
    }

    if (filters.tahun) {
      result = result.filter(item => String(item.tahun) === filters.tahun);
    }

    setFilteredData(result);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof Penduduk) => {
    if (selectedPenduduk) {
      setSelectedPenduduk({
        ...selectedPenduduk,
        [field]: field === 'tahun' ? parseInt(e.target.value) : e.target.value
      });
    }
  };

  const handleSave = async () => {
    if (!selectedPenduduk) return;

    setIsLoading(true);
    setMessage("");

    const updatedData = {
      laju_pertumbuhan: selectedPenduduk.laju_pertumbuhan,
      jml_penduduk: selectedPenduduk.jml_penduduk,
      tahun: selectedPenduduk.tahun
    };

    try {
      console.log(`Updating penduduk with ID: ${selectedPenduduk.id_penduduk}`, updatedData);
      const res = await fetch(`/api/penduduk/${selectedPenduduk.id_penduduk}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        const result = await res.json();
        setMessage("Data berhasil diperbarui");

        setData(prevData =>
          prevData.map(item =>
            item.id_penduduk === selectedPenduduk.id_penduduk
              ? { ...item, ...updatedData }
              : item
          )
        );

        closeModal();

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
      setIsLoading(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      {/* Filter dan Tombol Tambah */}
      <div className="p-5 border-b border-gray-100 dark:border-white/[0.05]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white/90">Data Penduduk</h4>
          <div className="flex justify-end gap-2 w-full sm:w-auto">
            <div className="relative">
              <Select
                options={kecamatanOptions}
                placeholder="Kecamatan"
                onChange={handleKecamatanFilterChange}
                className="dark:bg-dark-900"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
                <Image src="/images/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
              </span>
            </div>
            <div className="relative">
              <Select
                options={tahunOptions}
                placeholder="Tahun"
                onChange={handleTahunFilterChange}
                className="dark:bg-dark-900"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
                <Image src="/images/icons/chevron-down.svg" width={20} height={20} alt="Chevron Down" />
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

      {/* Tabel */}
      <div className="max-w-full overflow-x-auto">
        <div className="max-w-[1102px]">
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
                  <TableCell colSpan={5} className="px-5 py-3 text-center text-theme-sm text-gray-500 dark:text-gray-400">
                    Loading data...
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
                  <TableRow key={item.id_penduduk}>
                    <TableCell className="px-5 py-3 text-theme-sm text-gray-800 dark:text-white/90">
                      {item.nama_kecamatan}
                    </TableCell>
                    <TableCell className="px-5 py-3 text-theme-sm text-gray-500 text-justify dark:text-gray-400">
                      {item.laju_pertumbuhan}
                    </TableCell>
                    <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                      <Badge size="sm" color="success">{item.jml_penduduk}</Badge>
                    </TableCell>
                    <TableCell className="px-5 py-3 text-theme-sm text-gray-500 text-justify dark:text-gray-400">
                      {item.tahun}
                    </TableCell>
                    <TableCell className="px-5 py-3 text-theme-sm text-center">
                      <button
                        onClick={() => handleEdit(item.id_penduduk)}
                        className="bg-gray-50 border p-2 rounded-lg"
                        disabled={isLoading}
                      >
                        <Image src="/images/icons/pencil.svg" width={20} height={20} alt="Pencil" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-end p-4 border-t border-gray-100 dark:border-white/[0.05]">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Data Penduduk
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Silahkan Edit Data Penduduk pada form ini
            </p>
            {message && (
              <div className={`mb-4 p-2 rounded ${message.includes('berhasil') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message}
              </div>
            )}
          </div>
          <form className="flex flex-col" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <div className="custom-scrollbar h-[350px] overflow-y-auto px-2 pb-3">
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Data Penduduk
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label>Nama Kecamatan</Label>
                    <Input
                      type="text"
                      value={selectedPenduduk?.nama_kecamatan || ''}
                      onChange={(e) => handleInputChange(e, 'nama_kecamatan')}
                      disabled={true} // Make kecamatan name read-only as it's just a reference
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Tahun</Label>
                    <Input
                      type="number"
                      value={selectedPenduduk?.tahun || ''}
                      onChange={(e) => handleInputChange(e, 'tahun')}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Laju Pertumbuhan</Label>
                    <Input
                      type="text"
                      value={selectedPenduduk?.laju_pertumbuhan || ''}
                      onChange={(e) => handleInputChange(e, 'laju_pertumbuhan')}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Jumlah Penduduk</Label>
                    <Input
                      type="text"
                      value={selectedPenduduk?.jml_penduduk || ''}
                      onChange={(e) => handleInputChange(e, 'jml_penduduk')}
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal} disabled={isLoading}>
                Close
              </Button>
              <Button
                size="sm"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}