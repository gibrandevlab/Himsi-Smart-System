import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Footer from "@/Layouts/Footer";
import Modal from "@/Components/Modal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function KelolaDivisiIndex() { 

    return (
       <>
            <Head titleTemplate="%s">
                <title>Blog / Himsi Kaliabang</title>
                <link rel="icon" href={`/storage/Favicon/himsikla.jpg`} type="image/x-icon" />
                <meta name="description" content="onprogress" />
                <meta name="keywords" content="onprogress" />
                <meta name="author" content="onprogress" />
            </Head> 

            <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Kelola Divisi</h2>}>
                <div className="p-6 bg-white rounded-lg shadow">
                    <h3 className="text-lg font-medium">Halaman Kelola Divisi</h3>
                </div>
            </AuthenticatedLayout>
       </>
    )
}