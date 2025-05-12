import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
    title: 'PANDAWA',
    description: 'Visualisasi Interaktif untuk Kebijakan di Bondowoso',
};

export default function ContentsLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="/assets/css/fontawesome.css" />
                <link rel="stylesheet" href="/assets/css/space-dynamic.css" />
                <link rel="stylesheet" href="/assets/css/animated.css" />
                <link rel="stylesheet" href="/assets/css/owl.css" />
            </head>
            <body className={outfit.className}>
                {children}
                <script src="/vendor/jquery/jquery.min.js"></script>
                <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="/assets/js/owl-carousel.js"></script>
                <script src="/assets/js/animation.js"></script>
                <script src="/assets/js/imagesloaded.js"></script>
                <script src="/assets/js/space-dynamic.js"></script>
            </body>
        </html>
    );
}