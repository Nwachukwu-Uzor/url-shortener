import React, { useContext } from "react";
import LinkContext from "../context/linkContext";
import ShortenedLink from "./ShortenedLink";

const Card = ({ icon, title, content, className }) => (
  <div
    className={`bg-white rounded-lg shadow-md px-5 py-10 relative z-20 ${className}`}
  >
    <div
      className={`bg-[#3a3053] text-white h-[50px] w-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center text-xl md:text-3xl rounded-full absolute top-0 left-50% translate-x-[50%] md:translate-x-0 md:left-5 translate-y-[-50%]`}
    >
      <ion-icon name={icon}></ion-icon>
    </div>
    <h1 className="text-black font-bold text-xl md:text-2xl">{title}</h1>
    <p>{content}</p>
  </div>
);

const Advanced = () => {
  const { loading, links, error } = useContext(LinkContext);
  return (
    <section className="pt-40 md:pt-20 bg-gray-100">
      {!loading && !error && links.shortLink.trim().length > 0 && (
        <ShortenedLink
          shortLink={links.shortLink}
          originalLink={links.originalLink}
        />
      )}
      <h1 className="text-black text-2xl md:text-3xl font-bold text-center px-4">
        Advanced Statistics
      </h1>
      <p className="text-gray-600 leading-loose text-center my-5 px-4">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="w-full max-w-[1240px] px-4 mx-auto py-10 md:py-20 grid grid-cols-1 justify-between items-stretch gap-12 md:grid-cols-3 relative">
        <Card
          icon="bar-chart-sharp"
          title="Brand Recognition"
          content="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
        />
        <Card
          icon="compass"
          title="Detailed Records"
          content="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions."
          className="md:translate-y-[15%]"
        />
        <Card
          icon="brush"
          title="Fully Customizable"
          content="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."
          className="md:translate-y-[30%]"
        />
        <div className="hidden md:block absolute h-[5px] z-10 left-0 right-0 bg-[#27d3d6] top-[50%] mx-4 translate-y-[50%]"></div>
        <div className="md:hidden absolute w-[5px] z-10 top-0 bottom-0 bg-[#27d3d6] left-[50%] mx-4 translate-x-[50%] my-10"></div>
      </div>
    </section>
  );
};

export default Advanced;
