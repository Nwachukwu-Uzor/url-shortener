import { createContext } from "react";

const LinkContext = createContext({
  loading: false,
  error: false,
  links: {},
  handleShortenedLink: async (url) => {},
});

export default LinkContext;
