import React from 'react'
import { Link } from 'react-router-dom'
import milk from "../assets/Images/milk.jpg";
import buttermilk from "../assets/Images/buttermilk.jpg";
import butter from "../assets/Images/butter.jpg";
import dahi from "../assets/Images/dahi.jpg";
import ghee from "../assets/Images/ghee.jpg";
import paneer from "../assets/Images/paneer.jpg";
const Productpage = () => {
  return (
    <div className='bg-white flex flex-col min-h-screen'>

       <div className='m-10 flex gap-10'>
       <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[315px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={milk}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="flex  flex-col  ">
                <div className='my-3 flex gap-10 justify-center items-center'>
                <p className="text-2xl line-clamp-1 font-bold">Milk</p> 
                <p className='text-xl '>Rs.{" "} <span className='text-2xl font-bold text-sky-200 '>250/L</span></p>
                </div>
                <div className='flex justify-evenly gap-[130px]'>
                <button className='bg-sky-200 rounded-md px-3 py-2'>Buy Now</button>
                <button className='bg-sky-100 rounded-md  px-3 py-2'>Add to Cart</button>
                    </div>             
              </div>
       </div>
       <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[315px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={butter}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="flex  flex-col  ">
                <div className='my-3 flex gap-10 justify-center items-center'>
                <p className="text-2xl line-clamp-1 font-bold">Butter</p> 
                <p className='text-xl '>Rs.{" "} <span className='text-2xl font-bold text-sky-200 '>250/L</span></p>
                </div>
                <div className='flex justify-evenly gap-[130px]'>
                <button className='bg-sky-200 rounded-md px-3 py-2'>Buy Now</button>
                <button className='bg-sky-100 rounded-md  px-3 py-2'>Add to Cart</button>
                    </div>             
              </div>
       </div>
       <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[315px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={buttermilk}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="flex  flex-col  ">
                <div className='my-3 flex gap-10 justify-center items-center'>
                <p className="text-2xl line-clamp-1 font-bold">Butter Milk</p> 
                <p className='text-xl '>Rs.{" "} <span className='text-2xl font-bold text-sky-200 '>250/L</span></p>
                </div>
                <div className='flex justify-evenly gap-[130px]'>
                <button className='bg-sky-200 rounded-md px-3 py-2'>Buy Now</button>
                <button className='bg-sky-100 rounded-md  px-3 py-2'>Add to Cart</button>
                    </div>             
              </div>
       </div>
       <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[315px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={ghee}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="flex  flex-col  ">
                <div className='my-3 flex gap-10 justify-center items-center'>
                <p className="text-2xl line-clamp-1 font-bold">Ghee</p> 
                <p className='text-xl '>Rs.{" "} <span className='text-2xl font-bold text-sky-200 '>250/L</span></p>
                </div>
                <div className='flex justify-evenly gap-[130px]'>
                <button className='bg-sky-200 rounded-md px-3 py-2'>Buy Now</button>
                <button className='bg-sky-100 rounded-md  px-3 py-2'>Add to Cart</button>
                    </div>             
              </div>
       </div>
       </div>
       <div className='m-10 flex gap-10'>
       <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[315px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={milk}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="flex  flex-col  ">
                <div className='my-3 flex gap-10 justify-center items-center'>
                <p className="text-2xl line-clamp-1 font-bold">Milk</p> 
                <p className='text-xl '>Rs.{" "} <span className='text-2xl font-bold text-sky-200 '>250/L</span></p>
                </div>
                <div className='flex justify-evenly gap-[130px]'>
                <button className='bg-sky-200 rounded-md px-3 py-2'>Buy Now</button>
                <button className='bg-sky-100 rounded-md  px-3 py-2'>Add to Cart</button>
                    </div>             
              </div>
       </div>
       <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[315px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={ghee}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="flex  flex-col  ">
                <div className='my-3 flex gap-10 justify-center items-center'>
                <p className="text-2xl line-clamp-1 font-bold">Ghee</p> 
                <p className='text-xl '>Rs.{" "} <span className='text-2xl font-bold text-sky-200 '>250/L</span></p>
                </div>
                <div className='flex justify-evenly gap-[130px]'>
                <button className='bg-sky-200 rounded-md px-3 py-2'>Buy Now</button>
                <button className='bg-sky-100 rounded-md  px-3 py-2'>Add to Cart</button>
                    </div>             
              </div>
       </div>
       <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[315px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={paneer}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="flex  flex-col  ">
                <div className='my-3 flex gap-10 justify-center items-center'>
                <p className="text-2xl line-clamp-1 font-bold">Paneer</p> 
                <p className='text-xl '>Rs.{" "} <span className='text-2xl font-bold text-sky-200 '>250/L</span></p>
                </div>
                <div className='flex justify-evenly gap-[130px]'>
                <button className='bg-sky-200 rounded-md px-3 py-2'>Buy Now</button>
                <button className='bg-sky-100 rounded-md  px-3 py-2'>Add to Cart</button>
                    </div>             
              </div>
       </div>
       <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[315px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={dahi}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="flex  flex-col  ">
                <div className='my-3 flex gap-10 justify-center items-center'>
                <p className="text-2xl line-clamp-1 font-bold">Yocurt</p> 
                <p className='text-xl '>Rs.{" "} <span className='text-2xl font-bold text-sky-200 '>20/L</span></p>
                </div>
                <div className='flex justify-evenly gap-[130px]'>
                <button className='bg-sky-200 rounded-md px-3 py-2'>Buy Now</button>
                <button className='bg-sky-100 rounded-md  px-3 py-2'>Add to Cart</button>
                    </div>             
              </div>
       </div>
       </div>
     
    </div>
  )
}

export default Productpage
