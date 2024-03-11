import React from 'react'
import {sidebarLinks} from "../../data/sidebarlinks"
import SidebarLink from './SidebarLink'
const Sidebar = () => {
  return (
    <div className=' flex h-[calc(100vh-3.5rem)] flex-col min-w-[220px] border-r-[1px] border-r-richblack-700 
      bg-richblack-800 py-10 '>

        <div className='flex flex-col'>
        {sidebarLinks.map((link) => {           
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            )
          })}
        </div>
 

      {/* horizontal line  */}
        {/* <div className='  mx-auto mt-6 mb-6 text-richblack-200 h-[1px] w-10/12'>
         <hr />
        </div> */}

        <div className='flex flex-col'>
              <SidebarLink  link={{name:"Settings", path:'/dashboard/settings'}} iconName="MdOutlineSettings" />
              

              {/* <button onClick={()=> setconfirmationmodal({
                text1:"Are you sure ?",
                text2:"You will be logged out of your account",
                btn1Text:"Logout",
                btn2Text:"Cancle",
                btn1Handler:()=> dispatch(logout(navigate)),
                btn2Handler:()=> setconfirmationmodal(null),
              })} */}
              {/* className='text-sm px-8 py-2 font-medium text-richblack-300'>
               <div className='flex flex-row items-center gap-x-2'>
               <VscSignOut className='text-2xl' />
               <span className='text-[15px]'>Logout</span>
               </div>
              </button> */}
        </div>

      </div>

    
  )
}

export default Sidebar
