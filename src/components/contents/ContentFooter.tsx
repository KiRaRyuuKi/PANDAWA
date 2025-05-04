// components/Footer.tsx
import React from 'react';

const ContentFooter: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="text-center animate-fadeIn">
                    <p className="mb-2">
                        © 2025 Sistem Informasi Geospasial Bondowoso. All rights reserved.
                    </p>
                    <p>
                        Design by <a href="#" className="text-red-400 hover:text-red-300 transition-colors">PANDAWA</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default ContentFooter;