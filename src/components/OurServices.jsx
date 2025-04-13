import Image from "next/image";

const OurServices = () => {
    const ourServiceInfo = [
        {
            image: "/assets/services-image/service1.jpg",
            title: "জল পরিশোধন ব্যবস্থার উন্নয়ন",
            description:
                "আমরা শিল্প, পৌর, ক্যাম্প, হোটেল, পর্যটন, আবাসিক,গার্হস্থ্য, ব্যবসায়িক এবং অন্যান্য স্তরে প্রকল্পগুলি বিকাশ করি।",
        },
        {
            image: "/assets/services-image/service2.jpg",
            title: "পরিচালনা এবং রক্ষণাবেক্ষণ",
            description:
                "কৌশলগত খাতে স্বল্প ও দীর্ঘমেয়াদী পানি শোধনাগার ব্যবস্থার ব্যবস্থাপনা ও পরিচালনায় আমাদের উচ্চ প্রশিক্ষিত কর্মী রয়েছে।",
        },
        {
            image: "/assets/services-image/service3.jpg",
            title: "প্রশিক্ষণ এবং কোচিং",
            description:
                "শিল্প নিরাপত্তা এবং পরিবেশে আপনার কোম্পানির কর্মীদের মধ্যে নির্দিষ্ট দক্ষতা বিকাশের জন্য অভ্যন্তরীণ এবং উন্মুক্ত প্রশিক্ষণ।",
        },
    ];
    const OurServiceCard = ({ image, title, description }) => {
        return (
            <div className="w-96 text-center flex  items-center flex-col">
                <Image src={image} alt={title} height={100} width={300} />
                <div>
                    <h4 className="py-4">{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        );
    };
    return (
        <div className="py-10">
            <h1 className="text-center text-primery-text pb-10">
                আমাদের সেবা সমূহ
            </h1>
            <div className="max-container flex flex-wrap justify-center gap-3">
                {ourServiceInfo.map(({ image, title, description }, index) => (
                    <OurServiceCard
                        key={index}
                        image={image}
                        title={title}
                        description={description}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurServices;
