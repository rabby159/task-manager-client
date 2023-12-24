import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const {user, logOut} = useAuth();
  const handleSignOut = () => {
    logOut()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };
  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={"/About"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-blue-500 text-white">
        {/* border-b-4 border-b-lime-400 */}
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLink}
              </ul>
            </div>
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navLink}</ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">Task Manager</a>
          </div>
          <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost text-black">
                    {user?.displayName}
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-sm  btn-ghost text-black"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
