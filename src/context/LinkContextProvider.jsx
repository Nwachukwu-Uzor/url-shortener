import axios from "axios";
import React, { useState } from "react";
import LinkContext from "./LinkContext";

const initLinkData = {
  shortLink: "",
  originalLink: "",
};

const LinkContextProvider = ({ children }) => {
  const [links, setLinks] = useState(initLinkData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLinkSearch = async (url) => {
    try {
      setLoading(true);
      setLinks(initLinkData);
      const { data } = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html`
      );
      setLinks({
        shortLink: data.result["full_short_link"],
        originalLink: url,
      });
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinkContext.Provider
      value={{
        links,
        loading,
        error,
        handleShortenedLink: handleLinkSearch,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export default LinkContextProvider;
