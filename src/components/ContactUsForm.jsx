import React from 'react'
import { useForm } from 'react-hook-form';
import CountryCode from "../data/countrycode.json";
const ContactUsForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
      } = useForm();
    


  return (
    <form >
    <div className=" flex flex-col">
      <div className="flex flex-row gap-5  mb-[15px]">
        {/* firstname  */}
        <div className="flex flex-col">
          <label
            htmlFor="firstname"
            className="mb-1 text-[0.875rem] leading-[1.375rem] text-black"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-white p-[12px] pr-10 text-richblack-900"
            placeholder="Enter first name"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && <span>Please enter your name</span>}
        </div>
        {/* lastname  */}
        <div className="flex flex-col">
          <label
            htmlFor="lastname"
            className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-white p-[12px] pr-10 text-richblack-900"
            placeholder="Enter last name"
            {...register("lastname")}
          />
        </div>
      </div>

      {/* email  */}
      <div className="mb-[15px]">
        <label
          htmlFor="email"
          className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-white p-[12px] pr-10 text-richblack-900"
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Please enter your email</span>}
      </div>

      {/* phone number field */}

      <div className=" mb-[15px] flex flex-col gap-2">
        <label
          htmlFor="phonenumber"
          className="mb-1 text-[0.875rem] leading-[1.375rem] text-black"
        >
          {" "}
          Phone Number
        </label>

        <div className="flex flex-row gap-5 ">
          {/* dropdown  */}
          <div className="flex flex-col w-[100px] ">
            <select
              className=" rounded-[0.5rem] bg-white p-[12px] pr-10 text-black"
              name="dropdown "
              id="dropdown"
              {...register("countrycode", { required: true })}
            >
              {CountryCode.map((element, index) => {
                return (
                  <option key={index} value={element.code}>
                    {element.code} -{element.country}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex w-[calc(100%-90px)] flex-col">
            <input
              type="text"
              name="phonenumber"
              id="phonenumber"
              placeholder="Phone number "
              className="rounded-[0.5rem] bg-white p-[12px] pr-10 text-black"
              {...register("phoneNo", {
                required:{value:true, message:"Please Enter Phone Number"},
                maxLength: { value: 10, message: "Phone Number Length Should Be Less Than 10 Digits" },
                minLength: { value: 8, message: "Phone Number Length Should Be Minimum 10 Digits" },
              })}
            />
          </div>
        </div>

{
errors.phoneNo &&(
  <span>
    {errors.phoneNo.message}
  </span>
)
}

      </div>

      {/* message  */}
      <div className="flex flex-col mb-[30px]">
        <label
          htmlFor="message"
          className="mb-1 text-[0.875rem] leading-[1.375rem] text-black"
        >
          Message
        </label>
        <textarea
          rows="7"
          id="message"
          cols="30"
          name="message"
          placeholder="Enter Your Message..."
          className="bg-white  py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium"
          {...register("message", { required: true })}
        />
        {errors.message && <span>Please enter your message</span>}
      </div>

      <button
        type="submit"
        className="text-center shadow-md shadow-black text-[15px] px-6 py-3 rounded-md font-bold bg-yellow-50 text-black"
      >
        Send Message
      </button>
    </div>
  </form>
  )
}

export default ContactUsForm
