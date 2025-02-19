import { Head, Link } from '@inertiajs/react';
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Layouts/Footer";

export default function Home() { 
    return (
       <>
        <Head titleTemplate="%s">
            <title>Himsi Kaliabang</title>
            <link rel="icon" href={`storage/Favicon/himsikla.jpg`} type="image/x-icon" />
            <meta name="description" content="onprogress" />
            <meta name="keywords" content="onprogress" />
            <meta name="author" content="onprogress" />
        </Head> 

        {/* NAVBAR  */}
        <Navbar/>
        {/* END NAVBAR  */}

        {/* HERO SECTION */}
        <section id="hero" className="w-full min-h-screen">
            <div className="flex w-full h-screen relative">
            <div
                className="hero w-full h-full bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: "url('/storage/HeroImage/hero-img.jpg')"
                }}
                >                
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start lg:items-center px-4 sm:px-8 md:px-16 lg:px-24 z-1 w-full h-full">
                    <div className="himsi text-start md:text-center">
                        <h1 className="text-white font-bold text-4xl md:text-5xl font-handlee">Himsi <span className='font-bold px-3 italic bg-[#EDB848] p-1 text-primary'>Kaliabang</span></h1>
                        <p className="mt-4 text-white text-xl md:text-2xl animate-slideInLeft">
                            Membangun kreativitas, meretas batas inovasi.
                        </p>
                    </div>

                    <div className="btn-explore py-6 flex justify-center items-center w-full">
                        <button aria-label="btn-explore" className="rounded-md bg-white px-4 py-2">
                            SCROLL DOWN <i className="fa-solid fa-computer-mouse"></i>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </section>
        {/* END HERO SECTION */}

        {/* PENGENALAN HIMSI */}
        <section id="tentang-himsi" className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 px-5 lg:px-[100px] items-center justify-center h-screen">

            <div className="himsi-logo flex justify-center lg:items-center">
                <img className="w-32 w-40 md:w-60 lg:w-60 h-auto object-cover" src={`storage/HimsiLogo/himsi.jpg`} alt="HIMSI Image" />
            </div>

            <div className="title flex flex-col items-center text-center md:items-start md:text-left">
                <div className="section-title text-base sm:text-lg font-semibold mb-5 mt-3">
                    <span className="relative inline-block px-4">
                        <span className="absolute top-1/2 left-[-30px] right-[-30px] border-t-[3px] border-primary"></span>
                        <span className="relative bg-secondary px-2 text-primary font-inter-semibold">HIMSI KALIABANG</span>
                    </span>
                </div>
                <div className="about-himsi">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-handlee font-bold">Apa Itu HIMSI?</h1>
                    <p className="text-sm sm:text-base mt-3">
                        Himpunan Mahasiswa Sistem Informasi (HIMSI) adalah organisasi mahasiswa yang berdedikasi untuk mengembangkan potensi dan keilmuan mahasiswa dalam bidang Sistem Informasi. Sebagai wadah aspirasi dan kreativitas, HIMSI Cengkareng berkomitmen untuk menjembatani kebutuhan para anggotanya melalui berbagai program dan kegiatan yang bertujuan meningkatkan soft skills dan hard skills.
                    </p>
                </div>
                <div className="visi mt-2 text-start">
                    <h2 className="text-xl font-handlee font-bold">Visi</h2>
                    <p>Menjadikan HIMSI sebagai Himpunan yang kreatif, kompetitif, bertanggung jawab, dan berwawasan global pada tahun 2024.</p>
                </div>
                <div className="misi mt-2 text-start">
                    <h2 className="text-xl font-handlee font-bold">Misi</h2>
                    <p>Himpunan berupaya menciptakan prestasi, menanamkan disiplin, memperkuat solidaritas, serta menjalin kerjasama dengan organisasi lain sambil menjaga nama baik almamater.</p>
                </div>
            </div>
        </section>
        {/* END PENGENALAN HIMSI */}

        {/* SEJARAH HIMSI */}
        <section id="sejarah-himsi" className="w-full relative bg-primary px-4 md:px-20 lg:px-20 py-5  items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 text-secondary gap-5">
                <div className="content">
                    <h1 className="text-2xl sm:text-2xl md:text-3xl font-handlee font-bold py-2">Sejarah Singkat Himsi</h1>
                    <p>HIMSI (Himpunan Mahasiswa Sistem Informasi) merupakan organisasi mahasiswa sistem informasi yang berdiri sejak 2006 yang dulunya bernama HIMMI (Himpunan Mahasiswa Manajemen Informatika) dan sejak 2019 HIMMI resmi berubah nama menjadi HIMSI berdasarkan SK No.601/102/UBSI/II/2019.</p>
                </div>
                <div className="img-himsi-kaliabang flex justify-center md:justify-center lg:justify-end">
                    <img className="w-32 w-40 md:w-60 lg:w-60 h-auto object-cover" src={`storage/HimsiLogo/himsikla.jpeg`} alt="HIMSI Image" />
                </div>
            </div>
        </section>
        {/* END SEJARAH HIMSI */}

        {/* SAMBUTAN HIMSI */}
        <section className="welcome-section flex-col md:grid md:grid-cols-2 lg:grid-cols-2 px-5 lg:px-[100px] items-center justify-center h-screen">
            <div className="himsi-logo flex justify-center lg:items-center">
                <img className="w-32 w-40 md:w-60 lg:w-80 h-auto object-cover" src={`storage/BPHImage/isnan_3.jpg`} alt="BPH Image" />
            </div>
            <div className="title flex flex-col items-center text-center md:items-start md:text-left">
                <div className="section-title text-base sm:text-lg font-semibold mb-5 mt-3">
                    <span className="relative inline-block px-4">
                        <span className="absolute top-1/2 left-[-30px] right-[-30px] border-t-[3px] border-primary"></span>
                        <span className="relative bg-secondary px-2 text-primary font-inter-semibold">HIMSI KALIABANG</span>
                    </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-handlee font-bold">Sambutan</h1>
                <p className="text-sm sm:text-base mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, commodi a vitae quam itaque, quidem voluptate placeat quae, at odit consequuntur. Atque unde eveniet facere enim aut esse eos suscipit magnam non, dolorum iste, amet repudiandae voluptatum at neque ipsum. Consectetur molestiae ad voluptatem quaerat optio animi pariatur! Minus numquam quas inventore ab fugiat qui perferendis. Rerum quis assumenda at odio iste iure ut, neque ea magni, obcaecati porro suscipit dolor quas esse perferendis et vel illo eaque aliquam vitae aperiam dicta nulla sequi? Quis harum omnis quas dolorum, optio perspiciatis, voluptate nam sit accusamus rem asperiores laboriosam iure. Animi.
                </p>
            </div>
        </section>
        {/* END SAMBUTAN HIMSI */}

        {/* DIVISI */}
        <section className="division-section w-full min-h-screen px-4 md:px-12 lg:px-[100px] py-5">
                <div className="section-title text-base sm:text-lg font-semibold mb-5 mt-3 text-center">
                    <span className="relative inline-block px-4">
                        <span className="absolute top-1/2 left-[-30px] right-[-30px] border-t-[3px] border-primary"></span>
                        <span className="relative bg-secondary px-2 text-primary font-inter-semibold">HIMSI KALIABANG</span>
                    </span>
                </div>
                <div className="division-title text-center mb-5">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-handlee font-bold">Division</h1>
                </div>
                <div className="division-content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2 w-fit mx-auto place-items-center items-center py-5">
                    <div className="w-full mx-2">
                        <div className="cursor-pointer bg-primary border border-4 border-[#EDB848] text-white shadow-md rounded-md p-6 flex flex-col text-left hover:scale-105 transition w-full">
                            <img src="https://himsicengkareng.jasanya.tech/storage/himsi-images/01JBEPEF09VQSCANN0H0Q6MP22.png" alt="" className="w-24 h-24 mb-4 m-2 -mt-16"/>
                            <h3 className="text-xl font-bold mb-2">BPH</h3>
                            <p className="text-secondary text-sm">Bertugas dalam proses rekrutmen anggota baru serta pengembangan kemampuan dan potensi mereka di dala.....</p>
                        <div className="text-secondary font-bold mt-4">Baca Selengkapnya ...</div>
                        </div>
                    </div>  
                    <div className="w-full mx-2">
                        <div className="cursor-pointer bg-primary border border-4 border-[#EDB848] text-white shadow-md rounded-md p-6 flex flex-col text-left hover:scale-105 transition w-full">
                            <img src="https://himsicengkareng.jasanya.tech/storage/himsi-images/01JBEPDHMXMEBMY6VW515RPB6T.png" alt="" className="w-24 h-24 mb-4 m-2 -mt-16"/>
                            <h3 className="text-xl font-bold mb-2">RSDM</h3>
                            <p className="text-secondary text-sm">Bertugas dalam proses rekrutmen anggota baru serta pengembangan kemampuan dan potensi mereka di dala.....</p>
                        <div className="text-secondary font-bold mt-4">Baca Selengkapnya ...</div>
                        </div>
                    </div>  
                    <div className="w-full mx-2">
                        <div className="cursor-pointer bg-primary border border-4 border-[#EDB848] text-white shadow-md rounded-md p-6 flex flex-col text-left hover:scale-105 transition w-full">
                            <img src="https://himsicengkareng.jasanya.tech/storage/himsi-images/01JBEPC6D9GN5NSVEQPAWCJCM9.png" alt="" className="w-24 h-24 mb-4 m-2 -mt-16"/>
                            <h3 className="text-xl font-bold mb-2">KOMINFO</h3>
                            <p className="text-secondary text-sm">Bertugas dalam proses rekrutmen anggota baru serta pengembangan kemampuan dan potensi mereka di dala.....</p>
                        <div className="text-secondary font-bold mt-4">Baca Selengkapnya ...</div>
                        </div>
                    </div>  
                    <div className="w-full mx-2">
                        <div className="cursor-pointer bg-primary border border-4 border-[#EDB848] text-white shadow-md rounded-md p-6 flex flex-col text-left hover:scale-105 transition w-full">
                            <img src="https://himsicengkareng.jasanya.tech/storage/himsi-images/01JBEPCZ568DQ9917B8RXFNDSP.png" alt="" className="w-24 h-24 mb-4 m-2 -mt-16"/>
                            <h3 className="text-xl font-bold mb-2">LITBANG</h3>
                            <p className="text-secondary text-sm">Bertugas dalam proses rekrutmen anggota baru serta pengembangan kemampuan dan potensi mereka di dala.....</p>
                        <div className="text-secondary font-bold mt-4">Baca Selengkapnya ...</div>
                        </div>
                    </div>  
                    <div className="w-full mx-2">
                        <div className="cursor-pointer bg-primary border border-4 border-[#EDB848] text-white shadow-md rounded-md p-6 flex flex-col text-left hover:scale-105 transition w-full">
                            <img src="https://himsicengkareng.jasanya.tech/storage/himsi-images/01JBEPDRFDDNTM5G2KP91GX8NV.png" alt="" className="w-24 h-24 mb-4 m-2 -mt-16"/>
                            <h3 className="text-xl font-bold mb-2">PENDIDIKAN</h3>
                            <p className="text-secondary text-sm">Bertugas dalam proses rekrutmen anggota baru serta pengembangan kemampuan dan potensi mereka di dala.....</p>
                        <div className="text-secondary font-bold mt-4">Baca Selengkapnya ...</div>
                        </div>
                    </div>  
                </div>
        </section>
        {/* END DIVISI */}

        {/* SOSIAL MEDIA HIMSI */}
        <section id="hero" className="social-media-section w-full">
            <div className="flex w-full relative">
                <div
                    className="article-image-background hero w-full h-48 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: "url('/storage/HeroImage/hero-img.jpg')"
                    }}
                    >                
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start lg:items-center px-4 sm:px-8 md:px-16 lg:px-24 z-1 w-full h-full">
                        <div className="social-media grid grid-cols-3 gap-5 mx-auto">
                            <Link className="bg-secondary p-2 rounded-md w-[50px] h-[50px] flex items-center justify-center">
                                <i className="fa-brands fa-instagram text-primary text-xl"></i>
                            </Link>
                            <Link className="bg-secondary p-2 rounded-md w-[50px] h-[50px] flex items-center justify-center">
                                <i className="fa-brands fa-tiktok text-primary"></i>
                            </Link>
                            <Link className="bg-secondary p-2 rounded-md w-[50px] h-[50px] flex items-center justify-center">
                                <i className="fa-brands fa-youtube text-primary"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* END SOSIAL MEDIA HIMSI */}

        {/* ARTIKEL HIMSI */}
        <section id="artikel-himsi" className="article-section w-full px-4 md:px-12 lg:px-[100px] py-5">
            <div className="article-section-title text-base sm:text-lg font-semibold mb-5 mt-3 text-center">
                <span className="relative inline-block px-4">
                    <span className="absolute top-1/2 left-[-30px] right-[-30px] border-t-[3px] border-primary"></span>
                    <span className="relative bg-secondary px-2 text-primary font-inter-semibold">HIMSI KALIABANG</span>
                </span>
            </div>
            <div className="article-title text-center mb-5">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-handlee font-bold">Artikel Terbaru</h1>
            </div>
            <div className="article-content p-2 py-5 flex gap-3 mt-3 overflow-x-auto">
                <div className="card-article min-w-[20rem] lg:min-w-[25rem] w-full lg:w-[25rem] shadow-sm rounded-md">
                    <Link href="">
                        <div className="card-article bg-white transition-all duration-300 hover:shadow-xl hover:ring-primary/50">
                            <div className="banner-article">
                            <img
                                fetchpriority="high"
                                src="https://himsiubsitegal.my.id/images/artikel/1724761323.jpg"
                                alt="shaj"
                                className="rounded-md object-cover w-full h-full"
                                width="500"
                                height="281"
                                loading="lazy"
                            />
                            </div>
                            <div className="content p-3">
                            <div className="flex justify-between items-center">
                                <p className="article-date text-gray-400 text-start text-sm">
                                    01-06-2025
                                </p>
                                <p className="category bg-primary text-secondary p-1 px-2 rounded-md text-xs flex items-center">
                                    <i className="fa-brands fa-gg-circle mr-2"></i>Programming
                                </p>
                            </div>
                            <h1 className="article-title-apply mt-3 font-inter-semibold text-lg">Routing di Laravel: Panduan Dasar untuk Mengelola Rute Aplikasi..</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card-article min-w-[20rem] lg:min-w-[25rem] w-full lg:w-[25rem] shadow-sm rounded-md">
                    <Link href="">
                        <div className="card-article bg-white transition-all duration-300 hover:shadow-xl hover:ring-primary/50">
                            <div className="banner-article">
                            <img
                                fetchpriority="high"
                                src="https://himsiubsitegal.my.id/images/artikel/1724761323.jpg"
                                alt="shaj"
                                className="rounded-md object-cover w-full h-full"
                                width="500"
                                height="281"
                                loading="lazy"
                            />
                            </div>
                            <div className="content p-3">
                            <div className="flex justify-between items-center">
                                <p className="article-date text-gray-400 text-start text-sm">
                                    01-06-2025
                                </p>
                                <p className="category bg-primary text-secondary p-1 px-2 rounded-md text-xs flex items-center">
                                    <i className="fa-brands fa-gg-circle mr-2"></i>Programming
                                </p>
                            </div>
                            <h1 className="article-title-apply mt-3 font-inter-semibold text-lg">Routing di Laravel: Panduan Dasar untuk Mengelola Rute Aplikasi..</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card-article min-w-[20rem] lg:min-w-[25rem] w-full lg:w-[25rem] shadow-sm rounded-md">
                    <Link href="">
                        <div className="card-article bg-white transition-all duration-300 hover:shadow-xl hover:ring-primary/50">
                            <div className="banner-article">
                            <img
                                fetchpriority="high"
                                src="https://himsiubsitegal.my.id/images/artikel/1724761323.jpg"
                                alt="shaj"
                                className="rounded-md object-cover w-full h-full"
                                width="500"
                                height="281"
                                loading="lazy"
                            />
                            </div>
                            <div className="content p-3">
                            <div className="flex justify-between items-center">
                                <p className="article-date text-gray-400 text-start text-sm">
                                    01-06-2025
                                </p>
                                <p className="category bg-primary text-secondary p-1 px-2 rounded-md text-xs flex items-center">
                                    <i className="fa-brands fa-gg-circle mr-2"></i>Programming
                                </p>
                            </div>
                            <h1 className="article-title-apply mt-3 font-inter-semibold text-lg">Routing di Laravel: Panduan Dasar untuk Mengelola Rute Aplikasi..</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card-article min-w-[20rem] lg:min-w-[25rem] w-full lg:w-[25rem] shadow-sm rounded-md">
                    <Link href="">
                        <div className="card-article bg-white transition-all duration-300 hover:shadow-xl hover:ring-primary/50">
                            <div className="banner-article">
                            <img
                                fetchpriority="high"
                                src="https://himsiubsitegal.my.id/images/artikel/1724761323.jpg"
                                alt="shaj"
                                className="rounded-md object-cover w-full h-full"
                                width="500"
                                height="281"
                                loading="lazy"
                            />
                            </div>
                            <div className="content p-3">
                            <div className="flex justify-between items-center">
                                <p className="article-date text-gray-400 text-start text-sm">
                                    01-06-2025
                                </p>
                                <p className="category bg-primary text-secondary p-1 px-2 rounded-md text-xs flex items-center">
                                    <i className="fa-brands fa-gg-circle mr-2"></i>Programming
                                </p>
                            </div>
                            <h1 className="article-title-apply mt-3 font-inter-semibold text-lg">Routing di Laravel: Panduan Dasar untuk Mengelola Rute Aplikasi..</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
        {/* END ARTIKEL HIMSI */}

        {/* LAYANAN HIMSI */}
        <section className="service-section w-full md:px-12 lg:px-12 py-5">
            <div className="service-section-title text-base sm:text-lg font-semibold mb-5 mt-3 text-center">
                <span className="relative inline-block px-4">
                    <span className="absolute top-1/2 left-[-30px] right-[-30px] border-t-[3px] border-primary"></span>
                    <span className="relative bg-secondary px-2 text-primary font-inter-semibold">HIMSI KALIABANG</span>
                </span>
            </div>
            <div className="service-title text-center mb-5">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-handlee font-bold">Layanan HIMSI</h1>
            </div>
            <div className="service-content p-2 py-5 gap-4 mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-fit mx-auto place-items-center items-center">
            <div className="card-service min-w-[20rem] lg:min-w-[20rem] w-[10rem] lg:w-[20rem] shadow-lg rounded-md">
                <Link href="">
                    <div className="card-service bg-white transition-all duration-300 hover:shadow-xl hover:ring-primary/50">
                        <div className="banner-service text-center text-primary">
                            <i className="fa-solid fa-comment-dots text-5xl mt-5"></i>
                        </div>
                        <div className="content p-5">
                            <h1 className="service-title-apply font-inter-bold text-2xl text-primary">Kritik & Saran</h1>
                            <p className="text-sm">Menampung aspirasi dan masukan demi kemajuan HIMSI</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="card-service min-w-[20rem] lg:min-w-[20rem] w-[10rem] lg:w-[20rem] shadow-lg rounded-md">
                <Link href="">
                    <div className="card-service bg-white transition-all duration-300 hover:shadow-xl hover:ring-primary/50">
                        <div className="banner-service text-center text-primary">
                            <i className="fa-solid fa-check-to-slot text-5xl mt-5"></i>
                        </div>
                        <div className="content p-5">
                            <h1 className="service-title-apply font-inter-bold text-2xl text-primary">HIMSI SmartVote</h1>
                            <p className="text-sm">Pemilihan Ketua dan Wakil Ketua HIMSI Periode 2025</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="card-service min-w-[20rem] lg:min-w-[20rem] w-[10rem] lg:w-[20rem] shadow-lg rounded-md">
                <Link href="">
                    <div className="card-service bg-white transition-all duration-300 hover:shadow-xl hover:ring-primary/50">
                        <div className="banner-service text-center text-primary">
                            <i className="fa-solid fa-hand-holding-heart text-5xl mt-5"></i>
                        </div>
                        <div className="content p-5">
                            <h1 className="service-title-apply font-inter-semibold text-2xl text-primary">HIMSI Care</h1>
                            <p className="text-sm">Dukungan dan bantuan sosial bagi mahasiswa yang membutuhkan</p>
                        </div>
                    </div>
                </Link>
            </div>

            </div>
        </section>
        {/* END ARTIKEL HIMSI */}        

        {/* FOOTER */}
        <Footer/>
        {/* END FOOTER */}
       </>
    );
}