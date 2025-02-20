import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Layouts/Footer";
import Modal from "@/Components/Modal";

export default function Divisi() { 
    const [isOpen, setIsOpen] = useState(false);

    return (
       <>
            <Head titleTemplate="%s">
                <title>Divisi - Pendidikan / Himsi Kaliabang</title>
                <link rel="icon" href={`/storage/Favicon/himsikla.jpg`} type="image/x-icon" />
                <meta name="description" content="onprogress" />
                <meta name="keywords" content="onprogress" />
                <meta name="author" content="onprogress" />
            </Head> 

            <Navbar/>


            {/* HERO SECTION */}
            <div className="relative">
                <section className="w-full" id="hero">
                    <div className="relative w-full">
                        {/* Thumbnail Divisi */}
                        <div className="w-full h-80 md:h-[500px] overflow-hidden bg-cover bg-center bg-fixed relative">
                            <img 
                                src={`/storage/DivisiImage/Pendidikan/thumbnail.jpg`} 
                                alt="Pendidikan Thumbnail" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                        </div>
                    </div>
                </section>
                {/* END HERO SECTION */}

                <div className="content">
                    {/* Card Divisi */}
                    <div className="relative top-[100%] md:top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full md:w-[30rem] lg:w-[30rem] px-2">
                        <div className="card-division rounded-md p-4 flex flex-col items-center bg-primary border border-4 border-[#EDB848] border-rounded-md text-white shadow-md">
                            {/* Logo Divisi */}
                            <div className="logo-divisi">
                                <img 
                                    src="https://himsicengkareng.jasanya.tech/storage/himsi-images/01JBEPDRFDDNTM5G2KP91GX8NV.png" 
                                    alt="Logo Divisi" 
                                    className="w-24 h-auto -mt-14"
                                />
                            </div>

                            {/* Tentang Divisi Pendidikan */}
                            <h1 className="text-center text-2xl font-bold">Divisi Pendidikan</h1>
                            <p className="text-sm text-white text-center tracking-wide max-w-lg mt-2">
                                Fokus pada peningkatan kualitas akademis dan pengembangan intelektual anggota himpunan. 
                                Kegiatannya meliputi seminar, diskusi ilmiah, bimbingan belajar, dan program pengembangan keterampilan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* KETUA DAN WAKIL */}
            <section className="division-section w-full lg:px-20 flex flex-col items-center justify-center mb-3 px-2">
                <div className="text-center mb-6">
                    <div className="relative inline-block px-4 text-lg font-semibold">
                        <span className="absolute top-1/2 left-[-30px] right-[-30px] border-t-[3px] border-primary"></span>
                        <span className="relative bg-secondary px-2 text-primary font-inter-semibold">HIMSI KALIABANG</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mt-3 font-handlee">Ketua - Wakil Pendidikan</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-2 w-full md:w-fit lg:w-fit mx-auto place-items-center items-center py-5 text-center">
                    <div className="w-full">
                        <div className="card-user bg-secondary text-white shadow-md rounded-md w-full md:w-[23rem] flex flex-col">
                            <div className="img overflow-hidden rounded-t-md">
                            <img 
                                    src={`/storage/DivisiImage/Pendidikan/shahlan.JPG`}  
                                    alt="" className="w-full max-h-96 object-cover"
                                />
                            </div>
                            <div className="profile bg-secondary text-black px-4 rounded-b-md mt-3">
                                <h1 className="text-lg font-inter-bold">Muhammad Cahyo Shahlan</h1>
                                <p className="text-sm text-gray-400">KETUA</p>
                            </div>
                            <div className="mx-auto w-fit py-3 hover:scale-110 transition">
                                <Link className="bg-secondary text-center rounded-md flex items-center justify-center">
                                    <i className="fa-brands fa-instagram text-primary text-3xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full">
                        <div className="card-user bg-secondary text-white shadow-md rounded-md w-full md:w-[23rem] flex flex-col">
                            <div className="img overflow-hidden rounded-t-md">
                            <img 
                                    src={`/storage/DivisiImage/Pendidikan/madi.JPG`}  
                                    alt="" className="w-full max-h-96 object-cover"
                                />
                            </div>
                            <div className="profile bg-secondary text-black px-4 rounded-b-md mt-3">
                                <h1 className="text-lg font-inter-bold">Rahmadi Cahyo S.</h1>
                                <p className="text-sm text-gray-400">WAKIL KETUA</p>
                            </div>
                            <div className="mx-auto w-fit py-3 hover:scale-110 transition">
                                <Link className="bg-secondary text-center rounded-md flex items-center justify-center">
                                    <i className="fa-brands fa-instagram text-primary text-3xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            {/* END KETUA DAN WAKIL */}

            {/* ANGGOTA */}
            <section className="division-section w-full lg:px-20 flex flex-col items-center justify-center py-3 px-2 min-h-screen">
                <div className="text-center mb-6">
                    <div className="relative inline-block px-4 text-lg font-semibold">
                        <span className="absolute top-1/2 left-[-30px] right-[-30px] border-t-[3px] border-primary"></span>
                        <span className="relative bg-secondary px-2 text-primary font-inter-semibold">HIMSI KALIABANG</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mt-3 font-handlee">Anggota Pendiikan</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 w-full md:w-fit lg:w-fit mx-auto place-items-center items-center py-5 text-center">
                    <div className="w-full">
                        <div className="card-user bg-secondary text-white shadow-md rounded-md w-full md:w-[23rem] flex flex-col">
                            <div className="img overflow-hidden rounded-t-md">
                            <img 
                                    src={`/storage/DivisiImage/Pendidikan/user_kosong.jpg`}  
                                    alt="" className="w-full max-h-96 object-cover"
                                />
                            </div>
                            <div className="profile bg-secondary text-black px-4 rounded-b-md mt-3">
                                <h1 className="text-lg font-inter-bold">User Kosong</h1>
                                <p className="text-sm text-gray-400">ANGGOTA</p>
                            </div>
                            <div className="mx-auto w-fit py-3 hover:scale-110 transition">
                                <Link className="bg-secondary text-center rounded-md flex items-center justify-center">
                                    <i className="fa-brands fa-instagram text-primary text-3xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full">
                        <div className="card-user bg-secondary text-white shadow-md rounded-md w-full md:w-[23rem] flex flex-col">
                            <div className="img overflow-hidden rounded-t-md">
                            <img 
                                    src={`/storage/DivisiImage/Pendidikan/user_kosong.jpg`}  
                                    alt="" className="w-full max-h-96 object-cover"
                                />
                            </div>
                            <div className="profile bg-secondary text-black px-4 rounded-b-md mt-3">
                                <h1 className="text-lg font-inter-bold">User Kosong</h1>
                                <p className="text-sm text-gray-400">ANGGOTA</p>
                            </div>
                            <div className="mx-auto w-fit py-3 hover:scale-110 transition">
                                <Link className="bg-secondary text-center rounded-md flex items-center justify-center">
                                    <i className="fa-brands fa-instagram text-primary text-3xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="card-user bg-secondary text-white shadow-md rounded-md w-full md:w-[23rem] flex flex-col">
                            <div className="img overflow-hidden rounded-t-md">
                            <img 
                                    src={`/storage/DivisiImage/Pendidikan/user_kosong.jpg`}  
                                    alt="" className="w-full max-h-96 object-cover"
                                />
                            </div>
                            <div className="profile bg-secondary text-black px-4 rounded-b-md mt-3">
                                <h1 className="text-lg font-inter-bold">User Kosong</h1>
                                <p className="text-sm text-gray-400">ANGGOTA</p>
                            </div>
                            <div className="mx-auto w-fit py-3 hover:scale-110 transition">
                                <Link className="bg-secondary text-center rounded-md flex items-center justify-center">
                                    <i className="fa-brands fa-instagram text-primary text-3xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            {/* END ANGGOTA */}

            {/* RENCANA KEGIATAN (PROKER) */}
            <section className="proker-divisi py-3 px-4 md:px-12 lg:px-[100px] min-h-screen">
                <div className="text-center mb-6">
                    <div className="relative inline-block px-4 text-lg font-semibold">
                        <span className="absolute top-1/2 left-[-30px] right-[-30px] border-t-[3px] border-primary"></span>
                        <span className="relative bg-secondary px-2 text-primary font-inter-semibold">HIMSI KALIABANG</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mt-3 font-handlee">Program Kerja Pendidikan</h1>
                </div>
                <div className="overflow-x-auto shadow-lg rounded-md">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="py-3 px-6 text-left">Nama Proker</th>
                                <th className="py-3 px-6 text-left">Detail</th>
                                <th className="py-3 px-6 text-left">Waktu</th>
                                <th className="py-3 px-6 text-left">Sasaran</th>
                                <th className="py-3 px-6 text-left">Target</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="border-b">
                                <td className="py-4 px-6">Pelatihan Web Development</td>
                                <td className="py-4 px-6">
                                    <button
                                        onClick={() => setIsOpen(true)}
                                        className="p-2 px-3 bg-primary text-white rounded"
                                    >
                                        <i className="fa-solid fa-eye text-sm"></i>
                                    </button>
                                </td>
                                <td className="py-4 px-6">Februari - Juni 2025</td>
                                <td className="py-4 px-6">Mahasiswa Teknik Informatika</td>
                                <td className="py-4 px-6">Membuat portfolio website sederhana</td>
                            </tr>
                            <tr className="border-b bg-gray-100">
                                <td className="py-4 px-6">Lomba Esports</td>
                                <td className="py-4 px-6">
                                    <button
                                        onClick={() => setIsOpen(true)}
                                        className="p-2 px-3 bg-primary text-white rounded"
                                    >
                                        <i className="fa-solid fa-eye text-sm"></i>
                                    </button>
                                </td>
                                <td className="py-4 px-6">Juli 2025</td>
                                <td className="py-4 px-6">Seluruh Mahasiswa</td>
                                <td className="py-4 px-6">Meningkatkan kekompakan antar mahasiswa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <Modal show={isOpen} onClose={() => setIsOpen(false)} maxWidth="full_sm">
                <div className="relative content-modal-proker p-3">
                    {/* Tombol Close (X) */}
                    <button 
                        onClick={() => setIsOpen(false)} 
                        className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    <div className="label mb-1 mt-2">
                        <h3 className="text-base font-inter-semibold">Nama Proker :</h3>
                        <p className="text-sm">Pelatihan Web Development</p>
                    </div>
                    <div className="label mb-1 mt-2">
                        <h3 className="text-base font-inter-semibold">Deskripsi Proker :</h3>
                        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat veniam ut id facere, aspernatur illum culpa assumenda dolorum pariatur! Voluptatibus dolor aut sed vel cupiditate inventore magnam? Placeat, corrupti repudiandae?</p>
                    </div>
                    <div className="label mb-1 mt-2">
                        <h3 className="text-base font-inter-semibold">Waktu :</h3>
                        <p className="text-sm">Januari - Februari 2026</p>
                    </div>
                    <div className="label mb-1 mt-2">
                        <h3 className="text-base font-inter-semibold">Sasaran :</h3>
                        <p className="text-sm">Seluruh Anggota HIMSI KALIABANG</p>
                    </div>
                    <div className="label mb-1 mt-2">
                        <h3 className="text-base font-inter-semibold">Target :</h3>
                        <p className="text-sm">Membuat portfolio website sederhana</p>
                    </div>
                </div>
            </Modal>


            {/* FOOTER */}
            <Footer/>
            {/* END FOOTER */}
       </>
    );
}