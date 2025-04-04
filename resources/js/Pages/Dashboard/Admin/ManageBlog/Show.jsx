import Layout from "@/Layouts/Dashboard/Layout";

const ManageBlogShow = ({data_blog}) => {
    
    return <Layout>
  
            <div className="flex justify-between pt-16 pb-8 border-b border-gray-300 relative">
                <div className="flex flex-col">
                    <span className="font-inter-bold text-2xl opacity-90">
                        Show data blog
                    </span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm ">
                    Judul
                </div>
                <div className="w-full md:w-[70%]">
                    <p className="font-semibold">{data_blog.judul}</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm ">
                    Kategori
                </div>
                <div className="w-full md:w-[70%]">
                    <p className="font-semibold">{data_blog.nama_kategori_blog}</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-[30%] font-inter-medium opacity-90 text-sm">
                    Banner Blog
                </div>
                <div className="col-span-full">
                    <div className="mt-2">
                        <div className="w-full h-[200px] rounded-md overflow-hidden">
                            <img
                                src={`/storage/BlogAssets/Banner/${data_blog.banner}`}
                                alt="Banner Blog"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm">
                    Status
                </div>
                <div className="w-full md:w-[70%]">
                    <p className="font-semibold">{data_blog.status}</p>
                </div>
            </div>

            <div className="text-editor py-5 md:py-7">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm mb-5">
                    Konten Blog
                </div>
                <div className="w-full font-inter-medium opacity-90 text-sm mb-5">
                    <div
                        dangerouslySetInnerHTML={{ __html: data_blog.konten }}
                    />
                </div>
            </div>
    </Layout>;
};

export default ManageBlogShow;
