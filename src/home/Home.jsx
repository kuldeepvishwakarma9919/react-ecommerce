import React from "react";
import "./Home.css";
import Navbar from "../includes/Navbar";
import Hero from "../component/common/Hero";
import ProductFeatured from "../component/common/ProductFeatured";
import PopularProduct from "../component/common/PopularProduct";
import BestDeals from "../component/common/BestDeals";
import Footer from "../includes/Footer";
import ProductOffer from "../component/common/ProductOffer";
const Home = () => {
    return (
        <>
          <Navbar />   
          <Hero />
          <ProductFeatured />
          <PopularProduct />
          <BestDeals />
          <ProductOffer />
          <Footer />
        </>
    )
}

export default Home;