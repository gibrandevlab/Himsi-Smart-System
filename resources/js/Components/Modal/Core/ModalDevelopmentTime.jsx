
const ModalDevelopmentTime = () => {
    const HandleBack = () => {
        window.history.back();
    }
    return(
        <div className="w-5/6 md:w-1/2 md:h-96 bg-white flex flex-col justify-center items-center mx-auto rounded-xl gap-4 md:gap-8 md:p-12 px-4 py-8">
            <div className="md:w-[400px] w-[300px]">
                <img src="storage/UndrawIcon/processing.svg" alt="" className="w-full object-cover object-center "/>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <span className="font-oswald-bold text-4xl opacity-90">Oopss Sorry!</span>
                <p className="text-sm md:text-base font-inter-medium opacity-85 text-center">This website actually are development time, We are currently working on this feature. Please come back later</p>
            </div>
            <div className="">
                <button className="font-inter-semibold text-primary underline underline-offset-1" onClick={HandleBack}>Back</button>
            </div>
        </div>
    )
}

export default ModalDevelopmentTime;