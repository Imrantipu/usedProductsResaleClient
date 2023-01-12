
import { useContext } from 'react';
import { AuthContext } from './../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({singleProduct, setSingleProduct}) => {
    const {name, resalePrice} = singleProduct;
    const {user} = useContext(AuthContext);

      const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const resalePrice = form.price.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;

        const booking = {
           userName : userName,
           email : email,
           itemName : itemName,
           resalePrice : resalePrice,
           phone : phone,
           meetingLocation : meetingLocation
        }
       fetch('http://localhost:5000/bookings', {
        method : 'POST',
        headers :{
          'content-type' : 'application/json',
          
        },
        body : JSON.stringify(booking),
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.acknowledged)
        {
          setSingleProduct(null);
          toast.success('Successfully booked');
        }
      });
      }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2"> ✕ </label>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
              <input name="name" type="text" defaultValue= {user?.displayName} placeholder="UserName" className="input input-bordered w-full" readOnly/>
              <input name="email" type="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full" readOnly/>
              <input name="itemName" type="text" placeholder="Item Name" className="input input-bordered w-full" value={name} readOnly/>
              <input name='price' type="text" placeholder="Item Price" className="input input-bordered w-full" value={resalePrice} readOnly/>
              <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required/>
              <input name='meetingLocation' type="text" placeholder="Meeting Location" className="input input-bordered w-full" required/>
              <br/>
              <input className="btn w-full text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
