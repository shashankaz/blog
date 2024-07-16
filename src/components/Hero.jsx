import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex flex-col-reverse items-start justify-between gap-8 py-12 md:flex-row md:items-center">
      <div>
        <h1 className="text-3xl font-bold">
          Hey, I&apos;m Shashank
          <span className="text-blue-500 text-xl font-light"> /sha.shank/</span>
        </h1>
        <p className="mt-4">
          Welcome to my digital space. I&apos;m a passionate software developer
          from India. Here, I share my latest projects, insights, and
          experiences from my journey in the tech world.
        </p>
      </div>
      <div className="rounded-xl min-w-[180px]">
        <Image
          src="/profile.jpg"
          width={180}
          height={180}
          alt="Profile"
          className="rounded-xl object-cover bg-gray-800 grayscale"
        />
      </div>
    </main>
  );
};

export default Hero;
