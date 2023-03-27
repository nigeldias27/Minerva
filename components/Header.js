import logo from "../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Headers() {
  return (
    <div className="w-screen bg-greyBlack flex flex-row justify-around p-4">
      <div className="flex flex-row items-center">
        <Image className="h-xl" src={logo} />
        <h1 className="text-beigeText text-xl font-merriweather pl-3">
          MINERVA
        </h1>
      </div>
      <div className="flex flex-row items-center">
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
