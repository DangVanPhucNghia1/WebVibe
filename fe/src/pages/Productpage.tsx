import NavBar from "../components/Navbar";
import React from "react";
import ProductCard from "../components/Product/ProductCard";
import Section8 from "../components/Homepage/Section8/Section8";
import Footer from "../components/Footer";
import ProductService from "../components/Product/ProductService";
import TestimonialSlider from "../components/Product/TestimonialSlider";
const ProductPage=()=>{
    return(
        <>
        <NavBar/>
        <ProductCard/>
        <ProductService/>
        <TestimonialSlider/>
        <Section8/>
        <Footer/>
        </>
    )
}
export default ProductPage;