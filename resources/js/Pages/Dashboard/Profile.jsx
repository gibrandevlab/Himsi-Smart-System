import Layout from "@/Layouts/Dashboard/Layout";
import { useForm } from "@inertiajs/react";

const Profile = () => {
    const { data, setData, put } = useForm({
        email: "shlnmzqlocko@gmail.com",
        nama: "sahlan muzaqi",
        no_telepon: "085848773284",
        jk: "laki-laki",
        universitas: "UBSI KLA",
        password: "12345678",
        new_password: "",
        confirm_password: "",
    });

    return (
        <Layout>
            <div className="w-full flex flex-col justify-end items-end md:items-start">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                    action=""
                    className="md:w-1/2 w-full  border-t-8 border-primary bg-white rounded-md flex flex-col gap-6 py-8 px-4 mt-6 ml-6"
                >
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="email"
                            className="font-inter-semibold opacity-90 text-base"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => setData("email", e.target.value)}
                            type="email"
                            required
                            className="border-gray-400 rounded-md bg-gray-100 focus:outline-none font-inter-regular text-slate-700"
                            value={data.email}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="nama"
                            className="font-inter-semibold opacity-90 text-base"
                        >
                            Nama
                        </label>
                        <input
                            required
                            onChange={(e) => setData("nama", e.target.value)}
                            type="text"
                            className="border-gray-400 rounded-md bg-gray-100 focus:outline-none font-inter-regular text-slate-700"
                            value={data.nama}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="telpon"
                            className="font-inter-semibold opacity-90 text-base"
                        >
                            No Telepon
                        </label>
                        <input
                            required
                            onChange={(e) =>
                                setData("no_telepon", e.target.value)
                            }
                            type="number"
                            className="border-gray-400 rounded-md bg-gray-100 focus:outline-none font-inter-regular text-slate-700"
                            value={data.no_telepon}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="jk"
                            className="font-inter-semibold opacity-90 text-base"
                        >
                            Jenis Kelamin
                        </label>
                        <input
                            required
                            onChange={(e) => setData("jk", e.target.value)}
                            type="text"
                            className="border-gray-400 rounded-md bg-gray-100 focus:outline-none font-inter-regular text-slate-700"
                            value={data.jk}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="universitas"
                            className="font-inter-semibold opacity-90 text-base"
                        >
                            Universitas
                        </label>
                        <input
                            required
                            disabled
                            type="text"
                            className="border-gray-400 rounded-md bg-gray-100 focus:outline-none font-inter-regular text-slate-700 cursor-not-allowed"
                            value={data.universitas}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-3 py-1 rounded bg-primary text-white"
                        >
                            Ubah data
                        </button>
                    </div>
                </form>

                <form
                    action=""
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                    className="md:w-1/2 w-full  border-t-4 border-primary bg-white rounded-md flex flex-col gap-6 p-4 mt-12 ml-6"
                >
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="password"
                            className="font-inter-semibold opacity-90 text-base"
                        >
                            Passowrd
                        </label>
                        <input
                            required
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type="password"
                            className="border-gray-400 rounded-md bg-gray-100 focus:outline-none font-inter-regular text-slate-700"
                            value={data.password}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="password"
                            className="font-inter-semibold opacity-90 text-base"
                        >
                            New Password
                        </label>
                        <input
                            required
                            onChange={(e) =>
                                setData("new_password", e.target.value)
                            }
                            type="password"
                            className="border-gray-400 rounded-md bg-gray-100 focus:outline-none font-inter-regular text-slate-700"
                            value={data.new_password}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="password"
                            className="font-inter-semibold opacity-90 text-base"
                        >
                            Confirm Password
                        </label>
                        <input
                        required
                            onChange={(e) =>
                                setData("confirm_password", e.target.value)
                            }
                            type="password"
                            className="border-gray-400 rounded-md bg-gray-100 focus:outline-none font-inter-regular text-slate-700"
                            value={data.confirm_password}
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-3 py-1 rounded bg-primary text-white"
                        >
                            Ubah password
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Profile;
