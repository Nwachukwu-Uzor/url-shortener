import { useContext, useState } from "react";
import LinkContext from "../context/LinkContext";

import { PulseLoader } from "react-spinners";

const LinkSubmit = () => {
  const [link, setLink] = useState("");
  const [linkIsValid, setLinkIsValid] = useState(false);

  const { loading, handleShortenedLink, links, error } =
    useContext(LinkContext);

  const handleChange = (e) => {
    setLinkIsValid(false);
    setLink(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !link.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
      )
    ) {
      setLinkIsValid(true);
      return;
    }

    await handleShortenedLink(link);

    if (!loading) {
      setLink("");
    }
  };
  return (
    <section className="translate-y-[50%]">
      <div className="w-full max-w-[1240px] mx-auto py-5 bg-[#3a3053] flex items-center h-min-[40vh] md:rounded-lg">
        <form
          className="w-full grid grid-cols-1 md:grid-cols-5 gap-5 justify-between items-center px-5 md:px-12 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Shorten a link here..."
            className={`p-3 rounded-md focus-within:ring ring-[#27d3d6] w-full md:col-span-4 ${
              linkIsValid && "ring ring-red-600"
            }`}
            value={link}
            onChange={handleChange}
          />
          <button className="p-3 bg-[#27d3d6] rounded-md text-white font-bold hover:opacity-75 cursor-pointer w-full block">
            {loading ? <PulseLoader color="#fff" /> : "Shorten It!"}
          </button>
          <p
            className={`text-red-500 text-sm font-bold ${
              linkIsValid ? "opacity-100" : "opacity-0"
            } duration-300`}
          >
            Please enter a valid link
          </p>
        </form>
      </div>
    </section>
  );
};

export default LinkSubmit;
