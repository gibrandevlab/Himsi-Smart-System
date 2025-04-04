import Layout from "@/Layouts/Dashboard/Layout";
import { FaUserCircle, FaRegImage } from "react-icons/fa";
import { useForm, router, usePage } from '@inertiajs/react'
import { useState, useRef, useEffect } from "react";
import TextEditorDivisi from "@/Components/TextEditorDivisi";

const ManageBlogCategoryCreate = () => {
    
     // SETUP FORM
    const { data, setData } = useForm({
        nama: '',
        icon: '',
    });

    const { errors } = usePage().props
    function submit(e) {
        e.preventDefault();
        router.post("/dashboard/manage-blog-category/", data);
    }



    return <Layout>
        <form
            onSubmit={submit}
            className="w-full rounded-3xl md:rounded-md bg-white shadow-md md:p-8 p-4 border-l-8 border-primary"
        >
            <div className="flex justify-between pt-16 pb-8 border-b border-gray-300 relative">
                <div className="flex flex-col">
                    <span className="font-inter-bold text-2xl opacity-90">
                        Tambah kategori blog
                    </span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm ">
                    Nama Kategori Blog
                </div>
                <div className="w-full md:w-[70%]">
                    <input
                        onChange={e => setData('nama', e.target.value)}
                        type="text"
                        className="rounded-md h-8 border-gray-200 w-full md:w-[55%] text-sm font-inter-regular text-slate-600 bg-gray-50 md:border-gray-400"
                    />
                </div>
                {errors.nama &&
                    <div className="alert text-red-500 text-xs">
                    {errors.nama}
                    </div>
                }
            </div>
            <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm ">
                    Icon
                </div>
                <div className="w-full md:w-[70%]">
                    <input
                        onChange={e => setData('icon', e.target.value)}
                        type="text"
                        className="rounded-md h-8 border-gray-200 w-full md:w-[55%] text-sm font-inter-regular text-slate-600 bg-gray-50 md:border-gray-400"
                    />
                </div>
                {errors.icon &&
                    <div className="alert text-red-500 text-xs">
                    {errors.icon}
                    </div>
                }
            </div>
            <div className="flex justify-end pt-10 md:pt-20 pb-8 border-gray-300">
                <button className="font-inter-medium px-3 py-2 bg-primary text-sm rounded-md text-white">
                    Tambah
                </button>
            </div>
        </form>
    </Layout>;
};

export default ManageBlogCategoryCreate;
