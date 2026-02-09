import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products,delivery_fee,currency} =useContext(ShopContext);
    const[bestseller,setBestseller]=useState([])
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller))
        setBestseller(bestProduct.slice(0,5));

    },[])

  return (
    <div className=' my-10' >
        <div className=' text-center py-10 text-3xl'>
            <Title text1={"BEST"} text2={"SELLER"} />

            <p className=' w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, consectetur.</p>

        </div>
        <div className=' grid grid-cols grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            { bestseller.map((item,index)=>(
                <ProductItem key={index} id={item.id} name={item.name} price={item.price } image={item.image}/>
            ))

            }

        </div>

    </div>
  )
}

export default BestSeller