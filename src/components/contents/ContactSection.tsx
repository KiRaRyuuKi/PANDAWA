// components/ContactSection.tsx
import React, { useState } from 'react';
import Image from 'next/image';

interface FormData {
    name: string;
    surname: string;
    email: string;
    message: string;
}

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        surname: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Replace with your actual form submission logic
            // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
            console.log('Form submitted:', formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitStatus({
                success: true,
                message: 'Pesan Anda berhasil dikirim! Kami akan menghubungi Anda segera.'
            });

            // Reset form after successful submission
            setFormData({ name: '', surname: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: 'Terjadi kesalahan. Silakan coba lagi nanti.'
            });
        } finally {
            setIsSubmitting(false);
            // Clear status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <section id="contact" className="py-16 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeInLeft">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Hubungi Kami untuk Kolaborasi atau Informasi Lanjut
                            </h2>
                            <p className="text-gray-700 mb-8">
                                Apabila Anda berasal dari instansi pemerintah atau lembaga yang tertarik
                                menggunakan atau mendukung sistem pemetaan geospasial ini, silakan hubungi
                                kami melalui formulir berikut.
                            </p>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="text-xl font-medium mb-4">
                                    Untuk pertanyaan lebih lanjut, hubungi:
                                </h4>
                                <p className="flex items-center text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <a href="tel:+6282233236128" className="hover:text-red-500 transition-colors">
                                        +62 822-3323-6128
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 animate-fadeInRight">
                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg relative">
                            {submitStatus && (
                                <div className={`mb-4 p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Nama"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="surname"
                                        value={formData.surname}
                                        onChange={handleChange}
                                        placeholder="Nama Belakang"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                />
                            </div>

                            <div className="mb-6">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Pesan"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-6 py-3 bg-red-500 text-white rounded font-medium hover:bg-red-600 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                            </button>

                            {/* Decoration */}
                            <div className="absolute -bottom-8 -right-8 opacity-30">
                                <Image
                                    src="/assets/images/contact-decoration.png"
                                    alt="decoration"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;