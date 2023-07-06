// This component refers to the navbar of the website
import logo from "../public/assets/logo.png";
import peslogo from "../public/assets/pesulogo.png";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
export default function Headers() {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(open ? false : true);
  };
  return (
    <div className="w-screen bg-greyBlack flex flex-row justify-between py-2 px-8 z-10">
      <div className="hidden sm:flex sm:flex-row sm:items-center">
        <Link
          href={"/allnews"}
          className="text-white text-xl font-georgia px-4 hover:text-hoverbeigeText"
        >
          News
        </Link>
        <Link
          scroll={false}
          href={"/#timeline"}
          className="text-white text-xl font-georgia px-4 hover:text-hoverbeigeText"
        >
          Timeline
        </Link>
        <Link
          scroll={false}
          href={"/#featuringPES"}
          className="text-white text-xl font-georgia px-4 hover:text-hoverbeigeText"
        >
          Featuring PESU
        </Link>
        <Link
          href={"/aboutUs"}
          className="text-white text-xl font-georgia px-4 hover:text-hoverbeigeText"
        >
          About Us
        </Link>
        <Link
          href={"/#contactus"}
          className="text-white text-xl font-georgia px-3 hover:text-hoverbeigeText"
        >
          Contact Us
        </Link>
      </div>
      <Link href={"/"} className="flex flex-row items-center">
        <Image className="w-24 sm:w-32 h-xl mr-1 sm:mr-4" src={peslogo} />
        <Image className="h-xl" src={logo} />
      </Link>
      <div className="sm:hidden flex flex-row items-center">
        {open ? (
          <div className="absolute bg-greyBlack top-0 left-0 w-screen h-screen flex flex-col">
            <div className="flex justify-end p-12">
              <RxCross1
                className="text-white text-bold hover:text-hoverbeigeText"
                size={24}
                onClick={openHandler}
              />
            </div>
            <div className="h-full flex flex-col justify-evenly items-center">
              <Link
                href={"/allnews"}
                scroll={false}
                className="text-white text-xl font-georgia px-3 hover:text-hoverbeigeText"
              >
                News
              </Link>
              <Link
                href={"/#timeline"}
                className="text-white text-xl font-georgia px-3 hover:text-hoverbeigeText"
              >
                Timeline
              </Link>
              <Link
                href={"/#featuringPES"}
                className="text-white text-xl font-georgia px-3 hover:text-hoverbeigeText"
              >
                Featuring PESU
              </Link>
              <Link
                href={"/aboutUs"}
                scroll={false}
                className="text-white text-xl font-georgia px-3 hover:text-hoverbeigeText"
              >
                About Us
              </Link>
              <Link
                href={"/#contactus"}
                className="text-white text-xl font-georgia px-3 hover:text-hoverbeigeText"
              >
                Contact Us
              </Link>
            </div>
          </div>
        ) : (
          <RxHamburgerMenu
            className="text-white text-bold hover:text-hoverbeigeText"
            size={24}
            onClick={openHandler}
          />
        )}
      </div>
    </div>
  );
}
