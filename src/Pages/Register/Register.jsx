import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hook/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { newUserCreate, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    if (data.category === "Your Profession Name") {
      return toast.error("Please Select Your Profession Name");
    }
    newUserCreate(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("New User Create Successfully");
        updateUserProfile(data.name, data.photoURL).then(() => {
          toast.success("Update Your Name Successfully");

          const userInfo = {
            name: data?.name,
            email: data?.email,
            category: data?.category,
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              toast.success("Send Your Information in MongoDB");
            }
          });
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero text-center">
          <div className="text-center "></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-center pt-2 font-bold border-b-2">
                {" "}
                Register Now
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="photo Url"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-500">photo is required</span>
                )}
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-[16px]">
                    {" "}
                    Your Profession Name
                  </span>
                </label>
                <label className="input-group">
                  <select
                    name="category"
                    {...register("category", { required: true })}
                    className="select select-bordered w-full"
                    required
                  >
                    <option defaultValue={"Your Profession Name"}>
                      Your Profession Name{" "}
                    </option>
                    <option>Developers</option>
                    <option>Corporate</option>
                    <option>Bankers</option>
                  </select>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p>
              {" "}
              Have an account please{" "}
              <Link className="text-red-500" to="/login">
                Login Page{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
