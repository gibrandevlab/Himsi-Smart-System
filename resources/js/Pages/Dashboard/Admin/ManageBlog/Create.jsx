import Layout from "@/Layouts/Dashboard/Layout";
import { FaUserCircle, FaRegImage } from "react-icons/fa";
import { useForm, router, usePage } from '@inertiajs/react'
import { useState, useRef, useEffect } from "react";
import TextEditorBlog from "@/Components/TextEditorBlog";

const ManageBlogCreate = ({data_blog_category}) => {
    const [imagePreviewBanner, setImagePreviewBanner] = useState(null);

    const fileInputBanner = useRef(null);
    
     // SETUP FORM
    const { data, setData } = useForm({
        judul: '',
        kategori_blog: data_blog_category[0].id,
        konten: '',
        banner: '',
        status: 'aktif',
        images: [],
    });

    console.log(data);

    const handleClickFileBanner = () => {
        fileInputBanner.current.click();
    };

    const handleFileBanner = (e) => {
        const file = e.target.files[0];
        setData("banner", file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewBanner(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleTextEditorChange = (konten) => {
        setData("konten", konten);
    };

    const handleImagesChange = (newImage) => {
        setData((prevData) => ({
          ...prevData,
          images: [...prevData.images, newImage]
        }));
      };

    const { errors } = usePage().props
    function submit(e) {
        e.preventDefault();
        router.post("/dashboard/manage-blog/", data);
    }

    return <Layout>
        <form
            onSubmit={submit}
            className="w-full rounded-3xl md:rounded-md bg-white shadow-md md:p-8 p-4 border-l-8 border-primary"
        >
            <div className="flex justify-between pt-16 pb-8 border-b border-gray-300 relative">
                <div className="flex flex-col">
                    <span className="font-inter-bold text-2xl opacity-90">
                        Tambah blog
                    </span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm ">
                    Judul
                </div>
                <div className="w-full md:w-[70%]">
                    <input
                        onChange={e => setData('judul', e.target.value)}
                        type="text"
                        className="rounded-md h-8 border-gray-200 w-full md:w-[55%] text-sm font-inter-regular text-slate-600 bg-gray-50 md:border-gray-400"
                    />
                </div>
                {errors.judul &&
                    <div className="alert text-red-500 text-xs">
                    {errors.judul}
                    </div>
                }
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm ">
                    Kategori Blog
                </div>
                <div className="w-[50%] md:w-[30%] bg-gray-50 border-b border-gray-400 rounded-md overflow-hidden px-2">
                    <select
                        value={data.kategori_blog}
                        onChange={(e) => setData("kategori_blog", e.target.value)}
                        id="kategori_blog"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer text-slate-700 font-inter-regular"
                    >
                    {data_blog_category.map((item, i) => (
                            <option value={item.id} key={i}>{item.nama}</option>
                    ))}
                    </select>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-[30%] font-inter-medium opacity-90 text-sm ">
                    Banner Blog
                </div>
                <div className="col-span-full">
                    <div className="mt-2 flex items-center gap-x-3">
                        {imagePreviewBanner ? (
                            <div className="w-full h-[200px] rounded-md overflow-hidden border-2 border-primary border-opacity-60">
                                <img
                                    src={imagePreviewBanner}
                                    alt="Banner Divisi"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        ) : (
                            <FaRegImage className="size-12 text-gray-300 rounded-md" />
                        )}
                        <button
                            onClick={(e) => handleClickFileBanner()}
                            type="button"
                            className="rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 ring-1 shadow-xs ring-gray-400 ring-inset hover:bg-gray-50 font-inter-medium text-opacity-80"
                        >
                            Upload
                        </button>
                        <input
                            ref={fileInputBanner}
                            onChange={(e) => handleFileBanner(e)}
                            type="file"
                            className="hidden"
                            capture="environment"
                            name="banner"
                        />
                        {errors.banner &&
                            <div className="alert text-red-500 text-xs">
                            {errors.banner}
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm ">
                    Status
                </div>
                <div className="w-[50%] md:w-[30%] bg-gray-50 border-b border-gray-400 rounded-md overflow-hidden px-2">
                    <select
                        value={data.status}
                        onChange={(e) => setData("status", e.target.value)}
                        id="status"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer text-slate-700 font-inter-regular"
                    >
                        <option disabled className="">
                            Choose a status
                        </option>
                        <option value="aktif">Aktif</option>
                        <option value="tidak_aktif">Tidak Aktif</option>
                    </select>
                </div>
            </div>
            <div className="text-editor py-5 md:py-7">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm mb-5">
                    Konten Blog
                </div>
                {errors.konten &&
                    <div className="alert text-red-500 text-xs">
                    {errors.konten}
                    </div>
                }
                <TextEditorBlog value={data.konten} onChange={handleTextEditorChange}  onImagesChange={handleImagesChange}
            />
            </div>

            <div className="flex justify-end pt-10 md:pt-20 pb-8 border-gray-300">
                <button className="font-inter-medium px-3 py-2 bg-primary text-sm rounded-md text-white">
                    Tambah
                </button>
            </div>
        </form>
    </Layout>;
};

export default ManageBlogCreate;
