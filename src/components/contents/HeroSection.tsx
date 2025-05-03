// components/HeroSection.tsx
import React, { useEffect } from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
    // Animation effect can be added with a library like framer-motion
    // or you can use a custom hook for animations

    return (
        <div className="relative py-20 md:py-32 bg-gradient-to-r from-gray-50 to-blue-50" id="top">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
                        <div className="text-left">
                            <h6 className="text-gray-600 mb-3">Selamat Datang di PANDAWA</h6>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Visualisasi
                                <em className="text-blue-600 not-italic"> Interaktif untuk </em>
                                <span className="text-red-500">Kebijakan di </span>
                                Bondowoso
                            </h2>
                            <p className="text-gray-700 mb-8 max-w-lg">
                                Menggunakan teknologi GIS untuk menyusun kebijakan berbasis data,
                                mengintegrasikan informasi dari berbagai sektor, dan meningkatkan
                                efisiensi pemantauan lingkungan di Kabupaten Bondowoso.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/2 animate-fadeInRight">
                        <div className="relative">
                            <Image
                                src="/assets/images/banner-right-image.png"
                                alt="team meeting"
                                width={600}
                                height={450}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;