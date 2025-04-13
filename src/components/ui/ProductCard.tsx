import Image from "next/image";
import Link from "next/link";
type productProps = {
    title: string;
    image: string;
    price: number;
    slug: string;
    totalRating: number;
};
const ProductCard = ({
    title,
    image,
    price,
    totalRating,
    slug,
}: productProps) => {
    return (
        <Link
            href={`/products/${slug}`}
            className="block bg-white  shadow hover:shadow-md transition duration-300 w-full "
        >
            <div className="relative w-full h-40 rounded-t-xl overflow-hidden group">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain mt-5 transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-4">
                <h3 className="text-base font-medium text-gray-800 truncate">
                    {title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-blue-600 font-semibold text-sm">
                        {price}
                    </span>
                    <div className="flex items-center text-yellow-400 text-sm">
                        ⭐⭐⭐⭐<span className="text-gray-300">⭐</span>
                        <span className="ml-1 text-gray-500">
                            ({totalRating})
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
