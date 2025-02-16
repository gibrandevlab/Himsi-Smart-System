const Navbar = () => {
    return (
        <header className="flex w-full bg-transparent text-white px-12 py-6 fixed top-0 left-0 z-50">
            <div className="w-full justify-between items-center border-b border-gray-300 flex pb-6">
                <h1 className="font-extrabold text-4xl">HIMSI</h1>
                <div className="flex gap-60 items-center">
                    <ul className="flex gap-8">
                        <li>division</li>
                        <li>about</li>
                        <li>information</li>
                    </ul>
                    <button className="bg-slate-900 text-white py-2 px-6 rounded-md">
                        News
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
