import { Head, Link } from '@inertiajs/react';
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Layouts/Footer";

export default function DetailBlog() { 

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
                            backgroundImage: "url('https://himsiubsitegal.my.id/images/artikel/1724761323.jpg')"
                        }}
                        >                
                        <div className="inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start lg:items-center px-4 sm:px-8 md:px-16 lg:px-24 z-1 w-full h-full">
                            <div className="himsi text-start md:text-center">
                                <h1 className="text-white font-bold text-4xl md:text-5xl font-handlee">Blog <span className='font-bold px-3 italic bg-[#EDB848] p-1 text-primary'>HIMSI</span></h1>
                                <p className="mt-4 text-white text-xl md:text-2xl animate-slideInLeft font-inter-bold">
                                    Apa Itu Laravel? Pengantar Framework PHP yang Populer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* HERO SECTION */}

            {/* BLOG */}
            <section className="blog-section w-full lg:px-20 flex flex-col items-center justify-center py-5 px-3 mt-5 mb-5 grid grid-cols-1 lg:grid-cols-3 gap-5">

                <div className="content-blog lg:col-span-2 self-start">
                    <h1>Apa Itu Laravel: Pengantar Framework PHP yang Populer</h1>
                    <p>Dalam era digital saat ini, pengembangan sistem informasi merupakan aspek penting bagi bisnis dan organisasi...</p>
                    <p>Dalam era digital saat ini, pengembangan sistem informasi merupakan aspek penting bagi bisnis dan organisasi...</p>
                    <p>Dalam era digital saat ini, pengembangan sistem informasi merupakan aspek penting bagi bisnis dan organisasi...</p>
                    <p>Dalam era digital saat ini, pengembangan sistem informasi merupakan aspek penting bagi bisnis dan organisasi...</p>
                    <p>Dalam era digital saat ini, pengembangan sistem informasi merupakan aspek penting bagi bisnis dan organisasi...</p>
                </div>

                {/* Other Blogs */}
                <div className="other-blogs flex justify-end">
                    <div className="content-other-blog">
                        <h1 className="text-3xl md:text-4xl font-bold mt-3 font-handlee text-center mb-2">Blog Lainya</h1>
                        <div className="card-blog min-w-[20rem] lg:min-w-[25rem] w-full lg:w-[25rem] shadow-sm rounded-md py-2">
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
                        <div className="card-blog min-w-[20rem] lg:min-w-[25rem] w-full lg:w-[25rem] shadow-sm rounded-md py-2">
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
                </div>
            </section>
            {/* END BLOG */}

            {/* FOOTER */}
            <Footer/>
            {/* END FOOTER */}
       </>
    );
}