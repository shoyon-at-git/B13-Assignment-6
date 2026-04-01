import { Check } from "lucide-react";
import React from "react";

const PlanCards = ({ plan }) => {
    return (
        <div
            className={`group relative p-6 shadow-2xl rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:text-white ${
                plan.popular ? "bg-purple-600 text-white" : "bg-white hover:bg-purple-600"
            }`}
        >
            <h1 className="font-extrabold text-2xl mb-2">{plan.name}</h1>

            <p className={`text-sm mb-8 ${plan.popular ? "text-white/90" : "text-gray-700 group-hover:text-white"}`}>
                {plan.subtitle}
            </p>

            <p className={`mb-8 ${plan.popular ? "text-white/90" : "text-gray-500 group-hover:text-white"}`}>
                <span
                    className={`font-extrabold text-3xl ${
                        plan.popular ? "text-white" : "text-black group-hover:text-white"
                    }`}
                >
                    ${plan.price}
                </span>
                /<span>{plan.billing}</span>
            </p>

            <ul className="mb-6 flex-1 space-y-3">
                {plan.features.map((feature, index) => (
                    <li
                        className={`flex items-center gap-2 ${
                            plan.popular ? "text-white" : "text-gray-600 group-hover:text-white"
                        }`}
                        key={index}
                    >
                        <Check
                            size={18}
                            className={`${plan.popular ? "text-white" : "text-purple-500 group-hover:text-white"}`}
                        />
                        {feature}
                    </li>
                ))}
            </ul>

            <button
                className={`btn w-full rounded-3xl font-bold border-none transition-all duration-300 ${
                    plan.popular
                        ? "bg-white text-purple-600 hover:bg-gray-100"
                        : "bg-purple-600 text-white group-hover:bg-white group-hover:text-purple-600"
                }`}
            >
                {plan.buttonText}
            </button>

            <p
                className={`text-xs w-fit py-1 px-3 rounded-full border font-semibold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                    plan.popular ? "bg-yellow-100 border-yellow-500 text-yellow-700" : "hidden"
                }`}
            >
                {plan.badge}
            </p>
        </div>
    );
};

export default PlanCards;
