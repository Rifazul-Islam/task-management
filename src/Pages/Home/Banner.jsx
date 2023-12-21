import image from "../../assets/task.jpg";

import { FaLocationArrow } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-[#BFFEEA] h-screen">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="hero-overlay  bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <button className="btn hover:text-white  bg-[#4bd3a8] text-xl hover:btn-secondary px-14 py-1 border-none ">
              Lets Explore <FaLocationArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
