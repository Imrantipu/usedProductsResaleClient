import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";


const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  
  return (
    <div>
      <div className="navbar bg-base-300 rounded-xl ">
        {/* navbar start */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* navbar middle for full view */}
              <li>
                <button>
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <Link className="link link-hover" to="/">
                    Home
                  </Link>
                </button>
              </li>
              <li>
                <Link className="link link-hover" to="/blog">
                  Blog
                </Link>
              </li>
              {user?.uid ? (
                <>
                  <li>
                    <Link className="link link-hover" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <button onClick={handleLogOut}>
                      <Link className="link link-hover" to="#">
                        Sign out
                      </Link>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="link link-hover" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="link link-hover" to="/signup">
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
            MobileHunt
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button>
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <Link className="link link-hover" to="/">
                  Home
                </Link>
              </button>
            </li>
            <li>
              <Link className="link link-hover" to="/blog">
                Blog
              </Link>
            </li>
            {user?.uid ? (
                <>
                  <li>
                    <Link className="link link-hover" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <button onClick={handleLogOut}>
                      <Link className="link link-hover" to="#">
                        Sign out
                      </Link>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="link link-hover" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="link link-hover" to="/signup">
                      SignUp
                    </Link>
                  </li>
                </>
              )}
          </ul>
        </div>
        <div className="navbar-end">
        <label htmlFor="dashboard-drawer"  tabIndex={0} className="btn btn-ghost  lg:hidden">
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
            </label>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
