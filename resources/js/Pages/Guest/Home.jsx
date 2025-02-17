import { Head } from '@inertiajs/react';
import Navbar from "@/Layouts/Navbar";

export default function Home() {
    return (
       <>
        <Head titleTemplate="%s">
            <title>Himsi Kaliabang</title>
            <link rel="icon" href={`storage/Favicon/himsikla.jpg`} type="image/x-icon" />
            <meta name="description" content="onprogress" />
            <meta name="keywords" content="onprogress" />
            <meta name="author" content="onprogress" />
        </Head> 
        <Navbar></Navbar>
        <div className="w-full min-h-screen ">
           
        </div>
       </>
    );
}