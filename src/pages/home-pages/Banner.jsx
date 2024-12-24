import React from 'react';

const Banner = () => {
    return (
        <div className="my-10">
            <div className="relative">
                <img
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1735060999/blog-1_nwewiz.png"
                    alt="Banner"
                    className="w-full h-[70vh]  object-cover"
                />
                <div className="absolute top-[50%] lg:top-[70%] left-5 lg:left-12 transform lg:-translate-y-1/2">
                    {/* Button */}
                    <div className="mb-4">
                        <button className="text-white bg-[#4B6BFB] py-2 px-5 rounded-xl text-sm md:text-base">
                            Technology
                        </button>
                    </div>
                    {/* Heading */}
                    <h1 className="text-white font-bold text-xl md:text-3xl lg:text-4xl leading-tight">
                        The Impact of Technology on the
                        <br /> Workplace: How Technology is Changing
                    </h1>
                    {/* Author and Date */}
                    <div className="flex space-x-4 flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0 my-5">
                        {/* Author Image */}
                        <div className="w-12 h-12">
                            <img
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1735061273/log0_hzullb.png"
                                alt="Author"
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>
                        {/* Author Name */}
                        <div className="text-white">
                            <p className="text-sm md:text-base">Tracey Wilson</p>
                        </div>
                        {/* Date */}
                        <div className="text-white">
                            <p className="text-sm md:text-base">August 20, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
