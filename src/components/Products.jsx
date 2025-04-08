import CustomBtn from "@/components/ui/CustomBtn";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
const Products = () => {
    const OurProductsData = [
        {
            image: "/assets/product-images/image1.jpg",
            title: "air pump ",
            model: "model rx9-0s",
            price: "10000 tk",
        },
        {
            image: "/assets/product-images/image2.jpg",
            title: "air pump ",
            model: "model rx9-0s",
            price: "10000 tk",
        },
        {
            image: "/assets/product-images/image3.jpg",
            title: "air pump ",
            model: "model rx9-0s",
            price: "10000 tk",
        },
        {
            image: "/assets/product-images/image4.jpg",
            title: "air pump ",
            model: "model rx9-0s",
            price: "10000 tk",
        },
        {
            image: "/assets/product-images/image5.jpg",
            title: "air pump ",
            model: "model rx9-0s",
            price: "10000 tk",
        },
        {
            image: "/assets/product-images/image6.jpg",
            title: "air pump ",
            model: "model rx9-0s",
            price: "10000 tk",
        },
        {
            image: "/assets/product-images/image7.jpg",
            title: "air pump ",
            model: "model rx9-0s",
            price: "10000 tk",
        },
        {
            image: "/assets/product-images/image8.jpg",
            title: "air pump ",
            model: "model rx9-0s",
            price: "10000 tk",
        },
        {
            image: "/assets/product-images/image9.jpg",
            title: "air pump ",
            model: "model rx9-0s",
            price: "10000 tk",
        },
    ];
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
    const OurProductCard = ({ image, title, model, price }) => {
        return (
            <div className="h-96 w-80">
                <div className="w-full h-74">
                    <Image
                        src={`${image}`}
                        alt={`${model}`}
                        height={100}
                        width={300}
                        className="w-full h-full"
                    />
                </div>
                <div className="bg-[#D9D9D9] py-6">
                    <div className="flex justify-around">
                        <p className="font-semibold">{title}</p>
                        <p>{model}</p>
                    </div>
                    <p className="font-semibold px-10">{price}</p>
                </div>
            </div>
        );
    };
    const FeatureCard = ({ image, title, model, price }) => {
        return (
            <div className="h-100 w-56">
                <div>
                    <Image
                        src={`${image}`}
                        height={100}
                        width={300}
                        alt={`${title}`}
                    />
                </div>
                <div className="px-6">
                    <p className="flex gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </p>
                    <p>{title}</p>
                    <p>{model}</p>
                    <p>{price}</p>
                </div>
            </div>
        );
    };
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
                <div className="max-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
                    {OurProductsData.map(
                        ({ image, title, model, price }, index) => (
                            <OurProductCard
                                image={image}
                                title={title}
                                model={model}
                                price={price}
                                key={index}
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
                <div className="max-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
                    {OurProductsData.map(
                        ({ title, image, model, price }, index) => (
                            <FeatureCard
                                key={index}
                                title={title}
                                image={image}
                                model={model}
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
