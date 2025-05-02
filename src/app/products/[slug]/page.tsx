import Image from "next/image";
import { productinfo } from "@/data";
import { FaCartPlus } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

type Props = {
    params: {
        slug: string;
    };
};

const ProductPage = async ({ params }: Props) => {
    const { slug } = params;

    const product = productinfo.find((item) => item.slug === slug);

    if (!product) {
        return (
            <div className="h-screen flex items-center justify-center text-red-600 font-bold text-3xl">
                Product Not Found
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="w-full h-[400px] relative rounded-xl overflow-hidden shadow-md">
                <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    className="rounded-xl"
                    priority
                />
            </div>

            {/* Info */}
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-800">
                    {product.title}
                </h1>
                <p className="text-green-600 text-2xl font-semibold">
                    ৳ {product.price.toLocaleString()}
                </p>
                <p className="text-gray-700 text-base">{product.description}</p>
                <p className="text-gray-500 text-sm">
                    ⭐ Total Rating: {product.totalRating}
                </p>
                <p
                    className={`text-sm font-medium ${
                        product.inStock ? "text-green-600" : "text-red-500"
                    }`}
                >
                    {product.inStock ? "✅ In Stock" : "❌ Out of Stock"}
                </p>

                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-lg font-medium">
                        <FaCartPlus className="text-xl" />
                        Add to Cart
                    </button>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 text-black rounded-xl hover:bg-yellow-600 transition-all text-lg font-medium">
                        <BsLightningChargeFill className="text-xl" />
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
