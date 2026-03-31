import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./assets/components/banner/Banner/Banner";
import NavBar from "./assets/components/navbar/NavBar";
import ToolsData from "./assets/components/tools-section/ToolsData";

const fetchToolsData = async () => {
    const res = await fetch("/data/tools-data/toolsData.json");
    const data = await res.json();
    return data;
};
const toolsPromise = fetchToolsData();



function App() {
    const [cart, setCart] = useState([]);
    return (
        <>
            <header>
                <NavBar  cart={cart}></NavBar>
            </header>
            <main>
                <section>
                    <Banner></Banner>
                </section>
                <section
                    id="testimonial"
                    className="bg-[#4F39F6] px-5 xl:px-50 py-4 xl:py-15 flex justify-between flex-wrap xl:flex-nowrap text-white"
                >
                    <div className=" border-r px-10 md:px-31 border-white/50 flex flex-col items-center gap-2 md:gap-3">
                        <h1 className="text-3xl xl:text-6xl font-bold xl:font-extrabold">50k+</h1>
                        <p className="font-normal xl:font-medium text-sm xl:text-2xl">Active Users</p>
                    </div>
                    <div className=" border-white/50 flex flex-col items-center gap-2 md:gap-3">
                        <h1 className="text-3xl xl:text-6xl font-bold xl:font-extrabold">200+</h1>
                        <p className="font-normal xl:font-medium text-sm xl:text-2xl">Premium Tools</p>
                    </div>
                    <div className="border-l px-10 md:px-31 flex flex-col items-center gap-2 md:gap-3">
                        <h1 className="text-3xl xl:text-6xl font-bold xl:font-extrabold">4.9</h1>
                        <p className="font-normal xl:font-medium text-sm xl:text-2xl">Rating</p>
                    </div>
                </section>

                <section className="max-w-300 mx-auto py-30">
                    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                        <ToolsData toolsPromise={toolsPromise} cart={cart} setCart={setCart}></ToolsData>
                    </Suspense>
                </section>
            </main>
        </>
    );
}

export default App;
