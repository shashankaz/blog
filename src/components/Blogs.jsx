import React from "react";
import Link from "next/link";

const blogs = [
  {
    title: "Building Real-Time Apps with WebSocket",
    description:
      "Learn how to create responsive real-time applications using WebSocket technology.",
    views: "850 views",
    time: "3 days ago",
    link: "/realtime-apps",
  },
  {
    title: "The Future of Virtual Reality in Education",
    description:
      "Explore the potential impact of virtual reality on modern education systems.",
    views: "1.5K views",
    time: "4 days ago",
    link: "/vr-education",
  },
  {
    title: "Mastering Responsive Design with CSS Grid",
    description:
      "Unlock the full potential of CSS Grid to create adaptive and visually stunning layouts.",
    views: "1.1K views",
    time: "5 days ago",
    link: "/responsive-design",
  },
];

const Blogs = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Recent Blogs</h2>
          <p className="mt-2 text-lg">Check out my latest blogs.</p>
        </div>
        <div className="flex flex-wrap gap-4 w-full">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative overflow-hidden w-full rounded-lg transition-all hover:shadow-lg shadow"
            >
              <Link
                href={blog.link}
                className="absolute inset-0 z-10"
                prefetch={false}
              >
                <span className="sr-only">View note</span>
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="mt-2 text-sm line-clamp-2">{blog.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <EyeIcon className="h-4 w-4" />
                    <span>{blog.views}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{blog.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2">
          <Link className="border-b-2 border-blue-500" href="/blogs">
            All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

const CalendarIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

const EyeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default Blogs;
