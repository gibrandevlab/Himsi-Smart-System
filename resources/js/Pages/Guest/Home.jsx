import { Head, Link } from '@inertiajs/react';
import Navbar from "@/Layouts/Navbar";

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
        {/* <section id="hero" className="w-full min-h-screen">
            <div className="flex w-full h-screen relative">
                <img className="hero w-full h-full object-cover shadow" src={`storage/HeroImage/hero-img.jpg`} alt="Hero Image" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start lg:items-center px-4 sm:px-8 md:px-16 lg:px-24 z-1 w-full h-full">
                    <div className="himsi text-start md:text-center">
                        <h1 className="text-white font-bold text-4xl md:text-5xl font-handlee">Himsi <span className='font-bold px-3 italic bg-[#EDB848] p-1 text-primary'>Kaliabang</span></h1>
                        <p className="mt-4 text-white text-xl md:text-2xl animate-slideInLeft">
                            Membangun kreativitas, meretas batas inovasi.
                        </p>
                    </div>

                    <div className="btn-explore py-6 flex justify-center items-center w-full">
                        <button aria-label="btn-explore" className="rounded-md bg-white px-4 py-2">
                            EXPLORE KUY
                        </button>
                    </div>
                </div>
            </div>
        </section> */}
        {/* END HERO SECTION */}

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

        {/* INTRODUCTION HIMSI */}
        <section className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 px-5 lg:px-[100px] items-center justify-center h-screen">
            {/* Gambar - memastikan sejajar di lg */}
            <div className="himsi-logo flex justify-center lg:items-center">
                <img className="w-32 w-40 md:w-60 lg:w-60 h-auto object-cover" src={`storage/HimsiLogo/himsi.jpg`} alt="HIMSI Image" />
            </div>

            {/* Teks - memastikan sejajar di lg */}
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
        {/* END INTRODUCTION HIMSI */}

        {/* SEJARAH HIMSI */}
        <section className="w-full relative bg-primary px-4 md:px-12 lg:px-12 py-5  items-center justify-center">
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
        <section className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 px-5 lg:px-[100px] items-center justify-center h-screen">
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

        {/* DIVISION */}
        <section className="w-full min-h-screen px-4 md:px-12 lg:px-[100px] py-5">
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
        {/* END DIVISION */}

        {/* SOCIAL MEDIA HIMSI */}
        <section id="hero" className="w-full">
            <div className="flex w-full relative">
            <div
                className="hero w-full h-48 bg-cover bg-center bg-fixed"
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
                            <i className="fa-brands fa-tiktok"></i>
                        </Link>
                        <Link className="bg-secondary p-2 rounded-md w-[50px] h-[50px] flex items-center justify-center">
                            <i className="fa-brands fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </section>
        {/* END SOCIAL MEDIA HIMSI */}
        
       </>
    );
}