import Image from "next/image";
import image from "@/public/bali.jpg";
import image2 from "@/public/bali2.jpg";
import image3 from "@/public/bali3.jpg";
import image4 from "@/public/bali4.jpg";

const Bali = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-around p-4">
        <div className="w-full md:w-1/3 p-2">
          <Image
            src={image}
            alt="Image 1"
            width={500}
            height={300}
            className="object-cover rounded-lg shadow-md"
            priority
          />
        </div>
        <div className="w-full md:w-1/3 p-2 text-center">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold">
            In the heart of the Indonesian archipelago lies Bali, a mesmerizing
            island that effortlessly weaves together natural beauty, rich
            culture, and spiritual serenity. Through my lens, I endeavor to
            encapsulate the essence of Bali, revealing its diverse landscapes,
            vibrant traditions, and timeless allure.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <Image
            src={image2}
            alt="Image 2"
            width={500}
            height={300}
            className="object-cover rounded-lg shadow-md"
            priority
          />
        </div>
      </section>
      <section className="flex flex-col items-center p-4 md:p-8">
        <div className="w-full flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 p-2">
            <Image
              src={image3}
              alt="Image 1"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-md"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <Image
              src={image4}
              alt="Image 2"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-md"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Bali;
