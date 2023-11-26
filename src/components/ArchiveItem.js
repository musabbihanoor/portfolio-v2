import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const ArchiveItem = ({
  data: { name, description, stack, madeAt, url },
  index,
}) => {
  return (
    <tr className="border-t-[0.5px] border-text_primary text-lg">
      <td className="py-4 px-4 ">{index}</td>
      <td className="py-4 px-4 text-purple">
        <p className="md:block hidden"> {name}</p>
        <a
          className="md:hidden block  text-purple flex items-center gap-1 hover:gap-2 transition-all ease-in"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {name} <BiLinkExternal />
        </a>
      </td>
      <td className="py-4 px-4  md:table-cell hidden">{madeAt}</td>
      <td className="sm:table-cell hidden">
        <div className="flex items-center gap-2 py-4 px-4">
          {stack.map((x, i) => (
            <p
              key={i}
              className="bg-light_purple text-center text-purple rounded-full py-1 px-3"
            >
              {x}
            </p>
          ))}
        </div>
      </td>
      <td className="py-4 px-4 md:table-cell hidden">
        {url && (
          <a
            className=" text-purple flex items-center gap-1 hover:gap-2 transition-all ease-in"
            href={"https://" + url}
            target="_blank"
            rel="noreferrer"
          >
            {url} <BiLinkExternal />
          </a>
        )}
      </td>
    </tr>
  );
};

export default ArchiveItem;
