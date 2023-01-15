import React from "react";

const ProductsCard = ({ item, setSingleProduct }) => {

  const {
    image_url,
    name,
    location,
    resalePrice,
    originalPrice,
    yearOfUse,
    date,
  } = item;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">ProductName : {name}</h2>
          <p> Location : {location}</p>
          <p>ResalePrice : {resalePrice}</p>
          <p>OriginalPrice : {originalPrice}</p>
          <p>YearOfUse : {yearOfUse}</p>
          <p>Date : {date}</p>
          <div className="card-actions justify-end">
            
              <label htmlFor="booking-modal" onClick={()=>setSingleProduct(item)} className="btn btn-primary">Book Now</label>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
