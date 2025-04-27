import React from "react";
import AppBarNavigation from "@/components/appBar/AppBar";
import Hero from "@/components/Hero/Hero";
import MainContent from "@/components/MainContent/MainContent";
import CallAction from "@/components/CallAction/CallAction";
import Footer from "@/components/Footer/Footer";

const AnimeLandingPage = () => {
  return (
    <>
      <AppBarNavigation />
      <Hero />
      <MainContent />
      <CallAction />
      <Footer />
    </>
  );
};

export default AnimeLandingPage;
