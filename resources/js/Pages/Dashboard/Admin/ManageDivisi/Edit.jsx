import Layout from "@/Layouts/Dashboard/Layout";
import { FaUserCircle, FaRegImage } from "react-icons/fa";
import { useForm, router, usePage } from '@inertiajs/react'
import { useState, useRef } from "react";
import TextEditorDivisi from "@/Components/TextEditorDivisi";

const ManageDivisiEdit = ({ data_divisi, data_divisi_images }) => {
    const [imagePreviewLogo, setImagePreviewLogo] = useState(data_divisi.logo);
    const [imagePreviewBanner, setImagePreviewBanner] = useState(data_divisi.banner);

    const fileInputLogo = useRef(null);
    const fileInputBanner = useRef(null);
    
    const { data, setData } = useForm({
        nama: data_divisi.nama,
        deskripsi: data_divisi.deskripsi,
        logo: data_divisi.logo,
        banner: data_divisi.banner,
        jumlah_anggota: data_divisi.jumlah_anggota,
        images: data_divisi_images ? data_divisi_images.map((img) => img.filename) : []
    });
    
    const handleImagesChange = (newImage) => {
        setData((prevData) => ({
            ...prevData,
            images: [...prevData.images, newImage],
        }));
    };

    const handleClickFileLogo = () => {
        fileInputLogo.current.click();
    };

    const handleFileLogo = (e) => {
        const file = e.target.files[0];

        if (file) {
            setData("logo", file); // Simpan file baru di form

            // Preview gambar baru
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewLogo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleClickFileBanner = () => {
        fileInputBanner.current.click();
    };

    const handleFileBanner = (e) => {
        const file = e.target.files[0];

        if (file) {
            setData("banner", file); // Simpan file baru di form

            // Preview gambar baru
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewBanner(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleTextEditorChange = (content) => {
        setData("deskripsi", content); // Simpan hasil editor ke state
    };

    const { errors } = usePage().props;

    function submit(e) {
        e.preventDefault();
        router.post(`/dashboard/manage-divisi/${data_divisi.slug}`, {
            _method: 'put',
            data_form: data,
        });
    }
    
    return (
        <Layout>
            <form
                onSubmit={submit}
                className="w-full rounded-3xl md:rounded-md bg-white shadow-md md:p-8 p-4 border-l-8 border-primary"
            >
                <div className="flex justify-between pt-16 pb-8 border-b border-gray-300 relative">
                    <div className="flex flex-col">
                        <span className="font-inter-bold text-2xl opacity-90">
                            Edit data divisi
                        </span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                    <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm ">
                        Nama Divisi
                    </div>
                    <div className="w-full md:w-[70%]">
                        <input 
                            onChange={e => setData('nama', e.target.value)}
                            type="text"
                            value={data.nama}
                            className="rounded-md h-8 border-gray-200 w-full md:w-[55%] text-sm font-inter-regular text-slate-600 bg-gray-50 md:border-gray-400"
                        />
                    </div>
                    {errors['data_form.nama'] && (
                        <div className="alert text-red-500 text-xs">
                            {errors['data_form.nama']}
                        </div>
                    )}
                </div>
                <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                    <div className="w-[30%] font-inter-medium opacity-90 text-sm">
                        Logo Divisi
                    </div>
                    <div className="col-span-full">
                        <div className="mt-2 flex items-center gap-x-3">
                            {imagePreviewLogo ? (
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary border-opacity-60">
                                    <img
                                        src={imagePreviewLogo.startsWith("data:") ? imagePreviewLogo : `/storage/DivisiAssets/Logo/${imagePreviewLogo}`}
                                        alt="Logo Divisi"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            ) : (
                                <FaUserCircle
                                    aria-hidden="true"
                                    className="size-12 text-gray-300 border-2 border-primary rounded-full border-opacity-60"
                                />
                            )}

                            <button
                                onClick={handleClickFileLogo}
                                type="button"
                                className="rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 ring-1 shadow-xs ring-gray-400 ring-inset hover:bg-gray-50 font-inter-medium text-opacity-80"
                            >
                                Upload
                            </button>

                            <input
                                ref={fileInputLogo}
                                onChange={handleFileLogo}
                                type="file"
                                className="hidden"
                                name="logo"
                            />

                            {errors["data_form.logo"] && (
                                <div className="alert text-red-500 text-xs">
                                    {errors["data_form.logo"]}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                    <div className="w-[30%] font-inter-medium opacity-90 text-sm ">
                        Banner Divisi
                    </div>
                    <div className="col-span-full">
                        <div className="mt-2 flex items-center gap-x-3">
                            {imagePreviewBanner ? (
                                <div className="w-full h-[200px] rounded-md overflow-hidden border-2 border-primary border-opacity-60">
                                    <img
                                        src={imagePreviewBanner.startsWith("data:") ? imagePreviewBanner : `/storage/DivisiAssets/Banner/${imagePreviewBanner}`}
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
                    <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm">
                        Jumlah Anggota Divisi
                    </div>
                    <div className="w-full md:w-[70%]">
                        <input 
                            onChange={e => setData('jumlah_anggota', e.target.value)}
                            value={data.jumlah_anggota}
                            type="text"
                            className="rounded-md h-8 border-gray-200 w-full md:w-[55%] text-sm font-inter-regular text-slate-600 bg-gray-50 md:border-gray-400"
                        />
                        {errors['data_form.jumlah_anggota'] && (
                            <div className="alert text-red-500 text-xs">
                                {errors['data_form.jumlah_anggota']}
                            </div>
                        )}
                    </div>
                </div>

                <div className="text-editor py-5 md:py-7">
                    <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm mb-5">
                        Deskripsi Divisi
                    </div>
                    {errors.deskripsi && (
                        <div className="alert text-red-500 text-xs">
                            {errors.deskripsi}
                        </div>
                    )}
                    <TextEditorDivisi 
                        value={data.deskripsi || ""} 
                        onChange={handleTextEditorChange}
                        onImagesChange={handleImagesChange}
                    />
                </div>

                <div className="flex justify-end pt-10 md:pt-20 pb-8 border-gray-300">
                    <button className="font-inter-medium px-3 py-2 bg-primary text-sm rounded-md text-white">
                        Simpan Perubahan
                    </button>
                </div>
            </form>
        </Layout>
    );
};

export default ManageDivisiEdit;
