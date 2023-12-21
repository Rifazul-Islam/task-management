import { useContext } from "react";
import img from "../../../assets/sea (2).jpg";
import { AuthContext } from "../../../Provider/AuthProvider";
const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        {" "}
        <img className="h-[200px] w-full  " src={img} alt="" />{" "}
      </div>
      <div className="avatar flex justify-center -mt-14 ">
        {user?.email ? (
          <div className="w-24  rounded-full  bg-white ">
            {" "}
            <img src={user?.photoURL} alt="" />{" "}
          </div>
        ) : (
          " "
        )}
      </div>

      <h1 className="text-2xl font-bold text-center italic text-blue-500">
        {" "}
        {user?.email ? <h1> {user?.displayName}</h1> : " "}
      </h1>
    </div>
  );
};

export default Profile;
