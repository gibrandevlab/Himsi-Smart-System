import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";

export default function Welcome() {
 
    return (
        <>
            <Head title="Welcowefcwe" />
            <div className="w-full min-h-screen">
                <Navbar></Navbar>
                <div className="flex w-full h-screen relative">
                    <div className="w-full h-[110%]">
                        <img src="/assets/image/dekstopHomePages.jpg" alt="" className="w-full h-full object-cover object-center brightness-[0.40] contrast-[0.95]"/>
                    </div>
                </div>
                <h1>weswdrv</h1>
            </div>
        </>
    );
}
