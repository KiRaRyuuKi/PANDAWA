'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    // Efek untuk menginisialisasi script yang biasanya ada di template asli
    useEffect(() => {
        // Logika untuk preloader
        const preloader = document.getElementById('js-preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('loaded');
            }, 1000);
        }

        // Scroll actions untuk menu
        const handleScroll = () => {
            const header = document.querySelector('.header-area');
            if (header) {
                if (window.scrollY > 100) {
                    header.classList.add('header-sticky-active');
                } else {
                    header.classList.remove('header-sticky-active');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Menu toggle untuk mobile
        const menuTrigger = document.querySelector('.menu-trigger');
        if (menuTrigger) {
            menuTrigger.addEventListener('click', function () {
                const nav = document.querySelector('.main-nav');
                nav?.classList.toggle('active');
            });
        }

        // Cleanup event listeners
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* ***** Preloader Start ***** */}
            <div id="js-preloader" className="js-preloader">
                <div className="preloader-inner">
                    <span className="dot"></span>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            {/* ***** Preloader End ***** */}

            {/* ***** Header Area Start ***** */}
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <Link href="/" className="logo">
                                    <h4>PAN<span>DAWA</span></h4>
                                </Link>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li className="scroll-to-section"><a href="#top" className="active">Beranda</a></li>
                                    <li className="scroll-to-section"><a href="#about">Tentang Kami</a></li>
                                    <li className="scroll-to-section"><a href="#services">Layanan</a></li>
                                    <li className="scroll-to-section"><a href="#portfolio">Portofolio</a></li>
                                    <li className="scroll-to-section"><a href="#contact">Kontak Kami</a></li>
                                    <li className="scroll-to-section">
                                        <div className="main-red-button">
                                            <a href="#contact">Kontak Sekarang</a>
                                        </div>
                                    </li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* ***** Header Area End ***** */}

            {/* ***** Main Banner Area Start ***** */}
            <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                        <h6>Selamat Datang di PANDAWA</h6>
                                        <h2>Visualisasi<em> Interaktif untuk </em><span>Kebijakan di </span>Bondowoso</h2>
                                        <p>Menggunakan teknologi GIS untuk menyusun kebijakan berbasis data, mengintegrasikan informasi dari berbagai sektor, dan meningkatkan efisiensi pemantauan lingkungan di Kabupaten Bondowoso.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <Image
                                            src="/assets/images/banner-right-image.png"
                                            alt="team meeting"
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Main Banner Area End ***** */}

            {/* ***** About Us Area Start ***** */}
            <div id="about" className="about-us section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <Image
                                    src="/assets/images/about-left-image.png"
                                    alt="person graphic"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 align-self-center">
                            <div className="services">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                            <div className="icon">
                                                <Image
                                                    src="/assets/images/service-icon-01.png"
                                                    alt="reporting"
                                                    width={60}
                                                    height={60}
                                                />
                                            </div>
                                            <div className="right-text">
                                                <h4>Pemetaan Digital</h4>
                                                <p>Visualisasi data sumber daya alam Kabupaten Bondowoso</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                                            <div className="icon">
                                                <Image
                                                    src="/assets/images/service-icon-02.png"
                                                    alt=""
                                                    width={60}
                                                    height={60}
                                                />
                                            </div>
                                            <div className="right-text">
                                                <h4>Integrasi Data Instansi</h4>
                                                <p>Menghubungkan data dari berbagai sektor.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                                            <div className="icon">
                                                <Image
                                                    src="/assets/images/service-icon-03.png"
                                                    alt=""
                                                    width={60}
                                                    height={60}
                                                />
                                            </div>
                                            <div className="right-text">
                                                <h4>Prediksi Panen</h4>
                                                <p>Prediksi panen untuk perencanaan strategis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                                            <div className="icon">
                                                <Image
                                                    src="/assets/images/service-icon-04.png"
                                                    alt=""
                                                    width={60}
                                                    height={60}
                                                />
                                            </div>
                                            <div className="right-text">
                                                <h4>Real time Data</h4>
                                                <p>Menggunakan data berdasarkan BPS terbaru</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** About Us Area End ***** */}

            {/* ***** Services Area Start ***** */}
            <div id="services" className="our-services section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
                            <div className="left-image">
                                <Image
                                    src="/assets/images/services-left-image.png"
                                    alt=""
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                            <div className="section-heading">
                                <h2>Solusi <em>Geospasial</em> untuk Pemerintah Kabupaten <span>Bondowoso</span></h2>
                                <p>Platform ini dirancang untuk membantu instansi pemerintah Kabupaten Bondowoso dalam pemantauan dan pengelolaan sumber daya alam berbasis teknologi geospasial.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="first-bar progress-skill-bar">
                                        <h4>Pemetaan Sumber Daya Alam</h4>
                                        <span>84%</span>
                                        <div className="filled-bar"></div>
                                        <div className="full-bar"></div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="second-bar progress-skill-bar">
                                        <h4>Prediksi Total Hasil Panen</h4>
                                        <span>88%</span>
                                        <div className="filled-bar"></div>
                                        <div className="full-bar"></div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="third-bar progress-skill-bar">
                                        <h4>Visualisasi Data Geospasial</h4>
                                        <span>94%</span>
                                        <div className="filled-bar"></div>
                                        <div className="full-bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Services Area End ***** */}

            {/* ***** Portfolio Area Start ***** */}
            <div id="portfolio" className="our-portfolio section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <h2>Instansi <em>Terkait</em> dalam Sistem <span>Geospasial</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <a href="#">
                                <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <div className="hidden-content">
                                        <h4>Komdigi</h4>
                                        <p>Pengelolaan infrastruktur teknologi informasi dan digitalisasi sistem.</p>
                                    </div>
                                    <div className="showed-content">
                                        <Image
                                            src="/assets/images/komdigi.png"
                                            alt=""
                                            width={200}
                                            height={200}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <a href="#">
                                <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <div className="hidden-content">
                                        <h4>BPS Bondowoso</h4>
                                        <p>Data statistik potensi sumber daya alam dan hasil pertanian daerah.</p>
                                    </div>
                                    <div className="showed-content">
                                        <Image
                                            src="/assets/images/bps.jpg"
                                            alt=""
                                            width={200}
                                            height={200}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <a href="#">
                                <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <div className="hidden-content">
                                        <h4>Dinas Pertanian</h4>
                                        <p>Monitoring dan pemetaan hasil pertanian Kabupaten Bondowoso.</p>
                                    </div>
                                    <div className="showed-content">
                                        <Image
                                            src="/assets/images/diperta.webp"
                                            alt=""
                                            width={200}
                                            height={200}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <a href="#">
                                <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                                    <div className="hidden-content">
                                        <h4>Bappeda</h4>
                                        <p>Pemanfaatan data geospasial untuk perencanaan pembangunan daerah.</p>
                                    </div>
                                    <div className="showed-content">
                                        <Image
                                            src="/assets/images/bappeda.jpg"
                                            alt=""
                                            width={200}
                                            height={200}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Portfolio Area End ***** */}

            {/* ***** Contact Us Area Start ***** */}
            <div id="contact" className="contact-us section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
                            <div className="section-heading">
                                <h2>Hubungi Kami untuk Kolaborasi atau Informasi Lanjut</h2>
                                <p>Apabila Anda berasal dari instansi pemerintah atau lembaga yang tertarik menggunakan atau mendukung sistem pemetaan geospasial ini, silakan hubungi kami melalui formulir berikut.</p>
                                <div className="phone-info">
                                    <h4>Untuk pertanyaan lebih lanjut, hubungi:
                                        <span><br /><i className="fa fa-phone"></i>
                                            <a href="tel:+6282233236128">+62 822-3323-6128</a></span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
                            <form id="contact" action="" method="post">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <input type="text" name="name" id="name" placeholder="Nama" autoComplete="on" required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <input type="text" name="surname" id="surname" placeholder="Nama Belakang" autoComplete="on" required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Email" required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <textarea name="message" className="form-control" id="message" placeholder="Pesan" required></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="main-button">Kirim Pesan</button>
                                        </fieldset>
                                    </div>
                                </div>
                                <div className="contact-dec">
                                    <Image
                                        src="/assets/images/contact-decoration.png"
                                        alt=""
                                        width={200}
                                        height={100}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Contact Us Area End ***** */}

            {/* ***** Footer Start ***** */}
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.25s">
                            <p>© 2025 Sistem Informasi Geospasial Bondowoso. All rights reserved.
                                <br />Design by <a rel="nofollow" href="#">PANDAWA</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}