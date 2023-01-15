import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "./../../Pages/Home/Home/Home";
import Products from "./../../Pages/Home/HomeCategories/Products";
import SignUp from "./../../Pages/SignUp/SignUp";
import Blog from "./../../Pages/Blog/Blog";
import Login from "./../../Pages/Login/Login";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyOrders from "./../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "./../../Pages/Dashboard/MyProducts/MyProducts";
import AddProduct from "./../../Pages/Dashboard/AddProduct/AddProduct";
import AllByers from "./../../Pages/Dashboard/AllBuyers/AllByers";
import AllSellers from "./../../Pages/Dashboard/AllSellers/AllSellers";
import Error from "./../../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-12-server-wheat.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },

      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllByers></AllByers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);
