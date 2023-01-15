import React from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {signIn, googleProviderLogin} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleProviderLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { to: "/" }, { replace: true });
      })
      .catch((error) => console.error(error));
  };


  const handleLogin = data => 
  {
    setLoginError('');

    signIn(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log("get the user from firebase", user);
      navigate(from, { replace: true });
    })
    .catch(error => {
      console.error(error.message);
      setLoginError(error.message);
    });
  }

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center">Please Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Email</span> </label>
            <input type="email" className="input input-bordered w-full max-w-xs" {...register("email", {required : "Email Address is required" })}/>
            {errors.email && <p className="text-error">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Password</span> </label>
            <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {required : 'Password is required', minLength:{value : 6, message:'Password should be six characters or long'}
          })}/>
            {errors.password && <p className="text-error">{errors.password?.message}</p>}
            {loginError && <p className="text-error">{loginError}</p>}
            <label className="label"> <span className="label-text">Forget Password?</span> </label>
          </div>
          <input className="btn w-full btn-primary" type="submit" value='Login'/>
        </form>
        <p>New to MobileHunt<Link className="text-sky-500" to='/signup'> Create new account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent w-full"> <FcGoogle></FcGoogle> &nbsp;&nbsp; LOGIN WITH GOOGLE</button>
      </div>
    </div>
  );
};
export default Login;
