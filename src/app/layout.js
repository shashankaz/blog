import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shashank",
  description: "lorem ipsum dolor sit amet consectetur adipisicing elit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full px-4 md:mx-auto md:w-[768px] md:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
