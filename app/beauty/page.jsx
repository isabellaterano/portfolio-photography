import Image from "next/image";
import image from "@/public/people.jpg";
import image2 from "@/public/people2.jpg";
import image3 from "@/public/people3.jpg";
import image4 from "@/public/people4.jpg";

const Beauty = () => {
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
            In the graceful lines etched by time, I find a beauty that
            transcends youth—a beauty that speaks of wisdom gained, stories
            lived, and memories cherished. Through my photography, I seek to
            capture the essence of old age, celebrating the timeless elegance
            and quiet dignity found in every weathered face and trembling hand.
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
              width={400}
              height={200}
              className="object-cover rounded-lg shadow-md"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <Image
              src={image4}
              alt="Image 2"
              width={400}
              height={200}
              className="object-cover rounded-lg shadow-md"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Beauty;
