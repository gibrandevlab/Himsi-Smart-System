import { Link } from '@inertiajs/react';
import { useState, useEffect  } from 'react';

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isDivisionOpen, setIsDivisionOpen] = useState(false);

    const toggleBars = () => {
        setIsNavbarOpen(!isNavbarOpen);
        setIsDivisionOpen(false);
    };
    
    const toggleDivision = () => {
        setIsDivisionOpen(!isDivisionOpen);
    };

    const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
    const [isNavbarPastHero, setIsNavbarPastHero] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById('hero');
            const heroHeight = heroSection ? heroSection.offsetHeight : 0;

            // Menangani keadaan navbar berdasarkan scroll
            setIsNavbarScrolled(window.scrollY > 0); // Navbar blur ketika scroll
            setIsNavbarPastHero(window.scrollY > heroHeight); // Navbar menjadi biru setelah melewati hero
        };

        // Menambahkan event listener scroll
        window.addEventListener('scroll', handleScroll);

        // Membersihkan event listener ketika komponen dibuang
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className={`flex w-full px-4 md:px-12 lg:px-12 py-6 fixed top-0 left-0 z-50 transition-all duration-300 ${
                    isNavbarPastHero
                        ? 'bg-secondary shadow-lg' 
                        : isNavbarScrolled
                        ? 'bg-white bg-opacity-5 backdrop-blur-sm shadow-lg text-white'
                        : 'bg-transparent text-white' 
                }`}
            >
                <div className="w-full justify-between items-center border-b border-gray-300 flex pb-6">
                    <div className="himsi-logo flex justify-center lg:items-center">
                        <img className="w-32 w-20 h-auto object-cover" src={`storage/HimsiLogo/himcore.png`} alt="HIMSI Image" />
                    </div>
                    <div className="flex gap-6 items-center">
                        <ul className="hidden md:flex gap-8 nav-items">
                            <li>
                                <Link>Beranda</Link>
                            </li>
                            <li className="relative">
                                <button aria-label="btn-division" onClick={toggleDivision}>
                                    <span>Divisi HIMSI</span>
                                    <i className={`fa-solid ml-2 ${isDivisionOpen ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
                                </button>
                                {isDivisionOpen && (
                                    <ul className="division absolute left-0 top-full z-10 mt-1 shadow-lg rounded-md bg-secondary shadow px-2 py-2 text-black">
                                        <li className="px-4 py-2 hover:bg-primary hover:text-white hover:rounded-md cursor-pointer">BPH</li>
                                        <li className="px-4 py-2 hover:bg-primary hover:text-white hover:rounded-md cursor-pointer">RSDM</li>
                                        <li className="px-4 py-2 hover:bg-primary hover:text-white hover:rounded-md cursor-pointer">KOMINFO</li>
                                        <li className="px-4 py-2 hover:bg-primary hover:text-white hover:rounded-md cursor-pointer">LITBANG</li>
                                        <li className="px-4 py-2 hover:bg-primary hover:text-white hover:rounded-md cursor-pointer">PENDIDIKAN</li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link>Artikel HIMSI</Link>
                            </li>
                            <li>
                                <Link>Layanan HIMSI</Link>
                            </li>
                        </ul>
                        <button aria-label="btn-news" className="bg-primary hidden md:block bg-slate-900 text-white py-2 px-6 rounded-md">
                            Masuk
                        </button>

                        {/* BTN BARS */}
                        <button
                            aria-label="btn-bars"
                            className="md:hidden bg-primary text-white py-2 px-6 rounded-md"
                            onClick={toggleBars}
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        {/* END BTN BARS */}
                    </div>
                </div>
            </header>

            {/* NAVBAR MENU SMALL SCREENS */}
            {isNavbarOpen && (
                <div
                    className={`fixed inset-0 z-50 flex flex-col items-center justify-center w-full min-h-screen bg-primary transition-all duration-500 ${
                        isNavbarOpen ? "top-0 opacity-100" : "-top-full opacity-0"
                    }`}
                >
    
                {/* BTN CLOSE BARS */}
                <button
                    aria-label="btn-close-bars"
                    onClick={() => setIsNavbarOpen(false)}
                    className="absolute top-4 right-4 text-white text-xl"
                >
                    <i className="fa-solid fa-xmark text-2xl"></i>
                </button>
                {/* END BTN CLOSE BARS */}

                <ul className="text-white text-2xl space-y-4">
                    <li>
                        <Link>Beranda</Link>
                    </li>
                    <li>
                        <button aria-label="btn-division" onClick={toggleDivision}>
                            <span>Divisi HIMSI</span>
                            <i className={`fa-solid ml-2 ${isDivisionOpen === true ? 'fa-caret-up' : 'fa-caret-down'}`}></i>    
                        </button>
                        {isDivisionOpen && (
                            <ul className="division mt-1 shadow-lg rounded bg-secondary text-xl ml-8 p-2">
                                <li className="p-3 py-2 hover:bg-primary hover:text-secondary hover:rounded-md w-full text-black cursor-pointer">BPH</li>
                                <li className="p-3 py-2 hover:bg-primary hover:text-secondary hover:rounded-md w-full text-black cursor-pointer">RSDM</li>
                                <li className="p-3 py-2 hover:bg-primary hover:text-secondary hover:rounded-md w-full text-black cursor-pointer">KOMINFO</li>
                                <li className="p-3 py-2 hover:bg-primary hover:text-secondary hover:rounded-md w-full text-black cursor-pointer">LITBANG</li>
                                <li className="p-3 py-2 hover:bg-primary hover:text-secondary hover:rounded-md w-full text-black cursor-pointer">PENDIDIKAN</li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link>Artikel HIMSI</Link>
                    </li>
                    <li>
                        <Link>Layanan HIMSI</Link>
                    </li>
                    <li>
                        <Link>Masuk</Link>
                    </li>
                </ul>
                </div>
            )}
            {/* END NAVBAR MENU SMALL SCREENS */}   
        </>
    );
};

export default Navbar;
