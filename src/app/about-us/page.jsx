// app/about-us/page.tsx or pages/about-us.tsx
import Image from "next/image";

const teamMembers = [
    {
        name: "মোঃ সজীব হোসেন",
        role: "প্রতিষ্ঠাতা ও প্রযুক্তি পরামর্শদাতা",
        image: "/assets/images/team/sajib.jpg",
    },
    {
        name: "তানভীর আহমেদ",
        role: "প্রধান টেকনিক্যাল অফিসার",
        image: "/assets/images/team/tanvir.jpg",
    },
    {
        name: "সুবর্ণা আক্তার",
        role: "মার্কেটিং ও কমিউনিকেশন প্রধান",
        image: "/assets/images/team/suborna.jpg",
    },
];

const AboutUsPage = () => {
    return (
        <main className="bg-bg-primery text-[#6F6C90]">
            <section className="max-container py-30">
                <h1 className="text-primery-text text-center mb-10 text-3xl font-bold">
                    আমাদের সম্পর্কে
                </h1>
                <p className="text-center max-w-3xl mx-auto text-lg">
                    BioFloc Solutions আধুনিক বায়োফ্লক প্রযুক্তির মাধ্যমে
                    বাংলাদেশে টেকসই ও লাভজনক মাছচাষে নতুন দিগন্ত উন্মোচন করছে।
                </p>
            </section>

            {/* Mission, Vision, Values */}
            <section className="max-container py-10 grid md:grid-cols-3 gap-10">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <h3 className="text-xl font-semibold text-primery-text mb-4">
                        মিশন
                    </h3>
                    <p>
                        আমাদের লক্ষ্য হলো আধুনিক প্রযুক্তি এবং প্রাকৃতিক
                        সমাধানের মাধ্যমে মাছচাষকে সহজ, সাশ্রয়ী ও পরিবেশবান্ধব
                        করা।
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <h3 className="text-xl font-semibold text-primery-text mb-4">
                        ভিশন
                    </h3>
                    <p>
                        বাংলাদেশের প্রতিটি অঞ্চলে বায়োফ্লক প্রযুক্তি পৌঁছে
                        দিয়ে একটি আত্মনির্ভরশীল অ্যাকোয়াকালচার ভবিষ্যৎ তৈরি
                        করা।
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <h3 className="text-xl font-semibold text-primery-text mb-4">
                        মূল্যবোধ
                    </h3>
                    <p>
                        সততা, উদ্ভাবন, টেকসইতা ও গ্রাহকসেবা — এই চারটি মূল
                        স্তম্ভে দাঁড়িয়ে আছে আমাদের প্রতিষ্ঠান।
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="max-container py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-primery-text mb-6">
                            আমাদের যাত্রা
                        </h2>
                        <p className="leading-relaxed">
                            ২০২২ সালে আমাদের যাত্রা শুরু হয়েছিল একটি ছোট দল
                            নিয়ে, যারা চেয়েছিল মাছচাষে একটি টেকসই পরিবর্তন
                            আনতে। ধীরে ধীরে আমরা সারা দেশে প্রশিক্ষণ কর্মসূচি,
                            আধুনিক যন্ত্রপাতি সরবরাহ এবং গ্রাহক সহায়তা বাড়িয়ে
                            তুলি। এখন আমরা শতাধিক সফল প্রকল্প বাস্তবায়ন করেছি।
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/images/about_us_image.webp"
                            alt="Our Journey"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="max-container py-20 bg-white rounded-2xl shadow-inner">
                <h2 className="text-2xl font-bold text-primery-text mb-10 text-center">
                    কেন আমাদের নির্বাচন করবেন?
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-lg">
                    <ul className="list-disc list-inside space-y-2">
                        <li>বিশ্বমানের বায়োফ্লক যন্ত্রপাতি ও প্রযুক্তি</li>
                        <li>বিশেষজ্ঞদের দ্বারা প্রশিক্ষণ ও পরামর্শ</li>
                        <li>দ্রুত ডেলিভারি ও কাস্টম সাপোর্ট</li>
                        <li>পরিবেশবান্ধব সমাধান ও প্রযুক্তি</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2">
                        <li>সাশ্রয়ী মূল্যে সেরা পরিষেবা</li>
                        <li>দেশজুড়ে সফল প্রকল্প বাস্তবায়ন</li>
                        <li>রিসার্চ ও ডেভেলপমেন্ট ফোকাস</li>
                        <li>ফিড, প্রোবায়োটিক ও অ্যারেশন সলিউশন</li>
                    </ul>
                </div>
            </section>

            {/* Our Team */}
            <section className="max-container py-20">
                <h2 className="text-2xl font-bold text-primery-text mb-10 text-center">
                    আমাদের টিম
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition"
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={200}
                                height={200}
                                className="mx-auto rounded-full object-cover w-40 h-40 mb-4"
                            />
                            <h4 className="text-xl font-semibold text-primery-text mb-1">
                                {member.name}
                            </h4>
                            <p className="text-sm text-[#6F6C90]">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-container py-16 text-center">
                <h2 className="text-2xl font-bold text-primery-text mb-4">
                    আরও জানতে চান?
                </h2>
                <p className="mb-6">
                    আমাদের সাথে যোগাযোগ করুন এবং আপনার প্রকল্পে সফলতা আনুন।
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                    যোগাযোগ করুন
                </a>
            </section>
        </main>
    );
};

export default AboutUsPage;
