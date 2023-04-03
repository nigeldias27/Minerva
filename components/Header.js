import logo from "../public/assets/logo.png";
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
    <div className="w-screen bg-greyBlack flex flex-row justify-around p-4">
      <div className="flex flex-row items-center">
        <Image className="h-xl" src={logo} />
        <h1 className="text-beigeText text-xl font-merriweather pl-3">
          MINERVA
        </h1>
      </div>
      <div className="sm:hidden flex flex-row items-center">
        {open ? (
          <div className="absolute bg-greyBlack top-0 left-0 w-screen h-screen flex flex-col">
            <div className="flex justify-end p-12">
              <RxCross1
                className="text-beigeText text-bold"
                size={24}
                onClick={openHandler}
              />
            </div>
            <div className="h-full flex flex-col justify-evenly items-center">
              <Link
                href={"/allnews"}
                className="text-beigeText text-xl font-merriweather px-3"
              >
                News
              </Link>
              <Link
                scroll={false}
                href={"/#timeline"}
                className="text-beigeText text-xl font-merriweather px-3"
              >
                Timeline
              </Link>
              <Link
                scroll={false}
                href={"/#featuringPES"}
                className="text-beigeText text-xl font-merriweather px-3"
              >
                Featuring PES
              </Link>
              <Link
                href={"/aboutUs"}
                className="text-beigeText text-xl font-merriweather px-3"
              >
                About Us
              </Link>
              <Link
                href={"/#contactus"}
                className="text-beigeText text-xl font-merriweather px-3"
              >
                Contact Us
              </Link>
            </div>
          </div>
        ) : (
          <RxHamburgerMenu
            className="text-beigeText text-bold"
            size={24}
            onClick={openHandler}
          />
        )}
      </div>
      <div className="hidden sm:flex sm:flex-row sm:items-center">
        <Link
          href={"/allnews"}
          className="text-beigeText text-xl font-merriweather px-3"
        >
          News
        </Link>
        <Link
          scroll={false}
          href={"/#timeline"}
          className="text-beigeText text-xl font-merriweather px-3"
        >
          Timeline
        </Link>
        <Link
          scroll={false}
          href={"/#featuringPES"}
          className="text-beigeText text-xl font-merriweather px-3"
        >
          Featuring PES
        </Link>
        <Link
          href={"/aboutUs"}
          className="text-beigeText text-xl font-merriweather px-3"
        >
          About Us
        </Link>
        <Link
          href={"/#contactus"}
          className="text-beigeText text-xl font-merriweather px-3"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
