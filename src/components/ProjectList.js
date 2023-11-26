import { data } from "@/data/projects";
import Image from "next/image";
import React from "react";

const ProjectList = () => {
  return (
    <div className="relative z-30 bg-white sm:p-20 p-5 py-10">
      <div className="left-0 top-0 bg-white bg-[url('/hexagon-bg.svg')] absolute z-[-1] h-full w-screen opacity-[.1]"></div>

      <h1 className="sm:text-5xl text-3xl text-purple font-semibold text-center">
        /portfolio
      </h1>

      <p className="text-center my-5 text-xl">
        Here's few of my favorite projects
      </p>
      <hr className="mt-5 mb-10" />

      {data.map((x, i) => (
        <div className="flex sm:flex-row flex-col items-center sm:gap-10 sm:mb-0 mb-20">
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
          <div className="flex-1 flex flex-col sm:items-start items-center">
            <h1 className="text-purple md:text-7xl text-3xl font-bold">
              {x.name}
            </h1>
            <div className="flex gap-3 my-3">
              {x.stack.map((x, i) => (
                <p className="bg-light_purple px-4 py-1 md:text-base text-xs rounded-full drop-shadow-lg">
                  {x}
                </p>
              ))}
            </div>
            <p className="text-[#000] sm:text-start text-center md:w-[550px] md:my-10 py-5 md:text-xl">
              {x.description}
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={x.url}
              className="border-2 border-purple md:text-lg md:px-6 px-4 md:py-2 py-1 rounded-lg text-purple hover:text-white hover:bg-purple transition-all"
            >
              Visit
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
