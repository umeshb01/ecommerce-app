import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const[latestProduct,setLatestProduct]=useState([]);

    useEffect(()=>{
      setLatestProduct(products.slice(0,7))

    },[])

  return (
    <div className=' my-10'>
      <div className=' text-center text-3xl py-10'>
        <Title  text1={'LATEST'} text2={'COLLECTION'}/>
        <p className=' text-gray-600 w-3/4 m-auto text-xs  sm:text-sm md:text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa possimus quasi earum dolor. Cupiditate asperiores deleniti quis magnam ab?</p>
         

      </div>
      {/* Rendering products */}
      <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 lg:grid-cols-5'>
        {
          latestProduct.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }

      </div>
    
        
    </div>
  )
}

export default LatestCollection;