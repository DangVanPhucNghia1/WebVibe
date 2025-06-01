import React, { useEffect } from "react";
import Section1 from "@/components/AboutUs/Section1/Section1";
import Section2 from "@/components/AboutUs/Section2/Section2";
import Section3 from "@/components/AboutUs/Section3/Section3";
import Section8 from "@/components/Homepage/Section8/Section8";
import NavBar from "@/components/Navbar";
import Footer from "../components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // chạy hiệu ứng một lần khi scroll tới
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
        <Section3 />
      </div>

      <div data-aos="fade-up">
        <Section8 />
      </div>

      <Footer />
    </>
  );
};

export default AboutUsPage;
