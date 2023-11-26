import Image from "next/image";

import ArchiveItem from "@/components/ArchiveItem";
import { data } from "@/data/archive";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

import Typewriter from "typewriter-effect";

const page = () => {
  return (
    <div>
      {/* <Link
        href="/"
        className="flex items-center gap-1 hover:gap-3 text-green transition-all ease-in cursor-pointer"
      >
        <HiArrowLeft /> Musabbiha Noor
      </Link>
      <h1 className="text-text_secondary text-4xl font-bold my-2">
        All Projects
      </h1> */}
      <div className="bg-[url('/hexagon-bg.svg')] h-screen w-screen fixed z-[1] opacity-[.1]"></div>

      {/*    <div
        className={`relative z-10 md:h-[300px] h-[200px] flex items-center justify-center md:px-20 px-16 md:pt-32 p-32 pb-0 text-text_light bg-purple transition-all duration-150 ease-out hover:ease-in `}
      >
        <div className="bg-no-repeat bg-center bg-[url('/blobs.svg')] h-screen w-screen absolute z-10 left-0 opacity-[.1]"></div>
        <div className="relative z-20">
          <h1
            className={`text-center md:text-5xl text-3xl font-semibold md:w-[500px]`}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(100)
                  .typeString("Take a look at my work!")
                  .start();
              }}
            />
          </h1>
        </div>
      </div>
      <div className="image-container relative z-[2]">
        <Image
          src="/wave-up.svg"
          alt="wave"
          width={500}
          height={300}
          layout="responsive"
        />
      </div> */}

      <div className="px-10 py-20">
        <table className="text-text_dark xs:mt-20 mt-10 mx-auto sm:w-auto w-full">
          <thead className="text-2xl">
            <tr className="text-left text-purple">
              <th className="py-4 px-4">#</th>
              <th className="py-4 px-4">Name</th>
              <th className="py-4 px-4 md:table-cell hidden">Made at</th>
              {/* <th>description</th> */}
              <th className="py-4 px-4 sm:table-cell hidden">Stack</th>
              <th className="py-4 px-4 md:table-cell hidden">Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, i) => (
              <ArchiveItem key={i} data={x} index={i + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
