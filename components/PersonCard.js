// This component is for the AboutUs page where it displayes the members of the club using these cards.
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

export default function PersonCard(props) {
  const router = useRouter();
  return (
    <div className="p-4 md:p-8 " onClick={() => {}}>
      <div
        title={props.Name}
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
        <div className="bg-white opacity-75 dark:bg-greyBlack w-1/2 mb-4 md:mb-8">
          <h1 className="text-[8px] sm:text-[10px] md:text-lg lg:text-2xl  flex flex-col items-center text-center p-1 sm:p-3 md:p-4 text-black dark:text-white font-georgia ">
            {props.Name}
          </h1>
        </div>
      </div>
    </div>
  );
}
