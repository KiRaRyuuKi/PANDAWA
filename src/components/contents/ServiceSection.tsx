// components/ServicesSection.tsx
import React from 'react';
import Image from 'next/image';

interface ProgressBarProps {
    title: string;
    percentage: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, percentage }) => {
    return (
        <div className="mb-8">
            <div className="flex justify-between mb-2">
                <h4 className="text-lg font-medium">{title}</h4>
                <span>{percentage}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: percentage }}
                ></div>
            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeInLeft">
                        <div className="relative">
                            <Image
                                src="/assets/images/services-left-image.png"
                                alt="services"
                                width={550}
                                height={550}
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="md:w-1/2 animate-fadeInRight">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Solusi <em className="text-blue-600 not-italic">Geospasial</em> untuk Pemerintah Kabupaten <span className="text-red-500">Bondowoso</span>
                            </h2>
                            <p className="text-gray-700 mb-8">
                                Platform ini dirancang untuk membantu instansi pemerintah Kabupaten Bondowoso dalam pemantauan dan pengelolaan sumber daya alam berbasis teknologi geospasial.
                            </p>
                        </div>

                        <div>
                            <ProgressBar
                                title="Pemetaan Sumber Daya Alam"
                                percentage="84%"
                            />

                            <ProgressBar
                                title="Prediksi Total Hasil Panen"
                                percentage="88%"
                            />

                            <ProgressBar
                                title="Visualisasi Data Geospasial"
                                percentage="94%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;