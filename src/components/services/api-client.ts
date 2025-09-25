
import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5c39d05bed864a51b20f0ed9ae76114c",
  },
});
