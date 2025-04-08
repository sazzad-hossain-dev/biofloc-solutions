import AboutUs from "@/components/AboutUs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import FAQ from "@/components/FAQ";
import OurServices from "@/components/OurServices";
import Testimonial from "@/components/Testimonial";
export default function Home() {
    return (
        <div>
            <div className="fixed top-0 w-full z-50">
                <Header />
            </div>
            <Hero />
            <AboutUs />
            <Products />
            <FAQ />
            <OurServices />
            <Testimonial />
        </div>
    );
}
