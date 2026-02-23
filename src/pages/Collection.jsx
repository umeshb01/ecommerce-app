import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { ChevronRight } from 'lucide-react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)  
  const [filterProducts,setFilterProducts]= useState([]);
  useEffect(()=>{
    setFilterProducts(products)
  })
  return (
    <div className=' flex flex-col gap-1 sm:flex-row sm:gap-10 pt-15 border-t'>
      {/* filter options */}
      <div className=' min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='  flex items-center text-2xl cursor-pointer gap-1'>FILTERS
          <ChevronRight className={`h-4 sm:hidden ${showFilter ? 'rotate-90' : ''}`}/>
        </p>
        {/* category filter */}
        <div className={`border border-gray-500 mt-6 py-3 pl-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className=' mb-3 text-sm font-medium'>CATEGORY</p>
          <div className=' flex flex-col gap-2 text-gray-700 font-light'>
            <p className=' flex gap-2'>
              <input className=' w-3' type="checkbox" value={'men'} />Men
            </p>
            <p className=' flex gap-2'>
              <input className=' w-3' type="checkbox" value={'Women'} />Women
            </p>
            <p className=' flex gap-2'>
              <input className=' w-3' type="checkbox" value={'Kids'} />Kids
            </p>

          </div>





        </div>
        {/* subcategory filter */}
        <div className={`border border-gray-500 mt-6 py-3 pl-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className=' mb-3 text-sm font-medium'>TYPE</p>
          <div className=' flex flex-col gap-2 text-gray-700 font-light'>
            <p className=' flex gap-2'>
              <input className=' w-3' type="checkbox" value={'Topwear'} />Topwear
            </p>
            <p className=' flex gap-2'>
              <input className=' w-3' type="checkbox" value={'Bottomwear'} />Bottomwear
            </p>
            <p className=' flex gap-2'>
              <input className=' w-3' type="checkbox" value={'Winterwear'} />Winterwear
            </p>

          </div>





        </div>

      </div> 
      {/* Right Side */}
      <div className='flex-1'>
        <div className=' flex justify-between  mb-4 text-base sm:text-2xl'>
          <Title text1={'All'}  text2={'COLLECTION'}/>
          {/* product sort */}
          <select className=' border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">sort by:relevant</option>
            <option value="low-high">sort by:low-high</option>
            <option value="high-low">sort by:high-low</option>

          </select>

        </div>
        {/* map products */}
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
          {filterProducts.map((item,index)=>(
            
            <ProductItem key={index} name={item.name} image={item.image} price={item.price}/>
          ))}

        </div>

      </div>
    </div>
  )
}

export default Collection