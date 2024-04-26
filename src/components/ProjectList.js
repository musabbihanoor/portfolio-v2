import { data } from "@/data/projects";
import Image from "next/image";
import React, { useState } from "react";
import { CiFolderOn } from "react-icons/ci";
import { LuExternalLink } from "react-icons/lu";

const ProjectList = () => {
  return (
    <section
      id="portfolio"
      className="relative z-30 bg-white sm:p-20 p-5 py-10"
    >
      <div className="left-0 top-0 bg-white bg-[url('/hexagon-bg.svg')] absolute z-[-1] h-full w-screen opacity-[.1]"></div>

      <h1 className="text-3xl text-center font-semibold dark:text-light_purple text-purple mb-5">
        /portfolio
      </h1>

      <p className="my-5 text-center text-lg">
        Here&apos;s some of my note-worthy projects
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 my-20">
        {data.map((x, i) => (
          <Project project={x} key={i} />
        ))}
      </div>

      {/* <hr className="mt-5 mb-10" /> */}

      {/* {data.map((x, i) => (
        <div
          key={i}
          className="flex sm:flex-row flex-col items-center sm:gap-10 sm:mb-0 mb-20"
        >
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
                <p
                  key={i}
                  className="bg-light_purple px-4 py-1 md:text-base text-xs rounded-full drop-shadow-lg"
                >
                  {x}
                </p>
              ))}
            </div>
            <p className="text-[#000] sm:text-start text-center md:w-[550px] md:my-10 my-5 md:text-xl">
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
      ))} */}
    </section>
  );
};

export default ProjectList;

const Project = ({
  project: { name, description, url, stack, association },
}) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg p-5 bg-white drop-shadow-lg transition duration-300 hover:translate-y-[-10px]">
      <div className="flex justify-between">
        <CiFolderOn className="text-3xl text-purple" />
        <a
          target="_blank"
          href={url}
          className="text-xl text-purple hover:text-black transition duration-300"
        >
          <LuExternalLink />
        </a>
      </div>
      <div className="flex-1">
        <h1 className="font-semibold text-lg">{name}</h1>

        <p className="text-sm my-3">{description}</p>
      </div>
      <div>
        {association && (
          <p className="text-xs text-right mb-2">
            Associated with:{" "}
            <a
              className="text-purple text-semibold underline"
              target="_blank"
              href={association[1]}
            >
              {association[0]}
            </a>
          </p>
        )}
        <div className="w-full flex flex-wrap gap-3 text-xs text-purple">
          {stack.map((y) => (
            <span key={y}>{y}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
