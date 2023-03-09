
const HomeCate = () => {
    return (
        < div className="pt-16 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
            <h1 className="text-5xl text-center "> সমস্ত বিভাগ </h1>
            <div className="grid grid-cols-3  ">

                <div className="text-5xl p-5">
                    <h1>
                        আপনার বিভাগ পছন্দ করুন এবং আপনার পণ্য খুঁজুন
                    </h1>
                </div>
                <div className="grid grid-cols-4 col-span-2 gap-5 text-center align-middle p-5">
                    <div className=" shadow-2xl shadow-black p-2 h-[30%] text-center ">
                        <h1 className="text-2xl">তেল</h1>
                    </div>
                    <div className="shadow-2xl shadow-black p-2 h-[30%] text-center ">
                        <h1 className="text-2xl">  রমজানের পণ্য</h1>
                    </div>
                    <div className=" shadow-2xl shadow-black p-2 h-[30%] text-center ">
                        <h1 className="text-2xl"> তেল</h1>
                    </div>
                    <div className=" shadow-2xl shadow-black p-2 h-[30%] text-center ">
                        <h1 className="text-2xl"> তেল</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCate;