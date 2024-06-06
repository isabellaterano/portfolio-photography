import Image from "next/image";
import profile from "@/public/profile.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <div className="max-w-4xl px-4">
        <div className="flex justify-center">
          <div className="relative w-40 h-40">
            <Image
              src={profile}
              alt="Photographer"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center my-4">About Me</h1>
        <p className="text-lg leading-relaxed">
          I am a passionate photographer dedicated to capturing moments and
          creating memories. With years of experience in the field, I specialize
          in portrait, landscape, and event photography. My goal is to deliver
          stunning visuals that resonate with viewers and leave a lasting
          impression.
        </p>
      </div>
    </div>
  );
};

export default About;
