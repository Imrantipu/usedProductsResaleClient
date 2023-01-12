
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../components/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';


const  AllByers= () => {
    const [deletingBuyers, setDeletingBuyers] = useState(null);

    const closeModal = () => {
        setDeletingBuyers(null);
    }
    const { data: buyers, isLoading, refetch } = useQuery({
       
        queryKey: ['allbuyers'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/allbuyers', {
                
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    

    
    const handleDeleteBuyer = buyer => {
        fetch(`http://localhost:5000/allbuyers/${buyer._id}`, {
            method: 'DELETE', 
        
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Buyer ${buyer.name} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl mt-5">You have {buyers?.length} buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full mt-5">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>
                                    <label onClick={() => setDeletingBuyers(buyer)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingBuyers && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingBuyers.name}. It cannot be undone.`}
                    successAction = {handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData = {deletingBuyers}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllByers;