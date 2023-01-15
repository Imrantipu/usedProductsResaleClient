import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "../../../components/Loading";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const AllSellers = () => {
  const [deletingSellers, setDeletingSellers] = useState(null);

  const closeModal = () => {
    setDeletingSellers(null);
  };
  const {
    data: sellers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://assignment-12-server-wheat.vercel.app/allsellers"
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteSeller = (seller) => {
    fetch(
      `https://assignment-12-server-wheat.vercel.app/allsellers/${seller._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Seller ${seller.name} deleted successfully`);
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-3xl mt-5">You have {sellers?.length} sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full mt-5">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <label
                    onClick={() => setDeletingSellers(buyer)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingSellers && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingSellers.name}. It cannot be undone.`}
          successAction={handleDeleteSeller}
          successButtonName="Delete"
          modalData={deletingSellers}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllSellers;
