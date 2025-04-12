import CustomBtn from "@/components/ui/CustomBtn";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import ProductCard from "./ui/ProductCard";
import { productinfo } from "@/data";
const Products = () => {
    const categoryProductsData = [
        {
            image: "/assets/product-images/image1.jpg",
            name: "motor",
        },
        {
            image: "/assets/product-images/image2.jpg",
            name: "motor",
        },
        {
            image: "/assets/product-images/image3.jpg",
            name: "motor",
        },
        {
            image: "/assets/product-images/image4.jpg",
            name: "motor",
        },
        {
            image: "/assets/product-images/image5.jpg",
            name: "motor",
        },
        {
            image: "/assets/product-images/image6.jpg",
            name: "motor",
        },
        {
            image: "/assets/product-images/image7.jpg",
            name: "motor",
        },
        {
            image: "/assets/product-images/image8.jpg",
            name: "motor",
        },
        {
            image: "/assets/product-images/image9.jpg",
            name: "motor",
        },
    ];

    const CategoryCard = ({ image, title }) => {
        return (
            <div>
                <Image src={image} alt={title} height={100} width={300} />
                <p className="text-center">{title}</p>
            </div>
        );
    };
    return (
        <div>
            {/* OUR PRODUCT DEMO */}
            <section id="our_products" className="bg-bg-primery">
                <h1 className="text-center text-primery-text py-20">
                    আমাদের পণ্যসমূহ
                </h1>
                <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 max-container">
                    {productinfo.map(
                        ({ title, imageUrl, totalRating, price }, index) => (
                            <ProductCard
                                key={index}
                                title={title}
                                image={imageUrl}
                                totalRating={totalRating}
                                price={price}
                            />
                        )
                    )}
                </div>
                <div className="flex justify-center py-10">
                    <CustomBtn title={"আরো দেখুন"} />
                </div>
            </section>
            <section id="feature">
                <h1 className="text-center text-primery-text py-20">
                    Featured
                </h1>
                <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 max-container">
                    {productinfo.map(
                        ({ title, imageUrl, totalRating, price }, index) => (
                            <ProductCard
                                key={index}
                                title={title}
                                image={imageUrl}
                                totalRating={totalRating}
                                price={price}
                            />
                        )
                    )}
                </div>
            </section>
            <section id="shop-by-category">
                <h1 className="text-center text-primery-text py-20">
                    Shop by Categories
                </h1>
                <div className="max-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
                    {categoryProductsData.map(({ image, name }, index) => (
                        <CategoryCard key={index} image={image} title={name} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Products;
