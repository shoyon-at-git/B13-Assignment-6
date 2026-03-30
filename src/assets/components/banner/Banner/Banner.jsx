import React from "react";
import banner from "../../../../assets/banner.png";
import { Play } from "lucide-react";

const Banner = () => {
    return (
        <div className="max-w-400 mx-auto px-50 py-15  flex justify-between items-center gap-15">
            <div className=" max-w-160 ">
                <h1 className="text-blue-600 font-medium  max-w-73 rounded-2xl px-4 py-1 mb-4 bg-blue-200">x New: AI-Powered Tools Available</h1>
                <h1 className="mb-4 text-7xl font-extrabold">
                    Supercharge Your<br></br>Digital Workflow
                </h1>
                <p className="mb-8 text-[#627382]">
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
