import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShortenedLink = ({ originalLink, shortLink }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => setCopied(true);

  return (
    <div className="w-full max-w-[1240px] mt-3 mb-20 px-2 mx-auto flex flex-col md:flex-row items-center justify-between py-4 rounded-md bg-white shadow">
      <p className="text-black font-medium text-md my-2 md:my-0 md:w-full break-all max-w-[500px]">
        {originalLink}
      </p>
      <div className="flex items-center flex-col md:flex-row">
        <p className="md:mr-4 text-lg text-[#27d3d6] w-full">{shortLink}</p>
        <CopyToClipboard text={shortLink} onCopy={handleCopy}>
          <button
            className={`py-2 w-full md:w-[150px]  ${
              copied ? "bg-[#3a3053]" : "bg-[#27d3d6]"
            } rounded-md text-white font-bold hover:opacity-75 cursor-pointer block duration-200 my-2 md:my-0`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ShortenedLink;
