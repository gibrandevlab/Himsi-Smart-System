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
        <div className="w-full min-h-screen">
            <Navbar></Navbar>
            <div className="flex w-full h-screen relative">
                <div className="w-full h-[110%]">
                    <img src={`storage/Banner/banner.jpg`} alt="" className="w-full h-full object-cover object-center brightness-[0.40] contrast-[0.95]"/>
                </div>
            </div>
            <h1>ashsldhsl</h1>
        </div>
       </>
    );
}