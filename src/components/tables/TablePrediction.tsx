"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table/Tabel";
import Badge from "../ui/badge/Badge";
import Image from "next/image";

interface Komoditas {
  nama_komoditas: string;
}

interface Kecamatan {
  id_kecamatan: number;
  id_komoditas: number;
  komoditas: Komoditas;
  nama_kecamatan: string;
  deskripsi: string;
  gambar: string;
  area: number;
  posisi_x: number;
  posisi_y: number;
  created_at: string;
  updated_at: string;
}

export default function KecamatanTable() {
  const [kecamatans, setKecamatans] = useState<Kecamatan[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchKecamatans = async () => {
      try {
        const response = await fetch("/api/kecamatan");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setKecamatans(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load data");
        setLoading(false);
        console.error("Error fetching kecamatan data:", err);
      }
    };

    fetchKecamatans();
  }, []);

  // Truncate text to specific length
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Format area to include 2 decimal places and add "ha" unit
  const formatArea = (area: number) => {
    return area.toFixed(2) + " ha";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2">Loading data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center text-red-500">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="max-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  ID
                </TableCell>
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
                  Deskripsi
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Area
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Aksi
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {kecamatans.map((kecamatan) => (
                <TableRow key={kecamatan.id_kecamatan}>
                  <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {kecamatan.id_kecamatan}
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <Image
                          width={40}
                          height={40}
                          src={kecamatan.gambar || "/images/default-kecamatan.png"}
                          alt={kecamatan.nama_kecamatan}
                        />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {kecamatan.nama_kecamatan}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          Posisi: {kecamatan.posisi_x}, {kecamatan.posisi_y}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge size="sm" color="primary">
                      {kecamatan.komoditas.nama_komoditas}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {truncateText(kecamatan.deskripsi, 50)}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {formatArea(kecamatan.area)}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="flex gap-2">
                      <button
                        onClick={() => window.location.href = `/kecamatan/${kecamatan.id_kecamatan}`}
                        className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Detail
                      </button>
                      <button
                        onClick={() => window.location.href = `/kecamatan/edit/${kecamatan.id_kecamatan}`}
                        className="px-2 py-1 text-xs bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("Yakin ingin menghapus kecamatan ini?")) {
                            // Handle delete
                            fetch(`/api/kecamatan/${kecamatan.id_kecamatan}`, {
                              method: "DELETE",
                            })
                              .then((response) => {
                                if (response.ok) {
                                  // Refresh data after deletion
                                  setKecamatans(
                                    kecamatans.filter(
                                      (item) => item.id_kecamatan !== kecamatan.id_kecamatan
                                    )
                                  );
                                } else {
                                  alert("Gagal menghapus kecamatan");
                                }
                              })
                              .catch((err) => {
                                console.error("Error deleting kecamatan:", err);
                                alert("Terjadi kesalahan saat menghapus");
                              });
                          }
                        }}
                        className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Hapus
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              {kecamatans.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="px-5 py-4 text-center text-gray-500">
                    Tidak ada data kecamatan
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}