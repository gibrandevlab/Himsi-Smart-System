import Layout from "@/Layouts/Dashboard/Layout";
import { IoSunny, IoLocation } from "react-icons/io5";

const DetailAcara = () => {
    return (
        <Layout>
            <div className="flex flex-col w-full h-[80vh] justify-center items-center rounded-md">
                <div className="relative w-full md:w-[36rem] h-[28rem] rounded-xl overflow-hidden bg-white flex justify-center items-center">
                    <div className="w-full h-full absolute top-0 shadow-md">
                        <img
                            src="/storage/Img/background-detail.webp"
                            alt=""
                            className="w-full h-full object-cover object-center opacity-80"
                        />
                    </div>
                    <div className="w-[90%] md:w-[50%] h-[75%] bg-white z-30 flex flex-col rounded-md overflow-hidden">
                        <div className="bg-sky-50 h-[45%] w-full flex justify-center items-center relative">
                            <img src="/storage/UndrawIcon/floating.svg" alt="" className="w-36" />
                        </div>
                        <div className="h-[55%] w-full p-4">
                            <span className="text-xs font-inter-medium text-gray-500">
                                Sunday, 12 April | 09:00 - 12:00
                            </span>
                            <h1 className="font-inter-semibold text-base opacity-85 mt-1">Santutan yatim/piatu</h1>
                            <div className="mt-1 text-[10px] font-inter-semibold text-gray-500 flex gap-1 justify-start items-center">
                                <IoLocation className="text-base text-gray-400"/>
                                Warmindo 4 sekawan
                            </div>
                            <div className="mt-2">
                                <p className="text-xs font-inter-reguler opacity-80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nisi. Adipisci incidunt ex voluptas dolore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DetailAcara;
