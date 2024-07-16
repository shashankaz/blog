import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "EduSmart Learning Platform",
    description:
      "An interactive and adaptive learning platform for students of all ages.",
    imageUrl: "/project-1.jpg",
    alt: "Project 1",
  },
  {
    title: "UrbanCraft Construction Solutions",
    description:
      "A comprehensive platform providing innovative construction solutions.",
    imageUrl: "/project-2.jpg",
    alt: "Project 2",
  },
  {
    title: "GreenTech Environmental Initiative",
    description:
      "A project focused on promoting sustainable and eco-friendly technologies.",
    imageUrl: "/project-3.jpg",
    alt: "Project 3",
  },
];

const Projects = () => {
  return (
    <section className="w-full py-12">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            My Latest Projects
          </h2>
          <p className="mt-2 text-lg">Check out some of my most recent work.</p>
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden rounded-2xl shadow-md hover:shadow-lg md:w-[48%]"
            >
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src={project.imageUrl}
                alt={project.alt}
                width={400}
                height={300}
                className="object-cover w-full h-60 bg-gray-800 grayscale"
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold md:text-xl">
                  {project.title}
                </h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2">
          <Link className="border-b-2 border-blue-500" href={"/projects"}>
            All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
