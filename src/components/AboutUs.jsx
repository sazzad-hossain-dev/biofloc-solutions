import Image from "next/image";

const AboutUs = () => {
    return (
        <section className="bg-bg-primery py-20">
            <div className="max-container">
                <h1 className="text-primery-text text-center  mb-16">
                    আমাদের সম্পর্কে - BioFloc Solutions
                </h1>

                <div className="flex flex-col-reverse md:flex-row items-start gap-12">
                    <div className="md:w-1/2">
                        <h4 className="text-primery-text mb-6 text-center ">
                            টেকসই বায়োফ্লক চাষের মাধ্যমে অ্যাকোয়াকালচারের
                            বিপ্লব
                        </h4>
                        <p className="text-[#6F6C90] text-[min(20px,3vw)]  font-medium leading-relaxed text-justify">
                            BioFloc Solutions হল আধুনিক বায়োফ্লক প্রযুক্তির
                            মাধ্যমে মাছ চাষকে আরও সাশ্রয়ী, পরিবেশবান্ধব এবং
                            লাভজনক করার একটি নির্ভরযোগ্য প্রতিষ্ঠান। আমরা
                            মাছচাষীদের জন্য উন্নত মানের পণ্য, পেশাদার পরামর্শ
                            এবং উদ্ভাবনী সমাধান সরবরাহ করে থাকি, যা উচ্চ উৎপাদন,
                            কম খরচ এবং স্বাস্থ্যকর মাছ চাষ নিশ্চিত করে।
                            <br />
                            <br />
                            আমরা আপনাকে সরবরাহ করি—
                            <ul className="list-disc list-inside mt-4 space-y-1 text-[#6F6C90]">
                                <li>
                                    বিশ্বমানের বায়োফ্লক সরঞ্জাম সেরা মাছের
                                    বৃদ্ধির জন্য
                                </li>
                                <li>
                                    উন্নত অ্যারেশন সিস্টেম পানির গুণমান বজায়
                                    রাখতে
                                </li>
                                <li>
                                    প্রোবায়োটিক ও মাইক্রোবিয়াল সলিউশন
                                    স্বাস্থ্যকর মাছ উৎপাদনের জন্য
                                </li>
                                <li>
                                    অভিজ্ঞ বিশেষজ্ঞদের সহায়তা সফল মাছচাষের জন্য
                                </li>
                            </ul>
                            <br />
                            আসুন, নতুন প্রজন্মের অ্যাকোয়াকালচার গড়ে
                            তুলি—টেকসই, লাভজনক ও পরিবেশবান্ধব!
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/assets/images/about_us_image.webp"
                                alt="BioFloc Illustration"
                                width={600}
                                height={400}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
