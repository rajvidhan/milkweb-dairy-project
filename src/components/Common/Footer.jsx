import { Footer } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import React from "react";
import { Link } from "react-router-dom";

const FooterCompo = () => {
  return (
    <Footer container className="border bg-white border-t-8 min-h-[300px] border-teal-500">
      <div className="w-full flex flex-col justify-between  max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          {/* logo  */}
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl
                     font-semibold dark:text-white "
            >
              
             Dairy App 
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                >
                  100 products of dairy 
                </Footer.Link>
                <Footer.Link href="/about" target="_blank">
                  about 
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
           
            
          </div>
        </div>
       <div className="mb-10">
       <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="dairy name" year={new Date().getFullYear()}/>
            <div className="flex  gap-5 justify-center ">
                <Footer.Icon href="#" icon={FaGithub}/>
                <Footer.Icon href="#" icon={IoLogoInstagram }/>
            </div>
        </div>
       </div>
      </div>
    </Footer>
  )
}

export default FooterCompo
