import Layout from "@/Layouts/Dashboard/Layout";
import { FaUserCircle } from "react-icons/fa";
import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";

const AddMembers = () => {
    const [checked, setChecked] = useState(false);
    const fileInput = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const { data, setData, put, processing, errors } = useForm({
        email: "",
        role: "member",
        password: "",
        password_confirmation: "",
        nama: "",
        nim: "",
        priode: "2024/2025",
        no_telepon: "",
        status_aktif: 0,
        image: null,
    });

    const hadnleClickFileInput = () => {
        fileInput.current.click();
    };

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        setData("image", file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <Layout>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="w-full rounded-3xl md:rounded-md bg-white shadow-md md:p-8 p-4 border-l-8 border-primary"
            >
                <div className="flex justify-between pt-16 pb-8 border-b border-gray-300 relative">
                    <div className="flex flex-col">
                        <span className="font-inter-bold text-2xl opacity-90">
                            Account Information
                        </span>
                        <p className="font-inter-reguler text-sm opacity-80">
                            Berisi data-data akun yang akan digunakan untuk
                            login ke sistem.
                        </p>
                    </div>
                    {/* <div className="w-36 absolute bottom-0 right-0">
                        <img src="/storage/UndrawIcon/bike-ride.svg" alt="" className="w-full h-full object-cover object-center"/>
                    </div> */}
                </div>
                <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                    <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm ">
                        Email
                    </div>
                    <div className="w-full md:w-[70%]">
                        <input
                            required
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            type="email"
                            className="rounded-md h-8 border-gray-200 w-full md:w-[55%] text-sm font-inter-regular text-slate-600 bg-gray-50 md:border-gray-400"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                    <div className="w-full md:w-[30%] font-inter-medium opacity-90 text-sm ">
                        Role
                    </div>
                    <div className="w-[50%] md:w-[30%] bg-gray-50 border-b border-gray-400 rounded-md overflow-hidden px-2">
                        <select
                            value={data.role}
                            onChange={(e) => setData("role", e.target.value)}
                            id="role"
                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer text-slate-700 font-inter-regular"
                        >
                            <option disabled className="">
                                Choose a role
                            </option>
                            <option value="member">Anggota</option>
                            <option value="superadmin">Admin</option>
                            <option value="ketua_cabang">Ketua</option>
                            <option value="wakil_cabang">Wakil ketua</option>
                            <option value="bendahara">Bendahara</option>
                            <option value="sekretaris">Sekretaris</option>
                            <option value="ketua_koordinator">
                                Koordinator
                            </option>
                            <option value="wakil_koordinator">
                                Wakil Koordinator
                            </option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                    <div className="md:w-[30%] font-inter-medium opacity-90 text-sm ">
                        Password
                    </div>
                    <div className="w-full md:w-[50%]">
                        <input
                            required
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type="password"
                            className="rounded-md h-8 w-full border-gray-200 bg-gray-50 md:border-gray-400 md:w-[55%] text-sm font-inter-regular text-slate-600"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                    <div className="md:w-[30%] font-inter-medium opacity-90 text-sm ">
                        Confirm Password
                    </div>
                    <div className="w-full md:w-[50%]">
                        <input
                            required
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            type="password"
                            className="rounded-md h-8 border-gray-200 bg-gray-50 md:border-gray-400 w-full md:w-[55%] text-sm font-inter-regular text-slate-600"
                        />
                    </div>
                </div>
                <div className="flex flex-col pt-20 pb-8 border-b border-gray-300">
                    <span className="font-inter-bold text-xl opacity-90">
                        Personal Information
                    </span>
                    <p className="font-inter-reguler text-sm opacity-80">
                        Beberapa informasi ini akan ditampilkan secara publik
                        jadi berhati-hatilah dengan apa yang dibagikan.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                    <div className="md:w-[30%] font-inter-medium opacity-90 text-sm ">
                        Nama Lengkap
                    </div>
                    <div className="w-full md:w-[70%]">
                        <input
                            required
                            value={data.nama}
                            onChange={(e) => setData("nama", e.target.value)}
                            type="text"
                            className="rounded-md h-8 border-gray-200 bg-gray-50 md:border-gray-400 w-full md:w-[55%] text-sm font-inter-regular text-slate-600"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                    <div className="w-[30%] font-inter-medium opacity-90 text-sm ">
                        Poto
                    </div>
                    <div className="col-span-full">
                        <div className="mt-2 flex items-center gap-x-3">
                            {imagePreview ? (
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary border-opacity-60">
                                    <img
                                        src={imagePreview}
                                        alt="Avatar"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            ) : (
                                <FaUserCircle
                                    aria-hidden="true"
                                    className="size-12 text-gray-300 border-2 border-primary rounded-full border-opacity-60"
                                />
                            )}
                            <button
                                onClick={(e) => hadnleClickFileInput()}
                                type="button"
                                className="rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 ring-1 shadow-xs ring-gray-400 ring-inset hover:bg-gray-50 font-inter-medium text-opacity-80"
                            >
                                Upload
                            </button>
                            <input
                                ref={fileInput}
                                onChange={(e) => handleFileInput(e)}
                                type="file"
                                className="hidden"
                                capture="environment"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                    <div className="md:w-[30%] font-inter-medium opacity-90 text-sm ">
                        Nim
                    </div>
                    <div className="w-full md:w-[40%]">
                        <input
                            required
                            value={data.nim}
                            onChange={(e) => setData("nim", e.target.value)}
                            type="Number"
                            className="rounded-md h-8 border-gray-200 bg-gray-50 md:border-gray-400 w-full md:w-[55%] text-sm font-inter-regular text-slate-600"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2 overflow-hidden">
                    <div className="md:w-[30%] font-inter-medium opacity-90 text-sm ">
                        Priode
                    </div>
                    <div className="md:w-[30%] w-[40%] bg-gray-50 border-b border-gray-400 rounded-md px-2">
                        <select
                            value={data.priode}
                            onChange={(e) => setData("priode", e.target.value)}
                            id="priode"
                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer text-slate-700 font-inter-regular "
                        >
                            <option disabled className="">
                                Choose a priode
                            </option>
                            <option value="2019/2020">2019/2020</option>
                            <option value="2020/2021">2020/2021</option>
                            <option value="2021/2022">2022/2023</option>
                            <option value="2023/2024">2023/2024</option>
                            <option value="2024/2025">2024/2025</option>
                            <option value="2025/2026">2025/2026</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                    <div className="md:w-[30%] font-inter-medium opacity-90 text-sm ">
                        No telepon
                    </div>
                    <div className="md:w-[50%] w-full">
                        <input
                            required
                            value={data.no_telepon}
                            onChange={(e) =>
                                setData("no_telepon", e.target.value)
                            }
                            type="Number"
                            className="rounded-md h-8 border-gray-200 bg-gray-50 md:border-gray-400 w-full md:w-[55%] text-sm font-inter-regular text-slate-600"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:border-b border-gray-300 py-5 md:py-7 md:items-center gap-y-2">
                    <div className="md:w-[30%] font-inter-medium opacity-90 text-sm ">
                        Status aktif
                    </div>
                    <div className="md:w-[50%]">
                        <div className="flex">
                            <div className="flex items-center h-5">
                                <input
                                    onChange={(e) => {
                                        setChecked(!checked);
                                        setData(
                                            "status_aktif",
                                            checked ? 0 : 1
                                        );
                                    }}
                                    onClick={(e) => {
                                        if (checked) {
                                            setData("status_aktif", 0);
                                            setChecked(!checked);
                                        }
                                    }}
                                    checked={checked}
                                    id="helper-radio"
                                    aria-describedby="helper-radio-text"
                                    type="radio"
                                    value="1"
                                    className="w-4 h-4 text-blue-600 bg-secondary border-gray-400 focus:ring-blue-500 focus:ring-2 "
                                />
                            </div>
                            <div className="ms-2 text-sm">
                                <label
                                    htmlFor="helper-radio"
                                    className="font-inter-medium text-gray-900 "
                                >
                                    Status aktif mahasiswa
                                </label>
                                <p
                                    id="helper-radio-text"
                                    className="text-xs font-inter-regular text-gray-500"
                                >
                                    Jika tidak dicheck akan secara default
                                    menjadi mahasiswa tidak aktif.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-10 md:pt-20 pb-8 border-gray-300">
                    <button className="font-inter-medium px-3 py-2 bg-primary text-sm rounded-md text-white">
                        Tambah
                    </button>
                </div>
            </form>
        </Layout>
    );
};

export default AddMembers;
