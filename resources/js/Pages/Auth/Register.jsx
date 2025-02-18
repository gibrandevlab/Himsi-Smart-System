import { Head, Link, useForm } from "@inertiajs/react";
import { PiStudentFill } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Overlay from "@/Layouts/Overlay";
import ModalDevelopmentTime from "@/Components/Modal/Core/ModalDevelopmentTime";

export default function Register({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <Head title="Register" />
            <Overlay>
                <ModalDevelopmentTime></ModalDevelopmentTime>
            </Overlay>
            <div className="min-h-screen bg-secondary flex items-center md:p-0 p-6">
                <div className="flex w-full md:w-2/3 bg-white h-5/6 gap-6 justify-center items-center mx-auto border border-gray-300 rounded-xl md:rounded-md flex-col  relative mt-20 md:mt-0 md:overflow-hidden md:flex-row-reverse">
                    <div className="w-1/2 hidden md:flex flex-col justify-center items-center gap-6 p-1  md:p-12 relative">
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-slate-900 font-inter-extrabold max-sm:bg-red-600 md:text-4xl text-center tracking-wide">
                                HIMSI <span className="text-primary">KLA</span>
                            </div>
                            <p className="font-inter-regular opacity-70 text-xs text-center ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt, vitae!
                            </p>
                        </div>
                        <div className="sm:w-[500px] md:w-full overflow-hidden">
                            <img
                                src="storage/UndrawIcon/online-discus.svg"
                                alt=""
                                className="w-full object-center object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-40 flex md:hidden absolute -top-[140px] z-20">
                        <img
                            src="storage/Img/1.png"
                            alt=""
                            className="w-full object-center object-cover"
                        />
                    </div>

                    <div className="w-72 h-72 bg-primary rounded-xl absolute -top-[1rem] md:hidden bg-opacity-80 shadow-md"></div>
                    <div className="w-72 h-72 bg-primary rounded-xl absolute -top-[2rem] md:hidden bg-opacity-75 shadow-md"></div>
                    <div className="w-72 h-72 bg-primary rounded-xl absolute -top-[3rem] md:hidden bg-opacity-55 shadow-md"></div>
                    <div className="w-72 h-72 bg-primary rounded-xl absolute -top-[4rem] md:hidden bg-opacity-35 shadow-md"></div>
                    <div className="w-72 h-72 bg-primary rounded-xl absolute -top-[5rem] md:hidden bg-opacity-15 shadow-md"></div>

                    <div className="w-full md:w-1/2 md:bg-secondary  shadow-xl p-6 md:p-8 flex flex-col justify-center items-center gap-10 md:gap-4 z-10 bg-white rounded-xl md:rounded-none relative">
                        <div className="flex flex-col w-full">
                            <h1 className="font-oswald-bold text-slate-900 text-3xl text-center md:text-start">
                                Please register
                            </h1>
                            <p className="font-inter-medium text-xs text-center md:text-start md:opacity-100 opacity-70">
                                Permintaan untuk registrasi akun disini, dan
                                tunggu konfirmasi akun dari admin HIMSI UBSI
                                KLA.
                            </p>
                        </div>
                        <form
                            action=""
                            className="flex flex-col justify-start items-start w-full"
                        >
                            <label
                                htmlFor="email"
                                className="block mb-1 text-sm font-medium text-gray-900 font-inter-semibold"
                            >
                                Email
                            </label>
                            <div className="relative mb-6 w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none w-full">
                                    <MdEmail className="text-base opacity-80" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                    placeholder="example@gmail.com"
                                    required
                                />
                            </div>
                            <label
                                htmlFor="name"
                                className="block mb-1 text-sm font-medium text-gray-900 font-inter-semibold"
                            >
                                Name
                            </label>
                            <div className="relative mb-6 w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none w-full">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                    placeholder="john de"
                                    required
                                />
                            </div>

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
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                    placeholder="********"
                                    required
                                />
                            </div>

                            <label
                                htmlFor="confirm-password"
                                className="block mb-1 text-sm font-medium text-gray-900 font-inter-semibold"
                            >
                                Confirm Password
                            </label>
                            <div className="relative mb-6 w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none w-full">
                                    <RiLockPasswordFill className="text-base opacity-80" />
                                </div>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    name="confirm-password"
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                    placeholder="********"
                                    required
                                />
                            </div>

                            <button
                                className="w-full mt-2 bg-primary text-secondary py-2 font-inter-semibold text-sm rounded-md"
                                type="submit"
                            >
                                REGISTER
                            </button>

                            <div className="w-full justify-center items-center text-center font-inter-medium text-sm mt-2 opacity-90">
                                already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-sky-800 underline underline-offset-1"
                                >
                                    Sign in
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
