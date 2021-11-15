import React from "react";

import Layout from "../components/Layout";
import LeafBanner from "../components/LeafBanner";
import Hero from "../components/Hero";
import ImageComponent from "../components/ImageComponent";

const IndexPage = () => {
  return (
    <Layout>
      <LeafBanner />
      <Hero />
      <ImageComponent />
    </Layout>
  );
};

export default IndexPage;
