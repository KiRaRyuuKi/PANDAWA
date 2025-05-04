// components/PortfolioSection.tsx
import React from 'react';
import Image from 'next/image';

interface PortfolioItemProps {
    title: string;
    description: string;
    imageSrc: string;
    delay: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, imageSrc, delay }) => {
    return (
        <div className={`group relative overflow-hidden rounded-lg shadow-md animate-bounceInUp`} style={{ animationDelay: delay }}>
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 text-center z-10">
                <h4 className="text-white text-xl font-bold mb-2">{title}</h4>
                <p className="text-gray-200 text-sm">{description}</p>
            </div>
            <div className="relative h-48 md:h-56">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
        </div>
    );
};

const PortfolioSection: React.FC = () => {
    return (
        <section id="portfolio" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-bounceIn">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Instansi <em className="text-blue-600 not-italic">Terkait</em> dalam Sistem <span className="text-red-500">Geospasial</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <PortfolioItem
                        title="Komdigi"
                        description="Pengelolaan infrastruktur teknologi informasi dan digitalisasi sistem."
                        imageSrc="/assets/images/komdigi.png"
                        delay="0.3s"
                    />

                    <PortfolioItem
                        title="BPS Bondowoso"
                        description="Data statistik potensi sumber daya alam dan hasil pertanian daerah."
                        imageSrc="/assets/images/bps.jpg"
                        delay="0.4s"
                    />

                    <PortfolioItem
                        title="Dinas Pertanian"
                        description="Monitoring dan pemetaan hasil pertanian Kabupaten Bondowoso."
                        imageSrc="/assets/images/diperta.webp"
                        delay="0.5s"
                    />

                    <PortfolioItem
                        title="Bappeda"
                        description="Pemanfaatan data geospasial untuk perencanaan pembangunan daerah."
                        imageSrc="/assets/images/bappeda.jpg"
                        delay="0.6s"
                    />
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;