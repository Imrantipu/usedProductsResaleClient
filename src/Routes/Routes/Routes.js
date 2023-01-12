import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/HomeCategories/Products";
import Login from "../../Pages/Login/Login";

export const router = createBrowserRouter([
     
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: "/products/:id",
                element: <Products></Products>,
                loader: ({ params }) =>
                  fetch(`http://localhost:5000/products/${params.id}`),
              },
              
              {
                path:'/blog',
                element:<Blog></Blog>
              },
              {
                path: "/login",
                element: <Login></Login>,
              },
        ]

    }

])