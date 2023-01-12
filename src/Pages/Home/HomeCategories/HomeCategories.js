import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from './../../../components/Loading';
import CategoryCard from './CategoryCard';

const HomeCategories = () => {
    
    const {data : products = [], isLoading} = useQuery({
        queryKey : ['products'],
        queryFn : async () => {
          const res = await fetch('http://localhost:5000/products');
          const data = await res.json();
          return data;
        }
  });
  if(isLoading)
  {
    return <Loading></Loading>
  }
  
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 mt-5 rounded-xl">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Mobile Brands For You
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              MobileHunt is offering the best 2nd hand mobile phone. Are you want
              to know 2nd hand and used mobile prices in Bangladesh? You land in
              the right place.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {products.map((category) => (
              <CategoryCard
                key={category._id}
                category={category}
              ></CategoryCard>
            ))}
          </div>
        </div>
      </section>
        </div>
    );
};

export default HomeCategories;