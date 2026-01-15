import type { Metadata } from "next";
import { Poppins, Young_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {CartProvider} from '../context/CartContext';
import CartSidebar from '../components/CartSidebar';

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Creative Kids Bible Club | Family Discipleship Made Joyful",
  description: "Transform family discipleship with engaging, creative Bible study for children and guardians. Discover our seasonal devotional series and join our global community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${youngSerif.variable} ${poppins.variable} antialiased bg-white text-gray-900`}
      >
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}