import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
    const testimonials = [
        {
            name: "Justus Menke",
            position: "CEO, Eronaman",
            message:
                "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
            image: "/assets/images/Image.png",
        },
        {
            name: "Anna Keller",
            position: "Founder, BioWave",
            message:
                "We’ve seen a huge boost in efficiency since using their solution. Highly recommend to anyone in the industry.",
            image: "/assets/images/Image.png",
        },
        {
            name: "Arafat Hossain",
            position: "Manager, AquaTech BD",
            message:
                "বাংলাদেশে এরকম একটি সার্ভিস পাওয়া খুবই বিরল। অসাধারণ সার্ভিস ও পণ্য!",
            image: "/assets/images/Image.png",
        },
    ];

    const TestimonialCard = ({ name, position, message, image }) => (
        <div className="w-full sm:w-[350px] border border-gray-300 p-6 rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl">
            <div className="flex gap-1 text-yellow-500">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <FaStar key={i} />
                    ))}
            </div>
            <p className="py-4 text-gray-700">{message}</p>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 mt-4">
                <Image
                    src={image}
                    alt={name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-gray-500">{position}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-container py-16">
            <h4 className="text-primery-text text-center">Testimonial</h4>
            <h1 className="text-center max-w-xl mx-auto text-3xl font-bold text-primery-text mb-10">
                What Our Happy Users Say
            </h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {testimonials.map((item, i) => (
                    <TestimonialCard key={i} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
