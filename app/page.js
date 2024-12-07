"use client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Head from "next/head";
import { useEffect, useState } from "react";
import "./page.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after 3 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <main>
      {isLoading && (
        <div className="preloader" data-preloader>
          <div className="circle"></div>
        </div>
      )}

      <Head>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@latest"></script> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script src="/main.js" strategy="afterInteractive" />

      <header className="header" data-header>
        <div className="container">

        
          <Link href="#" className="logo">
            <Image src="/logo.png" width="30" height="40" alt="Pfolio home" />
          </Link>

          <button className="nav-toggle-btn" data-nav-toggler data-nav-toggle-btn aria-label="Toggle menu">
            <span className="line line-1"></span>
            <span className="line line-2"></span>
          </button>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">

              <li>
                <Link href="#" className="navbar-link">Home</Link>
              </li>
              <li>
                <Link href="#services" className="navbar-link">Services</Link>
              </li>

              <li>
                <Link href="#portfolio" className="navbar-link">Portfolio</Link>
              </li>

              <li>
                <Link href="#footer" className="navbar-link">Contact</Link>
              </li>

            </ul>
          </nav>

          <div className="overlay" data-nav-toggler data-overlay></div>

        </div>
      </header>

      <main>
      <div class="arrow-container" id="scroll-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24">
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </div>

        <article>
          <section>

            <section className="section hero" aria-label="home">
              <div className="container">

                <div className="hero-content">

                  <h1 className="h1 hero-title">Anshu Raj</h1>

                  <p className="hero-subtitle">
                    Web Developer & Desginer
                  </p>

                  <div className="hero-banner">
                    <Image src="/" width="800" height="800" alt="kane williams" className="w-100" />
                  </div>

                  <p className="section-text">
                    Hi , I am Anshu Raj, a passionate beginner web developer and landing page designer. I specialize in creating impactful online experiences for companies, brands, and individuals. With a focus on clean, modern, and functional designs, I aim to bring ideas to life and make a lasting impression.
                  </p>

                  <Link href="#footer" className="btn has-before">
                    <span className="span">Contact Me</span>

                  </Link>

                </div>

              </div>
            </section>

            <section className="service" aria-labelledby="service-label" id="services">
              <div className="container">

                <div className="title-wrapper">

                  <div>
                    <p className="section-subtitle">
                      Services That I Provide
                    </p>

                    <h2 className="h2 section-title" id="service-label">Services</h2>
                  </div>

                  <p className="section-text">
                    I specialize in crafting custom-designed, responsive landing pages tailored to your goals, creating visually stunning and user-friendly website designs that capture your brand's essence, and developing fully functional, responsive websites built with the latest technologies to ensure a seamless user experience.
                  </p>

                </div>

                <div className="slider" data-slider>

                  <ul className="slider-container service-list" data-slider-container>

                    <li className="slider-item" data-slider-item>
                      <div className="service-card">

                        <div className="card-icon">
                          <ion-icon name="desktop-outline"></ion-icon>
                        </div>

                        <h3 className="h3 card-title">Website Design</h3>

                        <p className="card-text">
                          Let your brand shine with creative, professional designs that resonate with your audience and leave a lasting impression.
                        </p>

                        <span className="text-lg card-number">01</span>

                        <Link href="#" className="layer-link" aria-label="More about my website design service"></Link>

                      </div>
                    </li>

                    <li className="slider-item" data-slider-item>
                      <div className="service-card">

                        <div className="card-icon">
                          <ion-icon name="podium-outline"></ion-icon>
                        </div>

                        <h3 className="h3 card-title">Landing Page</h3>

                        <p className="card-text">
                          Transform visitors into customers with engaging, conversion-focused landing pages designed to make your brand stand out.
                        </p>

                        <span className="text-lg card-number">02</span>

                        <Link href="#" className="layer-link" aria-label="More about my SEO Marketing service"></Link>

                      </div>
                    </li>

                    <li className="slider-item" data-slider-item>
                      <div className="service-card">

                        <div className="card-icon">
                          <ion-icon name="basket-outline"></ion-icon>
                        </div>

                        <h3 className="h3 card-title">Website Development</h3>

                        <p className="card-text">
                          From concept to code, I deliver websites that are both visually appealing and technically robust, ensuring a seamless user experience.
                        </p>

                        <span className="text-lg card-number">03</span>

                        <Link href="#" className="layer-link" aria-label="sndsan"></Link>

                      </div>
                    </li>

                    <li className="slider-item" data-slider-item>
                      <div className="service-card">

                        <div className="card-icon">
                          <ion-icon name="basket-outline"></ion-icon>
                        </div>

                        <h3 className="h3 card-title">Website Animation</h3>

                        <p className="card-text">
                          Add life to your website with smooth, engaging animations that captivate users and enhance their experience.
                        </p>

                        <span className="text-lg card-number">04</span>

                        <Link href="#" className="layer-link" aria-label="sndsan"></Link>

                      </div>
                    </li>
                  </ul>

                  <div className="slider-controls">
                    <button className="slider-control prev" data-slider-prev aria-label="Slide to previous item">
                      <div className="line"></div>
                      <div className="arrow"></div>
                    </button>

                    <button className="slider-control next" data-slider-next aria-label="Slide to next item">
                      <div className="line"></div>
                      <div className="arrow"></div>
                    </button>
                  </div>

                </div>

              </div>
            </section>

            <section className="section skills" aria-label="our skills">
              <div className="container">

                <p className="section-subtitle">I Make The Future</p>

                <h2 className="h2 section-title">I Develop & Create Digital Future.</h2>

                <div className="skills-wrapper">

                  <div>
                    <p className="section-text">
                      Together, we create more than websites — we build digital spaces that drive success. My work is not just about design or development; it’s about creating platforms that help brands, businesses, and individuals achieve their goals and stand out in the digital world.
                    </p>

                    <p className="section-text">
                      Every project I undertake is a step toward shaping the future of online experiences. With a focus on innovation, functionality, and aesthetics, I strive to craft solutions that are impactful and forward-thinking.
                    </p>

                    <Link href="#" className="btn has-before">anshu.raj1630@gmail.com</Link>
                  </div>

                  <div>

                    <ul className="skills-list">

                      <li>
                        <div className="progress-wrapper">
                          <p className="progress-label">Design</p>

                          <data className="progress-value" value="90">90%</data>
                        </div>

                        <div className="progress-bg">
                          <div className="progress" style={{ width: "90%" }}></div>
                        </div>
                      </li>

                      <li>
                        <div className="progress-wrapper">
                          <p className="progress-label">Animation</p>

                          <data className="progress-value" value="80">80%</data>
                        </div>

                        <div className="progress-bg">
                          <div className="progress" style={{ width: "80%" }}></div>
                        </div>
                      </li>

                      <li>
                        <div className="progress-wrapper">
                          <p className="progress-label">Development</p>

                          <data className="progress-value" value="95">95%</data>
                        </div>

                        <div className="progress-bg">
                          <div className="progress" style={{ width: "95%" }}></div>
                        </div>
                      </li>

                      <li>
                        <div className="progress-wrapper">
                          <p className="progress-label">Optimization</p>

                          <data className="progress-value" value="85">85%</data>
                        </div>

                        <div className="progress-bg">
                          <div className="progress" style={{ width: "85%" }}></div>
                        </div>
                      </li>

                    </ul>

                  </div>

                </div>

              </div>
            </section>

            <section className="portfolio" aria-labelledby="portfolio-label" id="portfolio">

              <div className="title-wrapper container">

                <div>
                  <p className="section-subtitle" id="portfolio-label">Our Works</p>

                  <h2 className="h2 section-title">Portfolio</h2>
                </div>

                <p className="section-text">
                  Discover my portfolio, showcasing landing pages and websites crafted with precision, creativity, and attention to detail. Each project reflects a commitment to excellence and innovation.
                </p>

              </div>

              <div className="slider" data-slider>

                <ul className="slider-container" data-slider-container>

                  <li className="slider-item">
                    <div className="portfolio-card img-holder" style={{ width: "100", height: "100" }}>

                      <Image src="/flight-page.png" width="600" height="600" loading="lazy" alt="portfolio"
                        className="img-cover" />

                      <div className="card-content">

                        <p className="card-text">Website Design</p>
                      </div>

                      <Link href="#" className="layer-link"></Link>

                    </div>
                  </li>

                  <li className="slider-item">
                    <div className="portfolio-card img-holder" style={{ width: "600", height: "600" }}>

                      <Image src="/yoga-page.png" width="600" height="600" loading="lazy" alt="portfolio"
                        className="img-cover" />

                      <div className="card-content">

                        <p className="card-text">UX Design / Web App</p>
                      </div>

                      <Link href="#" className="layer-link"></Link>

                    </div>
                  </li>

                  <li className="slider-item">
                    <div className="portfolio-card img-holder" style={{ width: "600", height: "600" }}>

                      <Image src="/apna-food-page.png" width="600" height="600" loading="lazy" alt="portfolio"
                        className="img-cover" />

                      <div className="card-content">
                        <p className="card-text">Website / Development</p>
                      </div>

                      <Link href="#" className="layer-link"></Link>

                    </div>
                  </li>

                  <li className="slider-item">
                    <div className="portfolio-card img-holder" style={{ width: "600", height: "600" }}>

                      <Image src="/blog-page.png" width="600" height="600" loading="lazy" alt="portfolio"
                        className="img-cover" />

                      <div className="card-content">

                        <p className="card-text">Website / UX Design</p>
                      </div>

                      <Link href="#" className="layer-link"></Link>

                    </div>
                  </li>

                  <li className="slider-item">
                    <div className="portfolio-card img-holder" style={{ width: "600", height: "600" }}>

                      <Image src="/travel-page.png" width="600" height="600" loading="lazy" alt="portfolio"
                        className="img-cover" />

                      <div className="card-content">

                        <p className="card-text">Branding / Design</p>
                      </div>

                      <Link href="#" className="layer-link"></Link>

                    </div>
                  </li>

                  <li className="slider-item">
                    <div className="portfolio-card img-holder" style={{ width: "600", height: "600" }}>

                      <Image src="/headphone-page.png" width="600" height="600" loading="lazy" alt="portfolio"
                        className="img-cover" />

                      <div className="card-content">
                        <h3 className="h3 card-title">Out Zone</h3>

                        <p className="card-text">UX Design / Web App</p>
                      </div>

                      <Link href="#" className="layer-link"></Link>

                    </div>
                  </li>

                </ul>

                <div className="slider-controls">
                  <button className="slider-control prev" data-slider-prev aria-label="Slide to previous item">
                    <div className="line"></div>
                    <div className="arrow"></div>
                  </button>

                  <button className="slider-control next" data-slider-next aria-label="Slide to next item">
                    <div className="line"></div>
                    <div className="arrow"></div>
                  </button>
                </div>

              </div>

            </section>
          </section>
        </article>
        <div className="end">
          <p>Let’s build something amazing together! Whether you’re a brand, a business, or an individual, I’m here to help you achieve your digital goals. Get in touch today and let’s start shaping your online presence.</p>
        </div>
      </main>


      <footer className="footer" id="footer">
        <div className="container">

          <ul className="footer-list">

            <li>
              <p className="h4 footer-list-title">Get in touch</p>
            </li>

            <li>
              <Link href="mailto:info@kwilliams.com" className="footer-link">anshu.raj1630@gmail.com</Link>
            </li>

          </ul>

          <ul className="footer-list">

            <li>
              <p className="h4 footer-list-title">Locations</p>
            </li>

            <li>
              <Link href="#" className="footer-link">Jharkhand - India</Link>
            </li>

          </ul>

          <ul className="social-list">

            <li>
              <a href="#" className="social-link">
                <img src="facebook.png" />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <img src="instagram.png" />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <img src="twitter.png" />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <img src="linkedin.png" />
              </a>
            </li>

          </ul>

        </div>
      </footer>

      {/* 
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}

    </main>
)}
