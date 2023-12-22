import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllTasks = () => {
  const axiosPublic = useAxiosPublic();

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      return res.data;
    },
  });

  const handlerDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to deleted Task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/task/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Task has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-zinc-600 text-white text-[20px]">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Date</th>
                <th>Update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks?.map((task, idx) => (
                <tr
                  key={task._id}
                  className="bg-base-200 border-2 border-green-500"
                >
                  <th> {idx + 1} </th>
                  <td>{task?.title}</td>
                  <td>{task?.priority}</td>
                  <td>{task?.date}</td>
                  <td>
                    {" "}
                    <Link to={`/dashboard/update/${task?._id}`}>
                      <button className="btn btn-sm btn-success text-white">
                        Update
                      </button>
                    </Link>{" "}
                  </td>
                  <td>
                    <button
                      onClick={() => handlerDeleteUser(task?._id)}
                      className="btn btn-ghost btn-lg text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
