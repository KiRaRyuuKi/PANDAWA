import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ContentHeader: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`w-full py-4 transition-all duration-300 ${isSticky ? 'bg-white shadow-md fixed top-0 z-40' : ''}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <div className="flex items-center cursor-pointer">
                            <h4 className="text-2xl font-bold">
                                PAN<span className="text-red-500">DAWA</span>
                            </h4>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6 items-center">
                            <li>
                                <Link href="#top">
                                    <span className="text-gray-800 hover:text-red-500 transition-colors">Beranda</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#about">
                                    <span className="text-gray-800 hover:text-red-500 transition-colors">Tentang Kami</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#services">
                                    <span className="text-gray-800 hover:text-red-500 transition-colors">Layanan</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#portfolio">
                                    <span className="text-gray-800 hover:text-red-500 transition-colors">Portofolio</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact">
                                    <span className="text-gray-800 hover:text-red-500 transition-colors">Kontak Kami</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact">
                                    <span className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                                        Kontak Sekarang
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Trigger */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="focus:outline-none"
                        >
                            <span className="text-gray-800">Menu</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-gray-200">
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <Link href="#top" onClick={() => setMenuOpen(false)}>
                                    <span className="text-gray-800 hover:text-red-500 transition-colors">Beranda</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" onClick={() => setMenuOpen(false)}>
                                    <span className="text-gray-800 hover:text-red-500 transition-colors">Tentang Kami</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" onClick={() => setMenuOpen(false)}>
                                    <span className="text-gray-800 hover:text-red-500 transition-colors">Layanan</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#portfolio" onClick={() => setMenuOpen(false)}>
                                    <span className="text-gray-800 hover:text-red-500 transition-colors">Portofolio</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" onClick={() => setMenuOpen(false)}>
                                    <span className="text-gray-800 hover:text-red-500 transition-colors">Kontak Kami</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" onClick={() => setMenuOpen(false)}>
                                    <span className="bg-red-500 text-white px-4 py-2 rounded inline-block hover:bg-red-600 transition-colors">
                                        Kontak Sekarang
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default ContentHeader;