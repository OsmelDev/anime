import { api } from "@/axiosIntance/axios.intace";
import { isAxiosError } from "@/utils/error";
import { Filter } from "@mui/icons-material";
import { toast } from "react-toastify";

export const services = () => {
  const getList = async () => {
    try {
      const { data } = await api.post("/search/by-filter?order=rating");
      return data;
    } catch (error) {
      const { isError, message } = isAxiosError(error);

      if (isError) {
        toast.error(message);
      }
    }
  };

  const getSearchBySlug = async (slug: string) => {
    try {
      const { data } = await api.get(`/anime/${slug}`);
      return data;
    } catch (error) {
      const { isError, message } = isAxiosError(error);

      if (isError) {
        // toast.error(message);
        console.log(message);
      }
    }
  };

  const getEpisodesBySlug = async (slug: string) => {
    try {
      const { data } = await api.get(`/anime/episode/${slug}`);
      return data;
    } catch (error) {
      const { isError, message } = isAxiosError(error);

      if (isError) {
        toast.error(message);
      }
    }
  };
  const getListByFilter = async (filter: string = "default") => {
    try {
      const { data } = await api.post(`/search/by-filter?order=${filter}`);
      return data;
    } catch (error) {
      const { isError, message } = isAxiosError(error);

      if (isError) {
        toast.error(message);
      }
    }
  };
  return { getList, getSearchBySlug, getEpisodesBySlug, getListByFilter };
};
