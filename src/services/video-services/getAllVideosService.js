import axios from "axios";

export const getAllVideosService = async () => {
  return await axios.get("/api/videos");
};
