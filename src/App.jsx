import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./assets/components/banner/Banner/Banner";
import NavBar from "./assets/components/navbar/NavBar";
import ToolsData from "./assets/components/tools-section/ToolsData";
import Steps from "./assets/components/Steps/Steps";
import Info from "./assets/components/info/Info";
import Plans from "./assets/components/price-plans/Plans";

const fetchToolsData = async () => {
    const res = await fetch("/data/tools-data/toolsData.json");
    const data = await res.json();
    return data;
};
const toolsPromise = fetchToolsData();

const fetchPlans =async ()=>{
    const res = await fetch("/data/plans/plans-data.json");
    const data = await res.json();
    return data
}
const planPromise = fetchPlans();


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
                    className="bg-[#4F39F6] px-5 xl:px-50 py-4 xl:py-15 flex justify-between flex-wrap xl:flex-nowrap text-white"
                >
                    <Info></Info>
                </section>

                <section id="products" className="max-w-300 mx-auto py-10 lg:py-30">
                    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                        <ToolsData toolsPromise={toolsPromise} cart={cart} setCart={setCart}></ToolsData>
                    </Suspense>
                </section>
                <section id="features" className=" max-w-300 mx-auto py-10 lg:py-30 text-center">
                    <Steps></Steps>
                </section>
                <section id="pricing" className=" max-w-300 mx-auto py-10 lg:py-30">
                    <Plans planPromise={planPromise}></Plans>
                </section>
                <section id="testimonial" className=" py-10 lg:py-30 text-center bg-purple-600">
                    <h1 className="font-extrabold text-2xl lg:text-4xl mb-3 text-white">Ready to Transform Your Workflow?</h1>
                    <p className="text-gray-100/80 text-sm md:text-[16px] mb-10">Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.</p>
                    <div className="flex gap-4 justify-center">
                        <a className="btn text-blue-700 rounded-3xl" href="#products">Explore Products</a>
                        <a className="btn bg-transparent rounded-3xl text-white" href="#pricing">View Pricing</a>
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
