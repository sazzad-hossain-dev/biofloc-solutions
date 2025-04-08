import Image from "next/image";
import { FaStar } from "react-icons/fa6";
const Testimonial = () => {
    const TestimonialCard = () => {
        return (
            <div className="w-92 border border-black p-6 ">
                <div>
                    <div className="flex gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div className="pb-8 pt-4">
                        <p>
                            Cum soluta nobis est eligendi optio cumque nihil
                            impedit quo minus id quod maxime placeat facere
                            possimus.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-8 py-4 border-black border px-3 ">
                    <div>
                        <Image
                            src={"/assets/images/Image.png"}
                            alt="profile-image"
                            height={100}
                            width={80}
                        />
                    </div>
                    <div>
                        <p>Justus Menke</p>
                        <p>CEO Eronaman</p>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="max-container my-10">
            <h4 className="text-primery-text text-center">Testimonial</h4>
            <h1 className="text-center max-w-lg mx-auto text-primery-text">
                What Our Happy User Says
            </h1>
            <div className="flex flex-wrap gap-3 py-4 justify-center">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
    );
};

export default Testimonial;
