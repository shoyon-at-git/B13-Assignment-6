import React from "react";
import banner from "../../../../assets/banner.png";
import circles from "../../../../assets/circles.png";
import { Play } from "lucide-react";

const Banner = () => {
    return (
        <div className=" max-w-400 mx-auto px-10 xl:px-50 py-5 xl:py-15  flex flex-col-reverse md:flex-row justify-between items-center gap-4 xl:gap-15">
            <div className="max-w-160  flex flex-col items-center text-center md:items-start md:text-left">
                <div className="text-blue-600 font-sm lg:font-medium  rounded-3xl px-3 md:px-4 py-1 md:py-2 mb-4 bg-blue-200 flex items-center gap-3 w-fit">
                    <img className="w-3 h-3 md:h-5 md:w-5" src={circles} alt="" />
                    <h1>New: AI-Powered Tools Available</h1>
                </div>
                <h1 className="mb-2 xl:mb-4 text-2xl xl:text-7xl font-extrabold">
                    Supercharge Your<br />Digital Workflow
                </h1>
                <p className="mb-4 xl:mb-8 text-xs md:text-lg text-[#627382]">
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start
                    creating faster today. Explore Products
                </p>
                <div className="flex gap-4">
                    <a href="#products" className="btn btn-primary rounded-3xl ">Explore Products</a>
                    <button className="flex btn btn-outline rounded-3xl border-2 border-blue-700 font-bold text-blue-700"><Play></Play> Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={banner} alt="Banner image" />
            </div>
        </div>
    );
};

export default Banner;
