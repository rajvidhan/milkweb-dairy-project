import React from "react";
import pic5 from "../assets/Images/pic5.jpg";
import ReviewSlider from "./Common/ReviewSlider";
import { FaAngleDoubleRight } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import { RiSecurePaymentLine } from "react-icons/ri";

import milk from "../assets/Images/milk.jpg";
import { IoBagHandle } from "react-icons/io5";
import buttermilk from "../assets/Images/buttermilk.jpg";
import butter from "../assets/Images/butter.jpg";
import dahi from "../assets/Images/dahi.jpg";

import ghee from "../assets/Images/ghee.jpg";
import paneer from "../assets/Images/paneer.jpg";
import FooterCompo from "./Common/Footer";

const Home = () => {
  return (
    <div>
      {/* section1  */}

      <div className="bg-sky-100 lg:min-h-[886px]  w-full flex flex-col-reverse lg:flex-row">
        
        <div className="lg:mx-[100px] mx-auto lg:w-[50%] flex  justify-center">
          <div className="lg:w-[700px] gap-5 w-[400px] lg:my-auto my-3 flex flex-col ">
            <h1 className="text-4xl mb-10 font-bold">
              Dairy Products for{" "}
              <span className="text-5xl text-sky-200">
                Health and Nutritions
              </span>
              .
            </h1>
            <h4>
              We provide wide range of ghee & buttermilk that cater to consumers
              around the world who put a premium on taste, nutrition, health,
              craftsmanship and sheer indulgence.
            </h4>
            <Link
              to={"/about"}
              className="w-[120px] flex items-center justify-center  h-10 rounded-md bg-sky-200 "
            >
              <span className="mr-1">Learn More</span> <FaAngleDoubleRight />
            </Link>
          </div>
         
        </div>

        <div className="lg:mx-[100px] mx-auto lg:w-[50%] flex flex-col items-center justify-center">
          <img src={pic5} className="w-[700px] lg:rounded-lg  " />
        </div>
      </div>

      {/* section 2 category section  */}

      <div className="items-center   mt-10 flex flex-col gap-10 ">
        <h1 className="text-5xl ">Categories</h1>

        <div className="flex flex-col gap-10">
          <div className="flex lg:flex-row flex-col  gap-[100px]">
            {/* 1st  */}
            <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[340px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={milk}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="p-3 flex items-center flex-col gap-1 ">
                <p className="text-xl  line-clamp-1">Milk</p>

                <Link
                  to={"/about"}
                  className="z-10 group-hover:bottom-0 bottom-[-200px] left-0 right-0 border border-teal-500  hover:bg-sky-200 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 absolute"
                >
                  Learn More
                </Link>
              </div>
            </div>
            {/* 2nd
             */}
            <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[340px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={butter}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="p-3 flex items-center flex-col gap-1 ">
                <p className="text-xl  line-clamp-1">Butter</p>

                <Link
                  to={"/about"}
                  className="z-10 group-hover:bottom-0 bottom-[-200px] left-0 right-0 border border-teal-500  hover:bg-sky-200 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 absolute"
                >
                  Learn More
                </Link>
              </div>
            </div>
            {/* 3rd */}
            <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[340px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={dahi}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="p-3 flex items-center flex-col gap-1 ">
                <p className="text-xl  line-clamp-1">Yocurt</p>

                <Link
                  to={"/about"}
                  className="z-10 group-hover:bottom-0 bottom-[-200px] left-0 right-0 border border-teal-500  hover:bg-sky-200 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 absolute"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col  gap-[100px]">
            {/* 4th  */}
            <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[340px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={buttermilk}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="p-3 flex items-center flex-col gap-1 ">
                <p className="text-xl  line-clamp-1">Butter Milk</p>

                <Link
                  to={"/about"}
                  className="z-10 group-hover:bottom-0 bottom-[-200px] left-0 right-0 border border-teal-500  hover:bg-sky-200 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 absolute"
                >
                  Learn More
                </Link>
              </div>
            </div>
            {/* 5th  */}
            <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[340px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={ghee}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="p-3 flex items-center flex-col gap-1 ">
                <p className="text-xl  line-clamp-1">Ghee</p>

                <Link
                  to={"/about"}
                  className="z-10 group-hover:bottom-0 bottom-[-200px] left-0 right-0 border border-teal-500  hover:bg-sky-200 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 absolute"
                >
                  Learn More
                </Link>
              </div>
            </div>
            {/* 6th */}
            <div className="group cursor-pointer   relative w-full border border-sky-200 transition-all hover:border-2 h-[340px] rounded-lg  sm:w-[430px]  overflow-hidden">
              <Link>
                <img
                  src={paneer}
                  className="h-[260px] w-full object-cover
    transition-all duration-300 z-20
    group-hover:h-[200px] "
                />
              </Link>
              <div className="p-3 flex items-center flex-col gap-1 ">
                <p className="text-xl  line-clamp-1">Paneer</p>

                <Link
                  to={"/about"}
                  className="z-10 group-hover:bottom-0 bottom-[-200px] left-0 right-0 border border-teal-500  hover:bg-sky-200 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 absolute"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3   */}

      <div className="items-center p-8  rounded-tl-3xl lg:my-[100px] my-10 mx-3  lg:mx-[100px] rounded-br-3xl bg-sky-100 flex flex-col ">
        <h1 className="text-5xl text-white font-bold mb-[100px] ">Features</h1>

        <div className="flex lg:flex-row flex-col gap-8">
          {/* 1st */}
          <div className=" flex gap-5 cursor-pointer w-full h-[200px]  sm:w-[430px] overflow-hidden">
            <div className="text-white text-8xl ">
              <IoBagHandle />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white ">Shop Online</h1>
              <p className="font-bold text-white">
                Enjoy our range of dairy products, organic milk and butter as
                well as mouth-watering shrikhand from our online store.
              </p>
            </div>
          </div>
          {/* 2nd  */}
          <div className=" flex gap-5 cursor-pointer w-full h-[200px]  sm:w-[430px] overflow-hidden">
            <div className="text-white text-8xl ">
              <RiSecurePaymentLine />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white ">Secure Payment</h1>
              <p className="font-bold text-white">
                Whatever your online mode of payment be, our trusted payment
                gateway partners keep your transaction details confidential.
              </p>
            </div>
          </div>
          {/* 3rd  */}
          <div className=" flex gap-5 cursor-pointer w-full h-[200px]  sm:w-[430px] overflow-hidden">
            <div className="text-white text-8xl ">
              <TbTruckDelivery />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white ">
                On-Time Delivery
              </h1>
              <p className="font-bold text-white">
                Simply order and get all your daily essentials delivered to your
                doorstep. Our team provides transportation to meet your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* slider  */}
      <div className="w-11/12 my-[100px] items-center mx-auto max-w-maxContent ">
        <ReviewSlider />
      </div>
      <FooterCompo />
    </div>
  );
};

export default Home;
