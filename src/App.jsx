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
                    id="testimonial"
                    className="bg-[#4F39F6] px-5 xl:px-50 py-4 xl:py-15 flex justify-between flex-wrap xl:flex-nowrap text-white"
                >
                    <Info></Info>
                </section>

                <section className="max-w-300 mx-auto py-10 lg:py-30">
                    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                        <ToolsData toolsPromise={toolsPromise} cart={cart} setCart={setCart}></ToolsData>
                    </Suspense>
                </section>
                <section className=" max-w-300 mx-auto py-10 lg:py-30 text-center">
                    <Steps></Steps>
                </section>
                <section className=" max-w-300 mx-auto py-10 lg:py-30">
                    <Plans planPromise={planPromise}></Plans>
                </section>
            </main>
        </>
    );
}

export default App;
