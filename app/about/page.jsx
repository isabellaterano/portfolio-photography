import Image from "next/image";
import profile from "@/public/profile.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={profile}
              alt="Jasper Everett"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
          <p className="text-gray-600 mt-4">
            Hi, I&apos;m Jasper Everett, a passionate photographer with a love
            for capturing life&apos;s most beautiful moments. I specialize in
            portrait, landscape, and event photography. My journey into
            photography began at a young age, and over the years, I’ve developed
            a unique style that blends creativity with technical expertise.
          </p>
          <p className="text-gray-600 mt-4">
            Through my lens, I aim to tell stories that resonate with people and
            evoke emotions. Whether it&apos;s a candid shot or a meticulously
            planned portrait, I strive to create images that are not just
            visually stunning but also meaningful.
          </p>
          <p className="text-gray-600 mt-4">
            When I&apos;m not behind the camera, I enjoy exploring new places,
            meeting new people, and continuously learning to hone my craft.
            Let&apos;s connect and create something beautiful together!
          </p>
        </div>
      </div>
    </div>
  );
}
