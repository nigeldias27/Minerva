// This component refers to the navbar of the website
import logo from "../public/assets/logo.png";
import peslogo from "../public/assets/pesulogo.png";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';



export default function Headers() {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  
  return (
    
    <div className="w-screen bg-#FCF7FF dark:bg-greyBlack flex flex-row justify-between py-2 px-8 z-10">
          
      {isOpen ? (
        <RiCloseLine
          className="text-black dark:text-white text-bold hover:text-gray"
          size={24}
          onClick={toggleMenu}
        />
      ) : (
        <RiMenu3Line
          className="text-black dark:text-white  text-bold hover:text-gray"
          size={24}
          onClick={toggleMenu}
        />
      )}
        {isOpen ? (
          <div className="absolute bg-greyBlack top-0 left-0 w-100 h-100 flex flex-col">
            <div className="flex justify-end p-12">
              <RxCross1
                className="text-white text-bold hover:text-hoverbeigeText"
                size={20}
                onClick={toggleMenu}
              />
            </div>
            <div className="h-full flex flex-col justify-evenly items-center">
              <Link
                href={"/aboutUs"}
                scroll={false}
                className="text-white text-xl mb-4 font-georgia px-3 hover:text-hoverbeigeText"
              >
                About Us
              </Link>
              <Link
                href={"/#contactus"}
                className="text-white mb-4 text-xl font-georgia px-3 hover:text-hoverbeigeText"
              >
                Our Team
              </Link>
            </div>
          </div>
        ) : ""}
      
      <div className="hidden sm:flex sm:flex-row sm:items-center">
        <Link
          href={"/allnews"}
          className="text-#1D1D1D dark:text-white text-xl font-georgia px-4 hover:text-hoverbeigeText"
        >
          News
        </Link>
        <Link
          scroll={false}
          href={"/#timeline"}
          className="text-#1D1D1D dark:text-white text-xl font-georgia px-4 hover:text-hoverbeigeText"
        >
          Timeline
        </Link>
        <Link
          scroll={false}
          href={"/#featuringPES"}
          className="text-#1D1D1D dark:text-white text-xl font-georgia px-4 hover:text-hoverbeigeText"
        >
          Featuring PESU
        </Link>
        <Link
          href={"/#contactus"}
          className="text-#1D1D1D dark:text-white text-xl font-georgia px-3 hover:text-hoverbeigeText"
        >
          Contact Us
        </Link>
        
      </div>
      <Link href={"/"} className="flex flex-row items-center">
        <Image className="w-24 sm:w-32 h-xl mr-1 sm:mr-4" src={peslogo} style={{ filter: 'brightness(0%)' }} />
        <Image className="h-xl logo-black" src={logo} style={{ filter: 'brightness(0%)' }} />
      </Link>
      
    </div>
   
  );
}
