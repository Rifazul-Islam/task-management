import useCheck from "../../hook/useCheck";
import useUserBenefits from "../../hook/useUserBenefits";

const Dynamic = () => {
  const [benefits] = useUserBenefits();
  const { checkBenefit } = useCheck();

  const allBenefit = benefits.find(
    (items) => items?.category === checkBenefit.category
  );

  const { name, img, des } = allBenefit || {};

  return (
    <div className="my-10">
      <h2 className="text-center text-3xl font-bold my-8"> Dynamic Section</h2>

      {allBenefit?.name?.length > 0 ? (
        <>
          {" "}
          <div className="flex lg:flex-row flex-col gap-3">
            <div className=" flex-grow">
              <img className=" rounded-lg" src={img} alt="" />
            </div>
            <div className="">
              <h2 className="px-2 text-3xl font-bold text-blue-600">{name}</h2>
              <p className="text-[20px] text-zinc-700 lg:w-[700px] pt-3 p-2">
                {des}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="flex lg:flex-row flex-col gap-3">
            <div className=" flex-grow">
              <img
                className="rounded-lg"
                src="https://projectsly.com/images/task-management-app-screenshot-1.png?v=1691124479409199525"
                alt=""
              />
            </div>
            <div className="">
              <h2 className="p-2 text-3xl font-bold text-blue-600">
                {" "}
                All Benefit Show{" "}
              </h2>
              <p className="text-[20px] text-zinc-700 lg:w-[700px] pt-3 p-2">
                Please Login First
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dynamic;
