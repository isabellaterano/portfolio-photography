import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Jonathan Locker - Professional Photographer",
  description:
    "Discover the stunning portfolio of Jonathan Locker, a professional photographer specializing in portrait, landscape, and event photography. Explore captivating images that tell a story, showcase creativity, and highlight the beauty of the world through Jonathan's lens.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lora.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative bg-stone-950 text-stone-100`}
      >
        <Navbar />
        <div className="flex-1 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
