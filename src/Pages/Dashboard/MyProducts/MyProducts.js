
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from './../../../components/Loading';
import ConfirmationModal from './../../Shared/ConfirmationModal/ConfirmationModal';

const  MyProducts= () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }
    const { data: products, isLoading, refetch } = useQuery({
       
        queryKey: ['sellerproducts'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/sellerproducts', {
                    //  headers: {
                    //      authorization: `bearer ${localStorage.getItem('accessToken')}`
                    //  }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    console.log('Hello pro',products);

    
    const handleDeleteDoctor = product => {
        fetch(`http://localhost:5000/sellerproducts/${product._id}`, {
            method: 'DELETE', 
        
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Product ${product.name} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl">You have {products?.length} products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Year Of Purchase</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={product.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.purchase}</td>
                                <td>
                                    <label className="btn btn-sm btn-error"></label>
                                </td>
                                <td>
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                    successAction = {handleDeleteDoctor}
                    successButtonName="Delete"
                    modalData = {deletingProduct}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;