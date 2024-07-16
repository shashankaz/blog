import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <section className="h-screen py-12">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
          </div>
          <div>
            <p>Coming Soon!!!</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
