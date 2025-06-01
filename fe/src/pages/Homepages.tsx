import * as React from "react";
import NavBar from "../components/Navbar";

import Footer from "../components/Footer";
import Section8 from "../components/Homepage/Section8/Section8";
import Section3 from "../components/Homepage/Section3/Section3";
import Section4 from "../components/Homepage/Section4/Section4";
import Section5 from "../components/Homepage/Section5/Section5";
import Section6 from "../components/Homepage/Section6/Section6";
import Section7 from "../components/Homepage/Section7/Section7";
import Section1 from "../components/Homepage/Section1/Section1";
import Section2 from "../components/Homepage/Section2/Section2";
import AOS from 'aos';
import 'aos/dist/aos.css';
const HomePage = () => {
    const section4Ref = React.useRef(null);
    React.useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);


    const scrollToSection4 = () => {
        section4Ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <NavBar />
            <div data-aos="fade-up">
                <Section1 />
            </div>

            <div data-aos="fade-up">
                <Section3 onScrollToSection4={scrollToSection4} />
            </div>

            <div data-aos="fade-up">
                <Section5 />
            </div>

            <div data-aos="fade-up">
                <Section6 />
            </div>

            <div data-aos="fade-up">
                <Section4 />
            </div>

            <div ref={section4Ref} data-aos="fade-up">
                <Section7 />
            </div>


            <Section8 />


            <Footer />
        </>

    )
}
export default HomePage;