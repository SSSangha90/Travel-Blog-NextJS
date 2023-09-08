import React from "react";
import Image from "next/image";
import { IProps } from "./PageLayout.interface";

const PageLayout: React.FC<IProps> = ({
  alt1,
  alt2,
  alt3,
  fig1,
  fig2,
  fig3,
  img1,
  img2,
  img3,
  para1,
  para2,
  para3,
}) => {
  return (
    <div className="relative flex place-items-center items-center grid grid-flow-col grid-rows-3 grid-cols-1 gap-12 col-span-2 justify-between p-36">
      <div className="grid grid-cols-2 grid-rows-1  text-center items-center ">
        <div className="flex flex-col items-center gap-1">
          <Image
            src={img1}
            width={400}
            height={400}
            alt={alt1}
            className=" h-60 object-cover rounded"
          />
          <figcaption className="font-medium ">
            <div className="text-sky-500 dark:text-sky-400">{fig1}</div>
          </figcaption>
        </div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <p className="text-center text-md ">{para1}</p>
        </figure>
      </div>
      <div className="grid grid-cols-2 grid-rows-1  text-center items-center gap-6 ">
        <div>
          <p className="text-center text-md ">{para2}</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image
            src={img2}
            width={400}
            height={400}
            alt={alt2}
            className=" h-60 object-cover rounded"
          />
          <figcaption className="font-medium ">
            <div className="text-sky-500 dark:text-sky-400">{fig2}</div>
          </figcaption>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 text-center items-center ">
        <div className="flex flex-col items-center gap-1">
          <Image
            src={img3}
            width={400}
            height={400}
            alt={alt3}
            className=" h-60 object-cover rounded"
          />
          <figcaption className="font-medium ">
            <div className="text-sky-500 dark:text-sky-400">{fig3}</div>
          </figcaption>
        </div>
        <div>
          <p className="text-center text-md ">{para3}</p>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
