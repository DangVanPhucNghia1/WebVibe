import React, { useEffect } from "react";
import Section1 from "@/components/Contact/Section1/Section1";
import Section8 from "@/components/Homepage/Section8/Section8";
import NavBar from "@/components/Navbar";
import Footer from "../components/Footer";
import Section2 from "@/components/Contact/Section2/Section2.tsx";

import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, 
    });
  }, []);

  return (
    <>
      <NavBar />

      <div data-aos="fade-up">
        <Section1 />
      </div>

      <div data-aos="fade-up">
        <Section2 />
      </div>

      <div data-aos="fade-up">
        <Section8 />
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
