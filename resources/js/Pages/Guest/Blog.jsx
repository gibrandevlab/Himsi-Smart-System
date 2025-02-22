import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Layouts/Footer";
import Modal from "@/Components/Modal";

export default function Blog() { 
    const [isToggleSearchBlog, setIsToggleSearchBlog] = useState(false);

    const [isCategoryBlog, setIsCategoryBlog] = useState(false);

    const toggleCategoryBlog = () => {
        setIsCategoryBlog(!isCategoryBlog);
    };
    const toggleSearchBlog = () => {
        setIsToggleSearchBlog(!isToggleSearchBlog);
    };

    return (
       <>
            <Head titleTemplate="%s">
                <title>Blog / Himsi Kaliabang</title>
                <link rel="icon" href={`/storage/Favicon/himsikla.jpg`} type="image/x-icon" />
                <meta name="description" content="onprogress" />
                <meta name="keywords" content="onprogress" />
                <meta name="author" content="onprogress" />
            </Head> 

            <Navbar/>

            {/* HERO SECTION */}
            <section id="hero" className="w-full">
                <div className="flex w-full h-96 md:h-[500px] relative">
                    <div
                        className="hero w-full h-full bg-cover bg-center bg-fixed"
                        style={{
                            backgroundImage: "url('/storage/HeroImage/hero-img.jpg')"
                        }}
                        >                
                        <div className="inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start lg:items-center px-4 sm:px-8 md:px-16 lg:px-24 z-1 w-full h-full">
                            <div className="himsi text-start md:text-center">
                                <h1 className="text-white font-bold text-4xl md:text-5xl font-handlee">Blog <span className='font-bold px-3 italic bg-[#EDB848] p-1 text-primary'>HIMSI</span></h1>
                                <p className="mt-4 text-white text-xl md:text-2xl animate-slideInLeft">
                                    Selamat datang di BLOG HIMSI kaliabang.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* HERO SECTION */}

            {/* SEARCH BLOG */}
            <section className="bg-primary p-5 border-t-2 border-b-2 border-[#EDB848] border-x-0">
                <div className="search-blog grid grid-cols-2 w-fit gap-6 text-secondary mx-auto place-items-center items-center text-center">
                    <div className="btn-search w-full">
                        <button className="bg-[#EDB848] text-primary p-2 rounded-md px-3" onClick={toggleSearchBlog}>Cari</button>
                    </div>
                    <div className="blog-category w-full relative">
                        <button aria-label="btn-blog-category" className="bg-[#EDB848] text-primary p-2 rounded-md" onClick={toggleCategoryBlog}>
                                    <span>Kategori</span>
                                    <i className={`fa-solid ml-2 ${isCategoryBlog ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
                                </button>
                        {isCategoryBlog && (
                            <ul className="blog-category absolute left-0 top-full z-10 mt-1 shadow-lg rounded-md bg-secondary shadow px-2 py-2 text-black">
                                <li className="px-4 py-2 hover:bg-primary hover:text-white hover:rounded-md cursor-pointer">Programing</li>
                                <li className="px-4 py-2 hover:bg-primary hover:text-white hover:rounded-md cursor-pointer">Technologi</li>
                            </ul>
                        )}
                    </div>
                </div>
            </section>
            {/* END SEARCH BLOG */}

            {/* CARD BLOG */}
            <section className="blog-section w-full lg:px-20 flex flex-col items-center justify-center py-3 px-3 mt-5">
                <div className="text-center mb-6">
                    <div className="relative inline-block px-4 text-lg font-semibold">
                        <span className="absolute top-1/2 left-[-30px] right-[-30px] border-t-[3px] border-primary"></span>
                        <span className="relative bg-secondary px-2 text-primary font-inter-semibold">HIMSI KALIABANG</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mt-3 font-handlee">Blog</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 w-full md:w-fit lg:w-fit mx-auto place-items-center items-center py-5 text-center">
                    <div className="card-blog min-w-[20rem] lg:min-w-[25rem] w-full lg:w-[25rem] shadow-sm rounded-md">
                        <Link href="">
                            <div className="card-blog bg-white transition-all duration-300 hover:shadow-xl hover:ring-primary/50 rounded-b-md">
                                <div className="banner-blog">
                                <img
                                    fetchpriority="high"
                                    src="https://himsiubsitegal.my.id/images/artikel/1724761323.jpg"
                                    alt="shaj"
                                    className="rounded-t-md object-cover w-full h-full"
                                    width="500"
                                    height="281"
                                    loading="lazy"
                                />
                                </div>
                                <div className="content p-3">
                                <div className="flex justify-between items-center">
                                    <p className="blog-date text-gray-400 text-start text-sm">
                                        01-06-2025
                                    </p>
                                    <p className="category bg-primary text-secondary p-1 px-2 rounded-md text-xs flex items-center">
                                        <i className="fa-brands fa-gg-circle mr-2"></i>Programming
                                    </p>
                                </div>
                                <h1 className="blog-title-apply mt-3 font-inter-semibold text-lg">Routing di Laravel: Panduan Dasar untuk Mengelola Rute Aplikasi..</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="card-blog min-w-[20rem] lg:min-w-[25rem] w-full lg:w-[25rem] shadow-sm rounded-md">
                        <Link href="">
                            <div className="card-blog bg-white transition-all duration-300 hover:shadow-xl hover:ring-primary/50 rounded-b-md">
                                <div className="banner-blog">
                                <img
                                    fetchpriority="high"
                                    src="https://himsiubsitegal.my.id/images/artikel/1724761323.jpg"
                                    alt="shaj"
                                    className="rounded-t-md object-cover w-full h-full"
                                    width="500"
                                    height="281"
                                    loading="lazy"
                                />
                                </div>
                                <div className="content p-3">
                                <div className="flex justify-between items-center">
                                    <p className="blog-date text-gray-400 text-start text-sm">
                                        01-06-2025
                                    </p>
                                    <p className="category bg-primary text-secondary p-1 px-2 rounded-md text-xs flex items-center">
                                        <i className="fa-brands fa-gg-circle mr-2"></i>Programming
                                    </p>
                                </div>
                                <h1 className="blog-title-apply mt-3 font-inter-semibold text-lg">Routing di Laravel: Panduan Dasar untuk Mengelola Rute Aplikasi..</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="card-blog min-w-[20rem] lg:min-w-[25rem] w-full lg:w-[25rem] shadow-sm rounded-md">
                        <Link href="">
                            <div className="card-blog bg-white transition-all duration-300 hover:shadow-xl hover:ring-primary/50 rounded-b-md">
                                <div className="banner-blog">
                                <img
                                    fetchpriority="high"
                                    src="https://himsiubsitegal.my.id/images/artikel/1724761323.jpg"
                                    alt="shaj"
                                    className="rounded-t-md object-cover w-full h-full"
                                    width="500"
                                    height="281"
                                    loading="lazy"
                                />
                                </div>
                                <div className="content p-3">
                                <div className="flex justify-between items-center">
                                    <p className="blog-date text-gray-400 text-start text-sm">
                                        01-06-2025
                                    </p>
                                    <p className="category bg-primary text-secondary p-1 px-2 rounded-md text-xs flex items-center">
                                        <i className="fa-brands fa-gg-circle mr-2"></i>Programming
                                    </p>
                                </div>
                                <h1 className="blog-title-apply mt-3 font-inter-semibold text-lg">Routing di Laravel: Panduan Dasar untuk Mengelola Rute Aplikasi..</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="card-blog min-w-[20rem] lg:min-w-[25rem] w-full lg:w-[25rem] shadow-sm rounded-md">
                        <Link href="">
                            <div className="card-blog bg-white transition-all duration-300 hover:shadow-xl hover:ring-primary/50 rounded-b-md">
                                <div className="banner-blog">
                                <img
                                    fetchpriority="high"
                                    src="https://himsiubsitegal.my.id/images/artikel/1724761323.jpg"
                                    alt="shaj"
                                    className="rounded-t-md object-cover w-full h-full"
                                    width="500"
                                    height="281"
                                    loading="lazy"
                                />
                                </div>
                                <div className="content p-3">
                                <div className="flex justify-between items-center">
                                    <p className="blog-date text-gray-400 text-start text-sm">
                                        01-06-2025
                                    </p>
                                    <p className="category bg-primary text-secondary p-1 px-2 rounded-md text-xs flex items-center">
                                        <i className="fa-brands fa-gg-circle mr-2"></i>Programming
                                    </p>
                                </div>
                                <h1 className="blog-title-apply mt-3 font-inter-semibold text-lg">Routing di Laravel: Panduan Dasar untuk Mengelola Rute Aplikasi..</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="card-blog min-w-[20rem] lg:min-w-[25rem] w-full lg:w-[25rem] shadow-sm rounded-md">
                        <Link href="">
                            <div className="card-blog bg-white transition-all duration-300 hover:shadow-xl hover:ring-primary/50 rounded-b-md">
                                <div className="banner-blog">
                                <img
                                    fetchpriority="high"
                                    src="https://himsiubsitegal.my.id/images/artikel/1724761323.jpg"
                                    alt="shaj"
                                    className="rounded-t-md object-cover w-full h-full"
                                    width="500"
                                    height="281"
                                    loading="lazy"
                                />
                                </div>
                                <div className="content p-3">
                                <div className="flex justify-between items-center">
                                    <p className="blog-date text-gray-400 text-start text-sm">
                                        01-06-2025
                                    </p>
                                    <p className="category bg-primary text-secondary p-1 px-2 rounded-md text-xs flex items-center">
                                        <i className="fa-brands fa-gg-circle mr-2"></i>Programming
                                    </p>
                                </div>
                                <h1 className="blog-title-apply mt-3 font-inter-semibold text-lg">Routing di Laravel: Panduan Dasar untuk Mengelola Rute Aplikasi..</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            </section>
            {/* END CARD BLOG */}

            <Modal show={isToggleSearchBlog} onClose={() => setIsToggleSearchBlog(false)} maxWidth="full_sm">
                <div className="relative content-modal-proker p-3 overflow-y-auto h-96">
                    <button 
                        onClick={() => setIsToggleSearchBlog(false)} 
                        className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 mb-3"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    <div className="search-input mb-1 mt-8 w-full">
                        <input type="text" className="bg-secondary rounded-md text-black w-full" placeholder="Cari blog kamu..."/>
                    </div>
                    <div className="card-blog mb-1 mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                        <div className="card-article w-full shadow-sm rounded-md">
                            <Link href="">
                                <div className="card-article bg-secondary shadow-md transition-all duration-300 hover:shadow-xl hover:ring-primary/50">
                                    <div className="banner-article">
                                    <img
                                        fetchpriority="high"
                                        src="https://himsiubsitegal.my.id/images/artikel/1724761323.jpg"
                                        alt="shaj"
                                        className="rounded-t-md object-cover w-full h-full"
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
                        <div className="card-article w-full shadow-sm rounded-md">
                            <Link href="">
                                <div className="card-article bg-secondary shadow-md transition-all duration-300 hover:shadow-xl hover:ring-primary/50">
                                    <div className="banner-article">
                                    <img
                                        fetchpriority="high"
                                        src="https://himsiubsitegal.my.id/images/artikel/1724761323.jpg"
                                        alt="shaj"
                                        className="rounded-t-md object-cover w-full h-full"
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
                        <div className="card-article w-full shadow-sm rounded-md">
                            <Link href="">
                                <div className="card-article bg-secondary shadow-md transition-all duration-300 hover:shadow-xl hover:ring-primary/50">
                                    <div className="banner-article">
                                    <img
                                        fetchpriority="high"
                                        src="https://himsiubsitegal.my.id/images/artikel/1724761323.jpg"
                                        alt="shaj"
                                        className="rounded-t-md object-cover w-full h-full"
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
                </div>
            </Modal>


            {/* FOOTER */}
            <Footer/>
            {/* END FOOTER */}
       </>
    );
}