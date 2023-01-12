
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const AddProduct = () => {
  const {user} = useContext(AuthContext);
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          
          const product = {
            name: data.name,
            email:user.email,
            price:data.price,
            image: imgData.data.url,
            location:data.location,
            condition:data.condition,
            purchase:data.purchase,
            productCategory:data.product,
            mobileNumber:data.mobile,
            description:data.description
          };
          console.log(product);
          fetch("http://localhost:5000/sellerproducts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/myproduct");
            });
        }
      });
  };

  return (
    <div className="w-full p-7">
      <h2 className="text-4xl mb-5">Add A Product</h2>
      <form className="grid gap-6 justify-between grid-cols-1 md:grid-cols-2" onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Product Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-error">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            {...register("price", {
              required: "Price is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.price && <p className="text-error">{errors.price.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: "Location is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-error">{errors.location.message}</p>
          )}
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className="label">
            {" "}
            <span className="label-text">Condition Type</span>
          </label>
          <select
            {...register("condition", {
              message: "Please select one",
            })}
            className="input input-bordered w-full"
          >
            <option value="excellent" selected>
              Excellent
            </option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Year Of Purchase</span>
          </label>
          <input
            type="text"
            {...register("purchase", {
              required: "Year is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.purchase && (
            <p className="text-error">{errors.purchase.message}</p>
          )}
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className="label">
            {" "}
            <span className="label-text">Product Category</span>
          </label>
          <select
            {...register("product", {
              message: "Please select product category",
            })}
            className="input input-bordered w-full"
          >
            <option value="microsoft" selected>Microsoft</option>
            <option value="hp">HP</option>
            <option value="dell">DELL</option>
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-error">{errors.img.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="text"
            {...register("mobile", {
              required: "Mobile number is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.mobile && <p className="text-error">{errors.mobile.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
        <label className="label">
            {" "}
            <span className="label-text">Message</span>
          </label>
        <textarea 
        {...register("description", {
          required: "Description is Required",
        })}
        className="textarea textarea-bordered" placeholder="Product Description"></textarea>
        </div>
        <input
         className="btn form-control w-full max-w-xs text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
