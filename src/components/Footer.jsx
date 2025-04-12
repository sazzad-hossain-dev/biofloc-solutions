// components/Footer.tsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & About */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">YourBrand</h2>
                    <p className="text-sm">
                        Delivering excellence and creativity in every solution. Let's build something great together.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#products" className="hover:text-white transition">Products</a></li>
                        <li><a href="#services" className="hover:text-white transition">Services</a></li>
                        <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Subscribe</h3>
                    <p className="text-sm mb-2">Get updates on our latest offers.</p>
                    <form className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-white transition"><FaTwitter /></a>
                        <a href="#" className="hover:text-white transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} YourBrand. All rights reserved.
            </div>
        </footer>
    );
}
