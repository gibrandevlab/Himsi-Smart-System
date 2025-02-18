const Overlay = ({ children }) => {
    return(
        <div className="w-full h-screen bg-secondary flex justify-center items-center fixed top-0 left-0 z-[9999]">
            {children}
        </div>
    )
}

export default Overlay;