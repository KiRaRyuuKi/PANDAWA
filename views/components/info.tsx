import React from 'react';
import type { PinData } from './pin';

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
                    {pin.image ? (
                        <img
                            src={pin.image}
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
                            <div className="relative">
                                <div
                                    className="w-7 h-7 rounded-full flex-shrink-0 border-2 border-white shadow flex items-center justify-center"
                                    style={{ backgroundColor: category?.color || '#3f51b5' }}
                                >
                                    {category?.icon && (
                                        <svg
                                            className="w-4 h-4 text-white"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d={category.icon} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-xl text-gray-800 leading-tight">
                                    {pin.title}
                                </h2>
                            </div>
                        </div>

                        {/* Category */}
                        <div className="px-2 py-1 bg-gray-100 rounded-md flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3 mr-2">
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                                <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                            </svg>

                            <span className="text-xs font-medium text-gray-600">
                                {category?.label || pin.category}
                            </span>
                        </div>
                    </div>

                    {/* Description with improved readability */}
                    {pin.description && (
                        <div className="mt-3">
                            <h4 className="text-sm font-semibold text-gray-700 mb-1">Description</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {pin.description}
                            </p>
                        </div>
                    )}

                    {/* Opening Hours */}
                    <div className="mt-4">
                        <div className="flex items-center">
                            <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <span className="text-sm font-medium text-gray-700">Open now</span>
                                <span className="text-xs text-gray-500 ml-2">• Closes at 9:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};