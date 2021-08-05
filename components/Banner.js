import React from "react";
import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[300px] md:h-[32rem]">
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm font-bold sm:text-[25px]">
          Not sure where to go? Perfect
        </p>
        <button className="text-purple-500 bg-white px-10 py-4  shadow-md rounded-full font-bold my-5 hover:shadow-xl active:scale-90 transition duration-150 ">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
