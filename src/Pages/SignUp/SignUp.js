import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { useState } from "react";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log("sign up pase user created", user);
        toast.success("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.category);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  const saveUser = (name, email, category) => {
    const user = { name, email, category };
    fetch("https://assignment-12-server-wheat.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center">Please Register Now</h2>
        <form onSubmit={handleSubmit(handleSignUp)} className="mt-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>{" "}
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-error">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>{" "}
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password at least six characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, lowercase  and a number",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-error">{errors.password.message}</p>
            )}
          </div>
          <div form-control w-full max-w-xs mt-5>
            <label className="label">
              {" "}
              <span className="label-text">Select Category</span>
            </label>
            <select
              {...register("category", {
                message: "Please select seller or buyer",
              })}
              className="input input-bordered w-full"
            >
              <option value="buyer" selected>
                Buyer
              </option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <input
            className="btn  mt-5 w-full btn-primary "
            type="submit"
            value="Register"
          />
          {signUpError && <p className="text-error">{signUpError}</p>}
        </form>
        <p>
          Already have an account?
          <Link className="text-sky-500" to="/login">
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
