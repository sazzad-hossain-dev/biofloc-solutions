import AboutUs from "@/components/AboutUs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
export default function Home() {
    return (
        <div>
            <div className="fixed top-0 w-full z-50">
                <Header />
            </div>
            <Hero />
            <AboutUs />
            <Products />
        </div>
    );
}
