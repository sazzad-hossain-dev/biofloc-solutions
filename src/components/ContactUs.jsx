// components/ContactUs.tsx
const ContactUs = () => {
    return (
        <section className="bg-bg-primery py-20">
            <div className="max-container">
                <h2 className="text-primery-text text-center mb-16">
                    যোগাযোগ করুন - BioFloc Solutions
                </h2>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Contact Form */}
                    <div className="md:w-1/2 w-full">
                        <form className="bg-white rounded-xl p-8 shadow-lg space-y-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    আপনার নাম
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="নাম লিখুন"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    ইমেইল
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="আপনার ইমেইল লিখুন"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    বার্তা
                                </label>
                                <textarea
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows={5}
                                    placeholder="আপনার বার্তা লিখুন"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
                            >
                                বার্তা পাঠান
                            </button>
                        </form>
                    </div>

                    {/* Optional: Image or Contact Info */}
                    <div className="md:w-1/2 w-full flex items-center justify-center">
                        <div className="text-center text-[#6F6C90] space-y-4">
                            <p className="text-lg font-medium">
                                আমাদের সাথে সরাসরি যোগাযোগ করুন:
                            </p>
                            <p>
                                📞 <strong>+880 1234-567890</strong>
                            </p>
                            <p>
                                📧 <strong>info@bioflocsolutions.com</strong>
                            </p>
                            <p>📍 ঢাকা, বাংলাদেশ</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
