import React from "react";
import { IHeadline } from "./Headline.interface";
import Image from "next/image";

const Headline: React.FC<IHeadline> = ({ title, blurb, image, alt }) => {
  return (
    <div className="flex flex-col gap-1 items-center h-48 relative">
      <Image
        className="z-0 opacity-20"
        src={image}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <h1 className="z-10 my-8 text-6xl">{title}</h1>
      <p className="z-10 relative center w-50 text-2xl">{blurb}</p>
    </div>
  );
};

export default Headline;
