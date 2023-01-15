import React from "react";
import { Link } from "react-router-dom";
import pic from "../../Assets/images/error.png";
const Error = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={pic}
          alt="Error Pic"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-error text-9xl">OOPS!</h2>
        <h3 className="font-bold text-2xl">404-PAGE NOT FOUND</h3>
        <p>The page you are looking for might have been removed <br /> had it's name changed or is temporarily unavailable.</p> 
        <div className="card-actions">
          <Link to='/'><button className="btn btn-primary">GO TO HOMEPAGE</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
