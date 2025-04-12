import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import Products from "@/components/Products";
import Testimonial from "@/components/Testimonial";
export default function Home() {
    return (
        <div>
            <Hero />
            <AboutUs />
            <Products />
            <FAQ />
            <OurServices />
            <Testimonial />
            <ContactUs />
        </div>
    );
}
