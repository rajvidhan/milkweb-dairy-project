import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link} from "react-router-dom";


const LoginForm = () => {


    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const [showPassword, setShowPassword] = useState(false);
      const { email, password } = formData;
    
      const handleOnChange = (e) => {
        setFormData((prevData)=>({
          ...prevData,
          [e.target.name]:e.target.value,
        }))
      };
    

  return (
    <form
     
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-white p-[12px] text-richblack-900"
        />
      </label>

      <label className="relative ">
        <p className="mb-1 text-[0.875rem]  leading-[1.375rem] text-richblack-900">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-white p-[12px] pr-12 text-richblack-900"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )} </span>
       <Link to="/signup">
          <p className="mt-3 ml-auto max-w-max text-sm text-blue-800">
            Have not an account?? <span className="text-white text-lg">SignUp</span>
          </p>
        </Link>
      </label>
      <button
        type="submit"
        className="mt-2 rounded-[8px] bg-blue-600 py-[8px] px-[12px]  text-white"
      >
        Sign In
      </button>
    </form>
  )
}

export default LoginForm
