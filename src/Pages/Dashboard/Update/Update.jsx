import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const Update = () => {
  const task = useLoaderData();

  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const onSubmit = async (data) => {
    //
    const tasks = {
      title: data?.title,
      email: email,
      priority: data.priority,
      des: data.des,
      date: data.date,
    };

    axiosPublic.put(`/edit/${task._id}`, tasks).then((res) => {
      if (res.data) {
        toast.success("Update Your Task");
        reset();
      }
    });
  };
  return (
    <div className="lg:w-1/2 mx-auto border p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-bold text-center py-4"> Task Add </h1>{" "}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Task Title</span>
          </label>
          <input
            type="text"
            defaultValue={task?.title}
            {...register("title", { required: true })}
            placeholder="Please Task Title"
            className="input input-bordered w-full"
          />
        </div>
        {/**Category System */}
        <div className="flex gap-6">
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select
              name="priority"
              defaultValue={task?.priority}
              {...register("priority", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="Please insert priority">
                Please insert priority
              </option>
              <option value="low">low</option>
              <option value="moderate">moderate</option>
              <option value="high">high</option>
            </select>
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              defaultValue={task?.date}
              {...register("date", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Task Description</span>
          </label>
          <textarea
            defaultValue={task?.des}
            {...register("des", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Please Description write"
          ></textarea>
        </div>
        <button className="btn btn-secondary mt-2">UpdateTask</button>
      </form>
    </div>
  );
};

export default Update;
