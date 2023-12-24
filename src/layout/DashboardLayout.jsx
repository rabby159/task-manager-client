import { NavLink, Outlet } from "react-router-dom";
import {
  FaArrowRightFromBracket,
  FaCcAmazonPay,
  FaHouseMedical,
  FaSackDollar,
  FaShop,
} from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";

const DashboardLayout = () => {
  const { logOut } = useAuth();
  const handleSignOut = () => {
    logOut()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };

  


  return (
    <>
    <div className="flex gap-8">
      <div className="w-80 min-h-screen bg-blue-500">
        <div>
            <h2 className="text-white text-center mt-5">TaskBoard</h2> 
        </div>
        <ul className="menu p-4 text-base font-medium text-white divide-y divide-blue-200">
            <div>
              <li>
                <NavLink to="/dashboard/addTask">
                  <FaShop />
                  Add Task
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/toDoing">
                  <FaSackDollar />
                  To Doing
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/completeTask">
                  <FaCcAmazonPay /> Complete Task
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allTask">
                  <FaCcAmazonPay /> All Task
                </NavLink>
              </li>
            </div>
          <div>
            <li>
              <NavLink to="/">
                <FaHouseMedical></FaHouseMedical> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={handleSignOut}>
              <FaArrowRightFromBracket /> LogOut
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
      <div className="flex-1 mt-10 text-2xl font-semibold p-16">
        <Outlet></Outlet>
      </div>
    </div>
    <div className="-mt-5">
    </div>
    </>
  );
};

export default DashboardLayout;
