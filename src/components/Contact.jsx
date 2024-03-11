import React from "react";


import { LuMessagesSquare } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import { TiWorld } from "react-icons/ti";
import ContactUsForm from "./ContactUsForm";
import ReviewSlider from "./Common/ReviewSlider";
import FooterCompo from "./Common/Footer";


const contactdetails = [
    {
      icon: <LuMessagesSquare />,
      heading: "Chat on us",
      para: "Our friendly team is here to help.",
      para2: "@mail address",
    },
    {
      icon: <TiWorld />,
      heading: "Visit us",
      para: "Come and say hello at our office HQ.",
      para2: "here is the location/address",
    },
    {
      icon: <IoCall />,
      heading: "Call us",
      para: "Mon-Fri From 8am to 5pm",
      para2: "+123 456 7890",
    },
  ];
  

const Contact = () => {
  return (
    <div className="bg-sky-100">
    <div className="mx-auto mt-[100px] items-center text-white w-11/12 max-w-maxContent">
      <div className="flex flex-row">
        {/* left section  */}
        <div className="w-[50%]">
          <div className="bg-white w-[420px] items-center  rounded-2xl p-[40px] h-auto ">
            {contactdetails.map((data, index) => {
              return (
                <div key={index} className="flex p-[12px] flex-row gap-5">
                  <div className="text-[30px] text-black">
                    {data.icon}
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[20px] font-bold text-black">
                      {data.heading}
                    </h1>
                    <p className="text-black text-[15px]">
                      {data.para}
                    </p>
                    <p className="text-black text-[15px]">
                      {data.para2}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* right section  */}
        <div className="w-[50%] p-[44px] flex flex-col border-solid border-[1px] border-richblack-900 rounded-2xl">
          <span className="mb-[10px] font-bold text-black">
            <h1 className="text-[35px] font-bold text-black">
              Got a idea? want to connect with us.
            </h1>
            <h1 className="text-[35px]">Let's team up</h1>
          </span>
          <p className="text-[15px] text-black mb-[30px]">
            Tell us more about yourself and what you're got in mind.
          </p>
          <ContactUsForm />
        </div>
      </div>
     

      <div className="w-11/12 my-[100px] items-center mx-auto max-w-maxContent ">
        <ReviewSlider />
      </div>
      
    </div>
    <FooterCompo />
  </div>
  )
}

export default Contact
