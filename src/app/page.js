import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Blogs from "@/components/Blogs";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blogs />
      <Projects />
      <Footer />
    </div>
  );
};

export default page;
