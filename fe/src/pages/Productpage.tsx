import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "../components/Navbar";
import ProductCard from "../components/Product/ProductCard";
import ProductService from "../components/Product/ProductService";
import TestimonialSlider from "../components/Product/TestimonialSlider";
import Section8 from "../components/Homepage/Section8/Section8";
import Footer from "../components/Footer";

const ProductPage = () => {
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
        <ProductCard />
      </div>

      <div data-aos="fade-up">
        <ProductService />
      </div>

      <div data-aos="fade-up">
        <TestimonialSlider />
      </div>

      <div data-aos="fade-up">
        <Section8 />
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
