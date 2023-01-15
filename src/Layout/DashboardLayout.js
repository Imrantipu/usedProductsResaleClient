// import { useContext } from "react";
// import { Outlet } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthProvider";
// import useAdmin from "../Hooks/useAdmin";
// import useSeller from "../Hooks/useSeller";
// import { Link } from "react-router-dom";
// import Header from "../Pages/Shared/Header/Header";
import React from 'react';
// import { useContext } from "react";
import { Link, Outlet } from 'react-router-dom';
// import { AuthContext } from "../contexts/AuthProvider";
import Header from '../Pages/Shared/Header/Header';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import useSeller from '../Hooks/useSeller';
import useAdmin from '../Hooks/useAdmin';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
       <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
              {!isSeller && !isAdmin && (
              <li>
                <Link to="/dashboard/myorders">My Orders</Link>
              </li>
            )}
                {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproduct">My Products</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
              </>
            )}
            {/* {!isSeller && !isAdmin && (
              <li>
                <Link to="/dashboard/myorders">My Orders</Link>
              </li>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproduct">My Products</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
