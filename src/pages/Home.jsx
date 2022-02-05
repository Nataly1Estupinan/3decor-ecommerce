import React from "react";

import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement/Announcement";
import Products from "../components/Products/Products1/Products";
import Products2 from "../components/Products/Products2/Products2";
import Products3 from "../components/Products/Products3/Products3";
import Slider from "../components/Slider/Slider";
import Newsletter from "../components/Newsletter/ContactForm";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />

      <Slider />

      <Categories />

      <Products />

      <Products2 />

      <Products3 />
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default Home;
