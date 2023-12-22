import React from "react";
import HomeBanner from './banner'
import Intro from './intro'
import Product from '../product'
import Ingredient from "./ingredient";
import Benfits from "./benfits";
import Testimony from "./testimony";

const Home = ({ productData }) => {
  return (
    <>
      <HomeBanner />
      <Intro />
      <Product productData={productData} />
      <Ingredient />
      <Benfits />
      <Testimony />
    </>
  );
};

export default Home;
