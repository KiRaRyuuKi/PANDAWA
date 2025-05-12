import React from 'react';

export default function ContentsPage() {
  return (
    <>
      {/* Header */}
      <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="/" className="logo">
                  <h4>PAN<span>DAWA</span></h4>
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Beranda</a></li>
                  <li className="scroll-to-section"><a href="#about">Tentang Kami</a></li>
                  <li className="scroll-to-section"><a href="#services">Layanan</a></li>
                  <li className="scroll-to-section"><a href="#portfolio">Instansi Terkait</a></li>
                  <li className="scroll-to-section"><a href="#contact">Kontak Kami</a></li>
                  <li>
                    <div className="main-red-button"><a href="/map">Sebaran SDA</a></div>
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

      {/* Main Banner */}
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
                    {/* <form id="search" action="#" method="GET">
                      <fieldset>
                        <input type="address" name="address" className="email" placeholder="Your website URL..." autocomplete="on" required />
                      </fieldset>
                      <fieldset>
                        <button type="submit" className="main-button">Analyze Site</button>
                      </fieldset>
                    </form> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                    <img src="images/contents/bwsmap.png" alt="team meeting" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <img src="images/contents/about-left-image.png" alt="person graphic" />
              </div>
            </div>
            <div className="col-lg-8 align-self-center">
              <div className="services">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                      <div className="icon">
                        <img src="images/contents/service-icon-01.png" alt="reporting" />
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
                        <img src="images/contents/service-icon-02.png" alt="" />
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
                        <img src="images/contents/service-icon-03.png" alt="" />
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
                        <img src="images/contents/service-icon-04.png" alt="" />
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

      {/* Services Section */}
      <div id="services" className="our-services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
              <div className="left-image">
                <img src="images/contents/services-left-image.png" alt="" />
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

      {/* Portfolio Section */}
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
                    <img src="images/logo/komdigi-logo.jpg" alt="" />
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
                    <img src="images/logo/bps-logo.jpg" alt="" />
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
                    <img src="images/logo/disper-logo.jpg" alt="" />
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
                    <img src="images/logo/bappeda-logo.jpg" alt="" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
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
                      <a href="tel:+6281234567890">+62 822-3323-6128</a></span>
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
                      <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Email" required />
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
                  <img src="images/contents/contact-decoration.png" alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
