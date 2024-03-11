import React from 'react'
import signup from "../assets/Images/signup.jpg"
import SignupForm from '../components/Common/SignupForm'
const Signup = () => {
  return (
    <div className='bg-sky-100 grid min-h-[calc(100vh-3.5rem)] place-items-center  w-full' >
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-x-12 md:gap-y-0">
          <div className="mx-auto  w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-900">
              Ready to explore <span className='text-4xl text-sky-200'>dairy products.</span>
            </h1>
            <p className="mt-4 text-[1.125rem leading-[1.625rem]">
              <span className="text-richblack-900 font-bold">good food</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-500">
                good health
              </span>
            </p>
            <SignupForm />
          </div>
          <div className="relative mx-auto w-11/12 max-w-[600px] md:mx-0">
            <img
              src={signup}
              alt="pattern"
              width={558}
              height={504}
              loading="lazy"
            />
            <img
              src={signup}
              alt="Students image "
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10"
            />
          </div>
        </div>
    </div>
  )
}

export default Signup
