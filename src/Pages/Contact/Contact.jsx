import toast from "react-hot-toast";
import { GrWaypoint } from "react-icons/gr";

const Contact = () => {
  const handlerInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const mess = form.message.value;
    console.log(name, email, mess);
    toast.success("Your Send Success");
    form.reset();
  };
  return (
    <div className="my-14">
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-easing="linear"
      >
        <h1 className="text-center text-blue-600 text-3xl font-bold">
          {" "}
          Contact Me
        </h1>
        <p className="mb-9 text-3xl font-bold text-center text-red-400">
          {" "}
          ...........................
        </p>
      </div>

      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="hero-content lg:w-1/3 mx-auto "
      >
        <div className="card shrink-0 w-full  shadow-2xl bg-[#323A46]">
          <form onSubmit={handlerInfo} className="card-body">
            <h1 className="text-center text-3xl font-bold text-white">
              {" "}
              Contact form
            </h1>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered bg-[#111827] text-white "
                name="name"
                required
              />
            </div>

            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered bg-[#111827] text-white"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Message</span>
              </label>
              <textarea
                type="text"
                className="input  input-bordered bg-[#111827] text-white pt-5 h-20"
                placeholder="Your Message"
                name="message"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#60A5FA] border-none hover:bg-[#307bd7] ">
                Send Message <GrWaypoint />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
