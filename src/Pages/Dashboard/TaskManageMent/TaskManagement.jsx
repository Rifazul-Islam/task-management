import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";

const TaskManagement = () => {
  const axiosPublic = useAxiosPublic();

  const { data: dropData = [] } = useQuery({
    queryKey: ["dropData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      return res.data;
    },
  });
  return (
    <div className="grid lg:grid-cols-3 gap-3 pl-2 ">
      <div className="border-4 p-2 ">
        <h1 className="text-2xl font-bold"> To Do List</h1>
        {dropData?.map((item) => (
          <>
            {" "}
            <div
              key={item._id}
              className="border-2 cursor-pointer pt-2 p-2 mt-3 "
            >
              {" "}
              <h1>
                {" "}
                <span className="font-bold">Title</span>: {item?.title}
              </h1>
              <h1>
                {" "}
                <span className="font-bold">Date</span>: {item?.date}
              </h1>
              <p>
                {" "}
                <span className="font-bold">Priority</span>: {item?.priority}
              </p>{" "}
            </div>
          </>
        ))}
      </div>
      <div className="border-4 p-2 ">
        <h1 className="text-2xl font-bold"> OnGoing List</h1>
      </div>
      <div className="border-4 p-2 ">
        <h1 className="text-2xl font-bold"> Completed List</h1>
      </div>
    </div>
  );
};

export default TaskManagement;
