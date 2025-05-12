'use client';

import React, { useEffect, useState } from 'react';
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal/Modal";
import Input from "../ui/input/InputField";
import Label from "../ui/label/Label";
import TextArea from "../ui/input/TextArea";
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

interface Kecamatan {
  id_kecamatan: number;
  nama_kecamatan: string;
  deskripsi: string;
  area: string;
  posisi_x?: string;
  posisi_y?: string;
  gambar?: string;
  nama_komoditas: string;
  id_komoditas?: number;
}

interface Komoditas {
  id_komoditas: number;
  nama_komoditas: string;
}

export default function TableKecamatan() {
  const [data, setData] = useState<Kecamatan[]>([]);
  const [filteredData, setFilteredData] = useState<Kecamatan[]>([]);
  const [kecamatanOptions, setKecamatanOptions] = useState<{ value: string, label: string }[]>([]);
  const [komoditasOptions, setKomoditasOptions] = useState<{ value: string, label: string }[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedKecamatan, setSelectedKecamatan] = useState<Kecamatan | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [filters, setFilters] = useState({
    kecamatan: '',
    komoditas: ''
  });
  const { isOpen, openModal, closeModal } = useModal();

  const itemsPerPage = 5;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const fetchKecamatanData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/kecamatan');
      const result = await res.json();
      setData(result);
      setFilteredData(result);

      const uniqueKecamatan = Array.from(new Set(result.map((item: Kecamatan) => item.nama_kecamatan)))
        .map(kecamatan => ({
          value: kecamatan as string,
          label: kecamatan as string
        }));

      setKecamatanOptions([{ value: '', label: 'Semua Kecamatan' }, ...uniqueKecamatan]);
    } catch (error) {
      console.error('Gagal mengambil data kecamatan:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchKomoditasData = async () => {
    try {
      const res = await fetch('/api/komoditas');
      const result = await res.json();

      const komoditasOptions = [
        { value: '', label: 'Semua Komoditas' },
        ...result.map((item: Komoditas) => ({
          value: item.nama_komoditas,
          label: item.nama_komoditas
        }))
      ];

      setKomoditasOptions(komoditasOptions);
    } catch (error) {
      console.error('Gagal mengambil data komoditas:', error);
    }
  };

  useEffect(() => {
    fetchKecamatanData();
    fetchKomoditasData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, data]);

  const applyFilters = () => {
    let result = [...data];

    if (filters.kecamatan) {
      result = result.filter(item => item.nama_kecamatan === filters.kecamatan);
    }

    if (filters.komoditas) {
      result = result.filter(item => item.nama_komoditas === filters.komoditas);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof Kecamatan) => {
    if (selectedKecamatan) {
      setSelectedKecamatan({
        ...selectedKecamatan,
        [field]: e.target.value
      });
    }
  };

  const handleSave = async () => {
    if (!selectedKecamatan) return;

    setIsLoading(true);

    const updatedData = {
      nama_kecamatan: selectedKecamatan.nama_kecamatan,
      deskripsi: selectedKecamatan.deskripsi,
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
        setMessage("Data berhasil diperbarui");

        setData(prevData =>
          prevData.map(item =>
            item.id_kecamatan === selectedKecamatan.id_kecamatan
              ? { ...item, ...updatedData }
              : item
          )
        );

        closeModal();

        await fetchKecamatanData();
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
          <h4 className="text-lg font-medium text-gray-800 dark:text-white/90">Data Kecamatan</h4>
          <div className="flex justify-end gap-2 w-full sm:w-130">
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
                options={komoditasOptions}
                placeholder="Komoditas"
                onChange={handleKomoditasFilterChange}
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
                    Loading data...
                  </TableCell>
                </TableRow>
              ) : currentItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="px-5 py-8 text-center text-gray-500 dark:text-gray-400">
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
                      {item.deskripsi}
                    </TableCell>
                    <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                      {item.area}
                    </TableCell>
                    <TableCell className="px-5 py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                      <Badge size="sm" color="success">{item.nama_komoditas}</Badge>
                    </TableCell>
                    <TableCell className="px-5 py-3 text-theme-sm text-center">
                      <button
                        onClick={() => handleEdit(item.id_kecamatan)}
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
              Edit Data Kecamatan
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Silahkan Edit Data Kecamatan pada form ini
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
                  Data Kecamatan
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label>Nama Kecamatan</Label>
                    <Input
                      type="text"
                      value={selectedKecamatan?.nama_kecamatan || ''}
                      onChange={(e) => handleInputChange(e, 'nama_kecamatan')}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Luas Area</Label>
                    <Input
                      type="text"
                      value={selectedKecamatan?.area || ''}
                      onChange={(e) => handleInputChange(e, 'area')}
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1 mt-4">
                  <Label>Deskripsi</Label>
                  <TextArea
                    value={selectedKecamatan?.deskripsi || ''}
                    onChange={(e) => handleInputChange(e, 'deskripsi')}
                    rows={3}
                    disabled={isLoading}
                  />
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