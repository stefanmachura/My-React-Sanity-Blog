import sanityClient from "@sanity/client";

const API_KEY = process.env.REACT_APP_API_KEY;

export default sanityClient({
  projectId: API_KEY,
  dataset: "production",
  useCdn: true,
});
