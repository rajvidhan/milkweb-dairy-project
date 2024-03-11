import React, { useState } from "react";
import profile from "../../assets/demoprofile.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscSignOut } from "react-icons/vsc";
import { IoPerson } from "react-icons/io5";
import ConfirmationModal from "./ConfirmationModal";

const ProfileDropDown = () => {
  const [confirmdata, setconfimdata] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <button className="relative" onClick={() => setOpen(!open)}>
        <div className="flex items-center gap-x-1">
          <img
            src={profile}
            className="aspect-square w-[30px] rounded-full object-cover"
          />

          <AiOutlineCaretDown className="text-sm text-richblack-100" />
        </div>

        {open && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
          >
            <Link to="/dashboard/profile" onClick={() => setOpen(false)}>
              <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
                <IoPerson className="text-lg" />
                Profile
              </div>
            </Link>
            <div
              onClick={() =>
                setconfimdata({
                  text1: "Are you sure ??",
                  text2: "Would you want to log out your account",
                  btn1Text: "Log Out",
                  btn1Handler: () => setconfimdata(null),
                  btn2Text: "Cancle",
                  btn2Handler: () => setconfimdata(null),
                })
              }
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
            >
              <VscSignOut className="text-lg" />
              Logout
            </div>
          </div>
        )}
      </button>
      {confirmdata && <ConfirmationModal modalData={confirmdata} />}
    </>
  );
};

export default ProfileDropDown;
