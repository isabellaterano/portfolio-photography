import Image from "next/image";
import image from "@/public/abandoned.jpg";
import image2 from "@/public/abandoned2.jpg";
import image3 from "@/public/abandoned3.jpg";
import image4 from "@/public/abandoned4.jpg";

const Memories = () => {
  return (
    <>
      <section className="flex flex-col items-center p-4 md:p-8">
        <div className="w-full flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 p-2">
            <Image
              src={image2}
              alt="Horizontal Image"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-md w-auto"
              priority
            />
          </div>
          <div className="w-full md:w-1/4 p-2">
            <Image
              src={image}
              alt="Vertical Image"
              width={300}
              height={500}
              className="object-cover rounded-lg shadow-md w-auto"
              priority
            />
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold">
            In the heart of every abandoned place lies a silent story, waiting
            to be told. Through my lens, I capture the haunting beauty of these
            forsaken spaces, revealing the echoes of the past and the silent
            testimonies of time.
          </p>
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
              className="object-cover rounded-lg shadow-md w-auto"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <Image
              src={image4}
              alt="Image 2"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-md w-auto"
              priority
            />
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold">
            I invite you to step into these forgotten worlds and witness the
            silent stories they hold. Each photograph is a tribute to the
            resilience of these structures and the fleeting nature of human
            presence. In capturing the beauty of abandonment, I hope to preserve
            the memory of these places and the echoes of the lives they once
            sheltered.
          </p>
        </div>
      </section>
    </>
  );
};

export default Memories;
