import CustomBtn from "@/components/ui/CustomBtn";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import ProductCard from "./ui/ProductCard";
import { productinfo } from "@/data";
const Products = () => {
    return (
        <div>
            <section id="our_products" className="bg-bg-primery">
                <h1 className="text-center text-primery-text py-20">
                    আমাদের পণ্যসমূহ
                </h1>
                <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 max-container">
                    {productinfo.map(
                        (
                            { title, imageUrl, totalRating, price, slug },
                            index
                        ) => (
                            <ProductCard
                                key={index}
                                title={title}
                                image={imageUrl}
                                totalRating={totalRating}
                                price={price}
                                slug={slug}
                            />
                        )
                    )}
                </div>
                <div className="flex justify-center py-10">
                    <CustomBtn title={"আরো দেখুন"} />
                </div>
            </section>
        </div>
    );
};

export default Products;
