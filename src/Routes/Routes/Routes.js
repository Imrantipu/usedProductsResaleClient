import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllByers from "../../Pages/Dashboard/AllBuyers/AllByers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/HomeCategories/Products";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";

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
        element: <PrivateRoute><Products></Products></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      
    ],
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
          path: '/dashboard',
          element: <MyOrders></MyOrders>
      },
      {
        path: '/dashboard/addproduct',
        element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
    },
    {
        path: '/dashboard/myproduct',
        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
    },

    {
      path: '/dashboard/allbuyers',
      element: <AdminRoute> <AllByers></AllByers> </AdminRoute>
    },
    {
      path: '/dashboard/allsellers',
      element: <AdminRoute> <AllSellers></AllSellers> </AdminRoute>
    },
    ]
  },
  {
    path:'*',
    element:<Error></Error>
  }
  
]);