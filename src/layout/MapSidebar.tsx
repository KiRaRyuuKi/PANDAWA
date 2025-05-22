'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';
import { DataKecamatan, dataKecamatan } from '@/data/kecamatan';

interface SidebarProps {
    onSelectKecamatan: (kecamatan: DataKecamatan) => void;
    isOpen: boolean;
    toggleSidebar: () => void;
}

export function Sidebar({ onSelectKecamatan, isOpen, toggleSidebar }: SidebarProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [allKecamatan, setAllKecamatan] = useState<DataKecamatan[]>([]);
    const [filteredKecamatan, setFilteredKecamatan] = useState<DataKecamatan[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/kecamatan');
                const data: DataKecamatan[] = await res.json();

                const merged = data.map(item => {
                    const local = dataKecamatan.find(
                        local => String(local.id_kecamatan) === String(item.id_kecamatan)
                    );
                    return {
                        ...item,
                        defaultColor: local?.default_color || "#5b9bd5"
                    };
                });

                setAllKecamatan(merged);
                setFilteredKecamatan(merged);
            } catch (error) {
                console.error("Gagal memuat data kecamatan:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredKecamatan(allKecamatan);
        } else {
            const filtered = allKecamatan.filter(item =>
                item.nama_kecamatan.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredKecamatan(filtered);
        }
    }, [searchTerm, allKecamatan]);

    return (
        <div className={`fixed p-2 top-0 left-0 h-screen z-40 ${isOpen ? 'w-80' : 'w-20'} duration-300`}>
            <div className={`bg-white rounded-xl border-r border-gray-200 shadow-sm h-full flex flex-col`}>
                {/* Logo */}
                <div className={`flex ${isOpen ? 'justify-between' : 'justify-center'} items-center px-4 py-5`}>
                    {isOpen ? (
                        <>
                            <a href="/" className="flex items-center gap-2">
                                <Image src="/images/logo/logo-pandawa.png" width={122} height={38} alt="Logo" />
                            </a>
                            <button
                                onClick={toggleSidebar}
                                className="bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all rounded-md p-1 text-gray-500"
                            >
                                <svg className="h-6 w-6 text-y-500" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
                                </svg>
                            </button>
                        </>
                    ) : (
                        <div className="flex justify-center w-full">
                            <button
                                onClick={toggleSidebar}
                                    className="hover:bg-gray-100 border border-white hover:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all rounded-md p-1 text-gray-500"
                            >
                                <svg className="h-6 w-6 text-gray-500" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* Search Box */}
                {isOpen ? (
                    <div className="px-4 pb-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Cari kecamatan..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-10 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all text-sm"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center pb-2">
                        <button
                            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all"
                            onClick={toggleSidebar}
                            title="Search kecamatan"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Kecamatan List */}
                <div className="overflow-y-auto flex-grow">
                    {isOpen && (
                        <h2 className="px-4.5 py-2 font-medium text-gray-800">Daftar Kecamatan</h2>
                    )}
                    <ul className="space-y-1">
                        {filteredKecamatan.map((item) => (
                            <li
                                key={item.id_kecamatan}
                                className={`${isOpen ? 'mx-3 p-[15px] rounded-lg' : 'hidden'} hover:bg-gray-100 cursor-pointer transition-colors`}
                                onClick={() => onSelectKecamatan(item)}
                                title={!isOpen ? item.nama_kecamatan : ''}
                            >
                                <div className="flex items-center">
                                    <div
                                        className="w-5 h-5 rounded-sm mr-3 flex-shrink-0"
                                        style={{ backgroundColor: item.default_color || "#5b9bd5" }}
                                    ></div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-800 truncate">{item.nama_kecamatan}</p>
                                        {item.area && (
                                            <p className="text-xs text-gray-500">
                                                Luas : {item.area} km²
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                        {filteredKecamatan.length === 0 && isOpen && (
                            <li className="p-4 text-center text-gray-500">
                                <div className="flex flex-col items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-sm">Tidak ada kecamatan yang sesuai dengan pencarian</p>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>

                {/* Footer */}
                <div className="p-4 mt-auto">
                    {isOpen ? (
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500">Peta Interaktif Bondowoso</p>
                                <p className="text-xs text-gray-500">Data BPS Kabupaten Bondowoso</p>
                            </div>
                            <button className="text-xs px-2.5 py-1.5 bg-gray-100 rounded-md text-gray-500 hover:bg-gray-200 transition-colors border border-gray-200">
                                ?
                            </button>
                        </div>
                    ) : (
                        <div className="flex justify-center">
                            <button className="text-xs px-2.5 py-1.5 bg-gray-100 rounded-md text-gray-500 hover:bg-gray-200 transition-colors border border-gray-200">
                                ?
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
