import React from 'react';
import type { PinData } from '@/components/map/PinsSebaran';

// Find the category for the pin
interface PinCategory {
    id: string;
    label: string;
    color: string;
    icon: string;
}

interface InfoPanelProps {
    pin: PinData | null;
    onClose: () => void;
    pinCategories: PinCategory[];
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ pin, onClose, pinCategories }) => {
    if (!pin) return null;

    // Find the category for the pin
    const category = pinCategories.find(cat => cat.id === pin.category);

    return (
        <div className="fixed p-2 top-0 h-screen left-19 w-sm">
            <div className='bg-white p-2 rounded-xl shadow-sm h-full'>
                <div className="relative h-48 rounded-md bg-gray-200 overflow-hidden">
                    {pin.gambar ? (
                        <img
                            src={pin.gambar}
                            alt={pin.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                            <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-400 text-sm mt-2">No image available</span>
                        </div>
                    )}

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute p-1 top-1 right-1 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-md text-gray-500 hover:text-gray-700 transition-all"
                        aria-label="Close panel"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="py-4 px-2 space-y-4">
                    {/* Title Section with improved styling */}
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">

                            <div>
                                <h2 className="font-bold text-xl text-gray-800 leading-tight">
                                    {pin.title}
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Description with improved readability */}
                    {pin.deskripsi && (
                        <div className="mt-3">
                            {/* <h4 className="text-sm font-semibold text-gray-700 mb-1">Description</h4> */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {pin.deskripsi}
                            </p>
                        </div>
                    )}

                    {/* Info Grid */}
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        {/* Jumlah Penduduk */}
                        <div className="bg-gray-50 rounded-lg p-3 flex flex-col items-center shadow-sm">
                            <svg className="w-6 h-6 text-orange-500 mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8a4 4 0 0 1 8 0H4Zm9 0a5.978 5.978 0 0 0-1.356-3.778A6.008 6.008 0 0 1 16 15h-3Z" />
                            </svg>
                            <p className="text-xs text-gray-500">Penduduk</p>
                            <p className="text-sm font-medium text-gray-800">{pin.population?.toLocaleString() || "-"} Jiwa</p>
                        </div>

                        {/* Area */}
                        <div className="bg-gray-50 rounded-lg p-3 flex flex-col items-center shadow-sm">
                            <svg className="w-6 h-6 text-green-500 mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z" />
                            </svg>
                            <p className="text-xs text-gray-500">Area</p>
                            <p className="text-sm font-medium text-gray-800">{pin.area || "-"}</p>
                        </div>

                        {/* Laju Pertumbuhan */}
                        <div className="bg-gray-50 rounded-lg p-3 flex flex-col items-center shadow-sm">
                            <svg className="w-6 h-6 text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" />
                            </svg>
                            <p className="text-xs text-gray-500">Laju Pertumbuhan</p>
                            <p className="text-sm font-medium text-gray-800">{pin.laju || "-"}</p>
                        </div>

                        {/* Komoditas Tertinggi */}
                        <div className="bg-gray-50 rounded-lg p-3 flex flex-col items-center shadow-sm">
                            <svg className="w-6 h-6 text-yellow-500 mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8Zm0 14a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6Z" />
                            </svg>
                            <p className="text-xs text-gray-500">Komoditas Utama</p>
                            <p
                                className="text-sm font-medium text-center text-gray-800"
                                dangerouslySetInnerHTML={{ __html: pin.komoditastertinggi || "-" }}
                            ></p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};