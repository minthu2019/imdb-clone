import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../../components/Header";
import Providers from "./Providers";
import Navbar from "../../components/Navbar";
import SearchBox from "../../components/SearchBox";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Header />
            <Navbar />
            <SearchBox />
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
