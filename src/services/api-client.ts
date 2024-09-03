import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "036c77cb74c948f183e9034a6da7c37b",
  },
});
