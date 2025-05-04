// components/AboutSection.tsx
import React from 'react';
import Image from 'next/image';

interface ServiceItemProps {
    iconSrc: string;
    title: string;
    description: string;
    delay: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ iconSrc, title, description, delay }) => {
    return (
        <div className={`flex p-4 rounded-lg transition-all hover:shadow-md animate-fadeIn`} style={{ animationDelay: delay }}>
            <div className="mr-4">
                <div className="bg-gray-100 rounded-full p-3">
                    <Image src={iconSrc} alt={title} width={40} height={40} />
                </div>
            </div>
            <div>
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-10 md:mb-0">
                        <div className="animate-fadeIn">
                            <Image
                                src="/assets/images/about-left-image.png"
                                alt="person graphic"
                                width={400}
                                height={500}
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="md:w-2/3 self-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ServiceItem
                                iconSrc="/assets/images/service-icon-01.png"
                                title="Pemetaan Digital"
                                description="Visualisasi data sumber daya alam Kabupaten Bondowoso"
                                delay="0.5s"
                            />

                            <ServiceItem
                                iconSrc="/assets/images/service-icon-02.png"
                                title="Integrasi Data Instansi"
                                description="Menghubungkan data dari berbagai sektor."
                                delay="0.7s"
                            />

                            <ServiceItem
                                iconSrc="/assets/images/service-icon-03.png"
                                title="Prediksi Panen"
                                description="Prediksi panen untuk perencanaan strategis."
                                delay="0.9s"
                            />

                            <ServiceItem
                                iconSrc="/assets/images/service-icon-04.png"
                                title="Real time Data"
                                description="Menggunakan data berdasarkan BPS terbaru"
                                delay="1.1s"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;