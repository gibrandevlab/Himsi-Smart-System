import Layout from "@/Layouts/Dashboard/Layout";
import { FaUserCircle } from "react-icons/fa";
import { useForm, router, usePage } from '@inertiajs/react'
import { useState, useRef } from "react";
import TextEditorDivisi from "@/Components/TextEditorDivisi";

const ManageDivisiShow = ({data_divisi}) => {
    const [imagePreview, setImagePreview] = useState(data_divisi.logo);
    const fileInput = useRef(null);
     // SETUP FORM
    const { data, setData } = useForm({
        nama: data_divisi.nama,
        deskripsi: data_divisi.deskripsi,
        logo: data_divisi.logo,
        jumlah_anggota: data_divisi.jumlah_anggota,
    });

    const { errors } = usePage().props

    return <Layout>
        <form
            className="w-full rounded-3xl md:rounded-md bg-white shadow-md md:p-8 p-4 border-l-8 border-primary"
        >
            <div className="flex justify-between pt-16 pb-8 border-b border-gray-300 relative">
                <div className="flex flex-col">
                    <span className="font-inter-bold text-2xl opacity-90">
                        Show data divisi
                    </span>
                </div>
                {/* <div className="w-36 absolute bottom-0 right-0">
                    <img src="/storage/UndrawIcon/bike-ride.svg" alt="" className="w-full h-full object-cover object-center"/>
                </div> */}
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm ">
                    Nama Divisi
                </div>
                <div className="w-full md:w-[70%]">
                    <input
                        disabled
                        type="text bg-gray-500"
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
                    {imagePreview ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary border-opacity-60">
                            <img
                                src={imagePreview.startsWith("data:") ? imagePreview : `/storage/DivisiAssets/Logo/${imagePreview}`}
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

                    <input
                        disabled
                        ref={fileInput}
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
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm">
                    Jumlah Anggota Divisi
                </div>
                <div className="w-full md:w-[70%]">
                    <input
                        disabled
                        value={data.jumlah_anggota}
                        type="text bg-gray-500"
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
                {errors.deskripsi &&
                    <div className="alert text-red-500 text-xs">
                    {errors.deskripsi}
                    </div>
                }

                <div className="w-full font-inter-medium opacity-90 text-sm mb-5">
                    <div
                        dangerouslySetInnerHTML={{ __html: data.deskripsi }}
                    />
                </div>
            </div>
        </form>
    </Layout>;
};

export default ManageDivisiShow;
