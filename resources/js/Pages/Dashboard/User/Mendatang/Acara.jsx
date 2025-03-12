import Layout from "@/Layouts/Dashboard/Layout";
import { useState } from "react";
import { Link } from "@inertiajs/react";

const Acara = () => {
    return (
        <Layout>
            <div className="flex flex-col border-b border-gray-200 pb-6 md:pb-8 pt-12 md:pt-16 bg-white p-4 md:p-6 rounded-xl mt-2 bg-gradient-to-r from-[#ffa600] to-[#ffc800]">
                <span className="text-2xl md:text-3xl font-inter-semibold text-white">
                    Acara mendatang!
                </span>
                <p className="text-[12px] md:text-sm font-inter-regular text-white md:w-[70%] opacity-95">
                    List acara yang akan datang dan bisa kamu ikuti. beberapa
                    informasi dapat berubah berdasarkan kebijakan penyelenggara.
                </p>
            </div>
            <div className="w-full gap-4 bg-white rounded-xl mt-2 flex flex-col p-4 md:p-6 h-[80vh]">
                <Link href="/dashboard/acara/detail" className="h-24 md:h-28 w-full flex justify-between items-center border-b border-gray-200">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 md:gap-3">
                            <span className="text-base font-inter-semibold">
                                Course Academy
                            </span>
                            <div className="bg-green-100 border border-green-300 px-3 rounded-lg text-xs font-inter-semibold flex justify-center items-center text-green-800">
                                Offline
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <span className="font-inter-medium text-xs opacity-70">
                                Due on 17 febuari, 2025
                            </span>
                            <span className="font-inter-medium text-xs opacity-70">
                                •
                            </span>
                            <span className="font-inter-medium text-xs opacity-70">
                                Created on 12 febuari, 2025
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Link
                            href="/dashboard/acara/detail"
                            className="font-inter-semibold text-sm border bg-gray-50 border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100 transition-all ease-in duration-150"
                        >
                            Lihat detail
                        </Link>
                    </div>
                </Link>
            </div>
        </Layout>
    );
};

export default Acara;
