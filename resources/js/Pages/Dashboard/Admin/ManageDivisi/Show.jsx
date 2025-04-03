import Layout from "@/Layouts/Dashboard/Layout";

const ManageDivisiShow = ({data_divisi}) => {
    
    return <Layout>
  
            <div className="flex justify-between pt-16 pb-8 border-b border-gray-300 relative">
                <div className="flex flex-col">
                    <span className="font-inter-bold text-2xl opacity-90">
                        Show data divisi
                    </span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm ">
                    Nama Divisi
                </div>
                <div className="w-full md:w-[70%]">
                    <p className="font-semibold">{data_divisi.nama}</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-[30%] font-inter-medium opacity-90 text-sm">
                    Logo Divisi
                </div>
                <div className="col-span-full">
                    <div className="mt-2">
                        <div className="w-12 h-12 rounded-md">
                            <img
                                src={`/storage/DivisiAssets/Logo/${data_divisi.logo}`}
                                alt="Logo Divisi"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-[30%] font-inter-medium opacity-90 text-sm">
                    Banner Divisi
                </div>
                <div className="col-span-full">
                    <div className="mt-2">
                        <div className="w-full h-[200px] rounded-md overflow-hidden">
                            <img
                                src={`/storage/DivisiAssets/Banner/${data_divisi.banner}`}
                                alt="Banner Divisi"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm">
                    Jumlah Anggota Divisi
                </div>
                <div className="w-full md:w-[70%]">
                    <p className="font-semibold">{data_divisi.jumlah_anggota}</p>
                </div>
            </div>

            <div className="text-editor py-5 md:py-7">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm mb-5">
                    Deskripsi Divisi
                </div>
                <div className="w-full font-inter-medium opacity-90 text-sm mb-5">
                    <div
                        dangerouslySetInnerHTML={{ __html: data_divisi.deskripsi }}
                    />
                </div>
            </div>
    </Layout>;
};

export default ManageDivisiShow;
