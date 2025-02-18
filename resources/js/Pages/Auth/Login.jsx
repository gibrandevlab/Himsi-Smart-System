import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { PiStudentFill } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        login: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login.store"));
    };

    return (
        <div className="min-h-screen bg-secondary flex items-center md:p-0 p-6">
            <div className="flex w-full md:w-2/3 bg-white h-5/6 gap-6 justify-center items-center mx-auto border border-gray-300 rounded-xl md:rounded-md flex-col md:flex-row relative mt-20 md:mt-0 md:overflow-hidden">
                <div className="w-1/2 hidden md:flex flex-col justify-center items-center gap-6 p-1  md:p-12 relative">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-slate-900 font-inter-extrabold max-sm:bg-red-600 md:text-4xl text-center tracking-wide">
                            HIMSI <span className="text-primary">KLA</span>
                        </div>
                        <p className="font-inter-regular opacity-70 text-xs text-center ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt, vitae!
                        </p>
                    </div>
                    <div className="sm:w-[500px] md:w-full overflow-hidden">
                        <img
                            src="storage/UndrawIcon/showing-support.svg"
                            alt=""
                            className="w-full object-center object-cover"
                        />
                    </div>
                </div>
                <div className="w-36 flex md:hidden absolute -top-24 z-20">
                    <img
                        src="storage/Img/boy-sitting.png"
                        alt=""
                        className="w-full object-center object-cover"
                    />
                </div>

                <div className="w-72 h-72 bg-primary rounded-xl absolute -top-[1rem] md:hidden bg-opacity-80 shadow-md"></div>
                <div className="w-72 h-72 bg-primary rounded-xl absolute -top-[2rem] md:hidden bg-opacity-75 shadow-md"></div>
                <div className="w-72 h-72 bg-primary rounded-xl absolute -top-[3rem] md:hidden bg-opacity-55 shadow-md"></div>
                <div className="w-72 h-72 bg-primary rounded-xl absolute -top-[4rem] md:hidden bg-opacity-35 shadow-md"></div>
                <div className="w-72 h-72 bg-primary rounded-xl absolute -top-[5rem] md:hidden bg-opacity-15 shadow-md"></div>

                <div className="w-full h-[450px] md:w-1/2 md:bg-secondary shadow-xl p-6 md:p-8 flex flex-col justify-center items-center gap-10 md:gap-4 z-10 bg-white rounded-xl md:rounded-none relative">
                    <div className="w-32 h-32 bg-primary absolute -right-20 -top-20 rounded-full opacity-90 md:block hidden"></div>
                    <div className="flex flex-col w-full">
                        <h1 className="font-oswald-bold text-slate-900 text-3xl text-center md:text-start">
                            Welcome Back!
                        </h1>
                        <p className="font-inter-reguler text-sm text-center md:text-start md:opacity-100 opacity-70">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Facilis, explicabo.
                        </p>
                    </div>
                    <form
                        action=""
                        className="flex flex-col justify-start items-start w-full"
                        onSubmit={e => submit(e)}
                    >
                        <label
                            htmlFor="email"
                            className="block mb-1 text-sm font-medium text-gray-900 font-inter-semibold"
                        >
                            Email/Nim
                        </label>
                        <div className="relative mb-6 w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none w-full">
                                <MdEmail className="text-base opacity-80"/>
                            </div>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                onChange={(e) => setData("login", e.target.value)}
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                placeholder="Masukan Email/Nim"
                                required
                            />
                        </div>

                        {/* <label
                            htmlFor="nim"
                            className="block mb-1 text-sm font-medium text-gray-900 font-inter-semibold"
                        >
                            Nim
                        </label>
                        <div className="relative mb-6 w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none w-full">
                                <PiStudentFill className="text-lg opacity-80" />
                            </div>
                            <input
                                type="number"
                                id="nim"
                                name="nim"
                                className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                placeholder="19000000"
                                style={{
                                    appearance: "textfield",
                                    MozAppearance: "textfield",
                                    WebkitAppearance: "none",
                                }}
                                required
                            />
                        </div> */}

                        <label
                            htmlFor="password"
                            className="block mb-1 text-sm font-medium text-gray-900 font-inter-semibold"
                        >
                            Password
                        </label>
                        <div className="relative mb-6 w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none w-full">
                                <RiLockPasswordFill className="text-base opacity-80" />
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={(e) => setData("password", e.target.value)}
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                placeholder="********"
                                required
                            />
                        </div>

                        <button
                            className="w-full mt-2 bg-primary text-secondary py-2 font-inter-semibold text-sm rounded-md"
                            type="submit"
                        >
                            LOGIN
                        </button>

                        <div className="w-full justify-center items-center text-center font-inter-medium text-sm mt-2 opacity-90">
                            Don't have an account?{" "} <Link href="/register" className="text-sky-800 underline underline-offset-1">Register</Link>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    );
}
