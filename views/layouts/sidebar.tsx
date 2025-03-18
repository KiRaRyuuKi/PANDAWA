import { useState, useEffect } from 'react';
import { Kecamatan } from './kecamatan';

export function Sidebar({ onSelectKecamatan, isOpen, toggleSidebar }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredKecamatan, setFilteredKecamatan] = useState(Kecamatan);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredKecamatan(Kecamatan);
        } else {
            const filtered = Kecamatan.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredKecamatan(filtered);
        }
    }, [searchTerm]);

    return (
        <div
            className={`absolute h-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'w-80' : 'w-0'}`}
        >
            <div className="p-4 h-full flex flex-col">
                <div className="relative mb-4 flex">
                    <input
                        type="text"
                        placeholder="Cari kecamatan..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm('')}
                            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </button>
                    )}
                </div>

                <div className="overflow-y-auto flex-grow">
                    <ul className="space-y-2">
                        {filteredKecamatan.map((item) => (
                            <li
                                key={item.name}
                                className="p-3 rounded-md hover:bg-indigo-50 cursor-pointer transition-colors"
                                onClick={() => onSelectKecamatan(item)}
                            >
                                <div className="flex items-center">
                                    <div
                                        className="w-4 h-4 rounded-sm mr-3"
                                        style={{ backgroundColor: item.defaultColor || "#5b9bd5" }}
                                    ></div>
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-600">Populasi: {item.population} jiwa</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                        {filteredKecamatan.length === 0 && (
                            <li className="p-3 text-center text-gray-500">
                                Tidak ada kecamatan yang sesuai dengan pencarian
                            </li>
                        )}
                    </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">© 2025 Peta Interaktif Bondowoso</p>
                    <p className="text-xs text-gray-500">Data: BPS Kab. Bondowoso</p>
                </div>
            </div>
        </div>
    );
}