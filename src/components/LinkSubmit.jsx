import React, { useState } from "react";

const LinkSubmit = () => {
  const [link, setLink] = useState("");

  const handleChange = (e) => setLink(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="translate-y-[50%]">
      <form className="w-full max-w-[1240px] mx-auto bg-[#3a3053] py-10 grid grid-cols-1 md:grid-cols-5 gap-5 justify-between items-center px-5 md:px-12 rounded-lg">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="p-3 rounded-md focus-within:ring ring-[#27d3d6] w-full md:col-span-4"
          value={link}
          onChange={handleChange}
          required
        />
        <button className="p-3 bg-[#27d3d6] rounded-md text-white font-bold hover:opacity-75 cursor-pointer w-full block">
          Shorten It!
        </button>
      </form>
    </section>
  );
};

export default LinkSubmit;
