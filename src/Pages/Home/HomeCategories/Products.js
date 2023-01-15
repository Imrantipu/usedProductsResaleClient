import { useLoaderData } from "react-router-dom";
import { useState } from 'react';
import ProductsCard from "./ProductsCard";
import BookingModal from "../../../components/BookingModal";

const Products = () => {

    const productsitems = useLoaderData();

    const [singleProduct, setSingleProduct] = useState(null);

    const items = productsitems.category_items;
   
   
    return (
        <section>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 m-8 justify-center'>
            {
                items.map((item,i) => <ProductsCard 
                    key={i}
                    item={item}
                    setSingleProduct = {setSingleProduct}
                ></ProductsCard>)
            }
            </div>
           { 
            singleProduct &&
           <BookingModal 
            singleProduct = {singleProduct}
            setSingleProduct = {setSingleProduct}
            ></BookingModal> }
        </section>
    );
};

export default Products;