import ProductCard from "@/components/ui/ProductCard";
import { productinfo } from "@/data";

const page = () => {
    return (
        <div className="mt-25 max-container overflow-x-hidden">
            <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
                {productinfo.map(
                    ({ imageUrl, title, price, totalRating }, index) => (
                        <ProductCard
                            image={imageUrl}
                            title={title}
                            totalRating={totalRating}
                            price={price}
                            key={index}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default page;
