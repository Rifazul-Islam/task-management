import image from "../../assets/task.jpg";
const Banner = () => {
  return (
    <div className="bg-[#BFFEEA] h-screen">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <button className="btn text-white bg-transparent px-14 py-1 border-4 border-blue-600 font-bold text-2xl">
              Lets Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
