import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useCheck = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const { data: checkBenefit = {}, isPending: isAdminLoading } = useQuery({
    enabled: !loading && Boolean(user?.email),

    queryKey: ["checkBenefit", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return { checkBenefit };
};

export default useCheck;
