import { Link } from '@inertiajs/react';

const Footer = () => {
    return (
        <>
            <section className="service-section w-full px-4 md:px-20 lg:px-20 py-5 bg-primary text-white">
                <div className="container md:flex lg:flex gap-12 items-start">
                    {/* Logo dan Alamat (Tetap di Kiri) */}
                    <div className="md:col-span-1 text-left">
                        <img src="" alt="" />
                        <h2 className="text-xl font-bold">Himpunan Mahasiswa Sistem Informasi Kaliabang</h2>
                        <p className="mt-2 text-sm">Jl. Kali Abang Tengah No.8, Perwira, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17122</p>
                        <div className="social-media flex gap-3 mx-auto mt-5">
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

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-12 mt-5 md:mt-0 lg:mt-0">
                        {/* Navigasi */}
                        <div>
                            <h2 className="text-lg font-bold">Peta Situs</h2>
                            <ul className="mt-2 space-y-2 text-sm">
                                <li className="ml-3 md:ml-3 lg:ml-0"><Link href="/" className="hover:underline">Beranda</Link></li>
                                <li className="ml-3 md:ml-3 lg:ml-0"><Link href="#tentang-himsi" className="hover:underline">Tentang HIMSI</Link></li>
                                <li className="ml-3 md:ml-3 lg:ml-0"><Link href="#sejarah-himsi" className="hover:underline">Sejarah HIMSI</Link></li>
                                <li className="ml-3 md:ml-3 lg:ml-0"><Link href="#artikel-himsi" className="hover:underline">Artikel HIMSI</Link></li>
                            </ul>
                        </div>

                        {/* Divisi */}
                        <div>
                            <h2 className="text-lg font-bold">Divisi</h2>
                            <ul className="mt-2 space-y-2 text-sm">
                                <li className="ml-3 md:ml-3 lg:ml-0"><Link href="#" className="hover:underline">RSDM</Link></li>
                                <li className="ml-3 md:ml-3 lg:ml-0"><Link href="#" className="hover:underline">KOMINFO</Link></li>
                                <li className="ml-3 md:ml-3 lg:ml-0"><Link href="#" className="hover:underline">LITBANG</Link></li>
                                <li className="ml-3 md:ml-3 lg:ml-0"><Link href="#" className="hover:underline">PENDIDIKAN</Link></li>
                                <li className="ml-3 md:ml-3 lg:ml-0"><Link href="#" className="hover:underline">BPH</Link></li>
                            </ul>
                        </div>

                        {/* Layanan */}
                        <div>
                            <h2 className="text-lg font-bold">Layanan</h2>
                            <ul className="mt-2 space-y-2 text-sm">
                                <li className="ml-3 md:ml-3 lg:ml-0"><Link href="#" className="hover:underline">Kritik & Saran</Link></li>
                                <li className="ml-3 md:ml-3 lg:ml-0"><Link href="#" className="hover:underline">HIMSI SmartVote</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright dan Developer */}
                <div className="mt-10 border-t border-gray-400 pt-4 text-center text-sm">
                    <p>Copyright © HIMSI KALIABANG 2025. All rights reserved.</p>
                </div>
            </section>
        </>
    );
};

export default Footer;
