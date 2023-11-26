import { data } from "@/data/projects";
import Image from "next/image";
import React from "react";

const ProjectList = () => {
  return (
    <div>
      {/* <div className="bg-cover bg-center bg-[url('/blobs.svg')] h-screen w-screen absolute z-50 left-0 opacity-[.1]"></div> */}
      {/* <div className="image-container relative z-[2]">
        <Image
          src="/wave-down.svg"
          alt="wave"
          width={500}
          height={300}
          layout="responsive"
        />
      </div> */}
      <div className="relative z-30">
        {data.map((x, i) => (
          <div className="flex items-center">
            <div className="relative flex-1">
              <div className="image-container relative z-[2]">
                <Image
                  src="/project-bg.svg"
                  alt="wave"
                  width={700}
                  height={500}
                  layout="responsive"
                />
              </div>
              <div className="absolute top-0 flex items-center justify-center z-[2] w-full h-full">
                <Image src={x.image} alt="wave" width={500} height={300} />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-purple text-7xl font-bold">{x.name}</h1>
              <div className="flex gap-3 my-3">
                {x.stack.map((x, i) => (
                  <p className="bg-light_purple px-4 py-1 rounded-full drop-shadow-lg">
                    {x}
                  </p>
                ))}
              </div>
              <p className="text-[#000] w-[550px] my-10 text-xl">
                {x.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* 
      <div className="image-container relative z-[2]">
        <Image
          src="/wave-up.svg"
          alt="wave"
          width={500}
          height={300}
          layout="responsive"
        />
      </div> */}
    </div>
  );
};

export default ProjectList;
