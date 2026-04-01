import React from "react";

const Footer = () => {
    return (
        <div className="text-center md:text-left ">
            <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center md:items-start gap-4 text-sm">
                <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold text-white">DigiTools</h1>
                    <p>
                        Premium digital tools for creators, <br></br>professionals, and businesses. Work smarter
                        <br></br>with our suite of powerful tools.
                    </p>
                </div>
                <div className="flex gap-10">
                    <div>
                        <h1 className="text-white font-medium text-xl mb-4">Product</h1>
                        <ul className="space-y-3">
                            <li>
                                <a href="">Features</a>
                            </li>
                            <li>
                                <a href="">Pricing</a>
                            </li>
                            <li>
                                <a href="">Templates</a>
                            </li>
                            <li>
                                <a href="">Integrations</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-white font-medium text-xl mb-4">Company</h1>
                        <ul className="space-y-3">
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">Careers</a>
                            </li>
                            <li>
                                <a href="">Press</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-white font-medium text-xl mb-4">Resources</h1>
                        <ul className="space-y-3">
                            <li>
                                <a href="">Documentation</a>
                            </li>
                            <li>
                                <a href="">Help Center</a>
                            </li>
                            <li>
                                <a href="">Community</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-black">
                    <h1 className="text-white font-medium text-xl mb-4">Social Links</h1>
                    <div className="flex gap-4">
                        <div className="h-10 w-10 bg-white flex justify-center items-center rounded-full">
                            <a href="">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                        <div className="h-10 w-10 bg-white flex justify-center items-center rounded-full border">
                            <a className="" href="">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </div>
                        <div className="h-10 w-10 bg-white flex justify-center items-center rounded-full">
                            <a href="">
                                <i class="fa-brands fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-700 mt-8 md:mt-20 mb-8"></div>
            <div className="flex justify-between text-xs">
                <p>© 2026 Digitools. All rights reserved.</p>
                <ul className="flex gap-4">
                    <li>
                        <a href="">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="">Terms of Service</a>
                    </li>
                    <li>
                        <a href="">Cookies</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
