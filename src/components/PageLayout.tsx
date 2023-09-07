import React from "react";
import Image from "next/image";

interface IProps {
  alt1: string;
  alt2: string;
  alt3: string;
  img1: any;
  img2: any;
  img3: any;
  /**
   * paragraph
   */
  para1: string;
  para2: string;
  para3: string;
}

const PageLayout: React.FC<IProps> = ({
  alt1,
  alt2,
  alt3,
  img1,
  img2,
  img3,
  para1,
  para2,
  para3,
}) => {
  return (
    <div className="relative flex place-items-center items-center grid grid-flow-col grid-rows-3 grid-cols-1 gap-20 col-span-2 justify-between p-36">
      <div className="grid grid-cols-2 grid-rows-1 w-full text-center items-center ">
        <Image src={img1} width={400} height={400} alt={alt1} />
        <p className=" w-4/5">{para1}</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 w-full text-center items-center ">
        <p className=" w-4/5">{para2}</p>
        <Image src={img2} width={400} height={400} alt={alt2} />
      </div>
      <div className="grid grid-cols-2 grid-rows-1 w-full text-center items-center ">
        <Image src={img3} width={400} height={400} alt={alt3} />
        <p className=" w-4/5">{para3}</p>
      </div>
    </div>
  );
};

export default PageLayout;
