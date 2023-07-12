// This component is for the AboutUs page where it displayes the members of the club using these cards.
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

export default function PersonCard(props) {
  const router = useRouter();
  return (
    <div className="p-8 " onClick={() => {}}>
      <div
        className="bg-cardBackground aspect-square flex flex-col items-center justify-end min-h-full hover:scale-105 transition duration-50 ease-linear"
        style={{
          backgroundImage: `url(${props.imageURL})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundClip: "border-box",

          backgroundPositionY: "center",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white dark:bg-greyBlack w-1/2 mb-8">
          <h1 className=" text-2xl  flex flex-col items-center text-center px-4 py-4 text-black dark:text-white font-georgia ">
            {props.Name}
          </h1>
        </div>
      </div>
    </div>
  );
}
