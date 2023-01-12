import React from 'react';
import { Link } from "react-router-dom";


const CategoryCard = ({ category }) => {
   const { _id, name, description, img } = category;
   
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl h-full">
  <figure className="px-10 pt-10 h-64 ">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <Link to={`/products/${_id}`}><button className="btn btn-primary">See More</button></Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default CategoryCard;
