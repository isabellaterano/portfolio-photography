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
        className={`${lora.className} antialiased bg-zinc-50 text-zinc-950`}
      >
        <Navbar />
        <div className="">
          <main className="">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
