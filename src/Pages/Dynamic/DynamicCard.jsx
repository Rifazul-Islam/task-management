const DynamicCard = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-3">
      <div className=" flex-grow">
        <img
          className=""
          src="https://navigatemc.com/wp-content/uploads/2019/02/dreamstime_s_12025421.jpg"
          alt=""
        />
      </div>
      <div className="">
        <h2 className="p-2 text-3xl font-bold text-blue-600">
          {" "}
          Developer Benefit{" "}
        </h2>
        <p className="text-[20px] text-zinc-700 lg:w-[700px] pt-3 p-2">
          A developer will get various benefits in this task management
          platform. A developer can write various tasks for his company.to do
          list from ongoing list completed drag-and-drop method used.{" "}
        </p>
      </div>
    </div>
  );
};

export default DynamicCard;
