import logo from "../public/assets/logo.png";
import Image from "next/image";
export default function Headers() {
  return (
    <div className="w-screen bg-greyBlack flex flex-row justify-center p-4">
      <Image style={{ height: "32px" }} src={logo} />
    </div>
  );
}
