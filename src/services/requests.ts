import { api } from "@/axiosIntance/axios.intace";

export const services = () => {
  const getList = async () => {
    try {
      const { data } = await api.post("/search/by-filter?order=default");
      return data;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getSearchBySlug = async (slug: string) => {
    try {
      const { data } = await api.get(`/anime/${slug}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getEpisodesBySlug = async (slug: string) => {
    try {
      const { data } = await api.get(`/anime/episode/${slug}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getList, getSearchBySlug, getEpisodesBySlug };
};
