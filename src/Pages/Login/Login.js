import { useForm } from "react-hook-form";

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  

  


  
    
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
          <input className="btn w-full text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit" value='Login'/>
        </form>
        <p>New to Computers Hub?<Link className="text-sky-400" to='/signup'> Create new account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent w-full"> <FcGoogle></FcGoogle> &nbsp;&nbsp; LOGIN WITH GOOGLE</button>
      </div>
    </div>
  );
};
export default Login;
