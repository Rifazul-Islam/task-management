import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUserBenefits = () => {
  const axiosPublic = useAxiosPublic();

  const { data: benefits = [], refetch } = useQuery({
    queryKey: ["benefits"],
    queryFn: async () => {
      const res = await axiosPublic.get("/benefits");
      return res.data;
    },
  });

  return [benefits, refetch];
};

export default useUserBenefits;
