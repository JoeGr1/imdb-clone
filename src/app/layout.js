import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JG-imdb clone",
  description: "Learn next.13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
