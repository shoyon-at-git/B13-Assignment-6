import { Check } from "lucide-react";


const ToolCard = ({ tool, cart, setCart }) => {
    // console.log(tool);
    let borderTag = "border-yellow-600";
    let bgTag = "bg-yellow-200/60";
    let textTag = "text-yellow-600";
    if (tool.tag.toLowerCase() === "popular") {
        borderTag = "border-blue-600";
        bgTag = "bg-blue-200";
        textTag = "text-blue-600";
    } else if (tool.tag.toLowerCase() === "new") {
        borderTag = "border-green-600";
        bgTag = "bg-green-300";
        textTag = "text-green-600";
    }
    const existingItem = cart.find((item) => item.id === tool.id);

    const handlePurchaseBtn = () => {
        if (existingItem) {
            return;
        }
        setCart([...cart, tool]);
    };

    return (
        <div className="rounded-lg shadow-lg p-6 relative">
            <p
                className={`absolute top-1 right-10 text-xs font-bold border w-fit px-2 py-1 rounded-2xl ${bgTag} ${borderTag} ${textTag}`}
            >
                {tool.tag}
            </p>
            <div className="mb-4 w-15 h-15 flex justify-center items-center">
                <img src={tool.image} alt="" />
            </div>
            <div className="space-y-4">
                <h1 className="font-bold text-2xl">{tool.name}</h1>
                <p className=" text-gray-500">{tool.description}</p>
                <p>
                    <span className="font-bold text-lg">${tool.price}</span>/<span className="text-gray-500">{tool.billing === "monthly" ? "mo" : "one-time"}</span>
                </p>
                <ul>
                    {tool.features.map((feature, index) => {
                        return (
                            <li key={index} className="flex gap-2 text-gray-500">
                                <Check className="text-green-500"></Check>
                                {feature}
                            </li>
                        );
                    })}
                </ul>
                <button
                    disabled={existingItem}
                    onClick={() => {
                        handlePurchaseBtn();
                    }}
                    className={`w-full btn ${
                        existingItem ? "bg-gray-400 text-white border-none cursor-not-allowed" : "btn-primary"
                    }`}
                >
                    {existingItem ? "Added to cart" : "Buy Now"}
                </button>
            </div>
        </div>
    );
};

export default ToolCard;
