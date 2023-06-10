// This component is for the AboutUs page where it displayes the members of the club using these cards.
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

export default function PersonCard(props) {
  const router = useRouter();
  return (
    <div className="p-8 " onClick={() => {}}>
      <div
        className="bg-cardBackground flex flex-col items-center  rounded-md min-h-full shadow-orange-900/20 shadow-lg hover:shadow-orange-900/20 hover:shadow-xl hover:scale-105 transition duration-50 ease-linear"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/cardboard-sheet-paper-abstract-texture-background_7182-2191.jpg')",
          backgroundPosition: "center",
        }}
      >
        <Avatar
          src={`${props.imageURL}`}
          className="my-8"
          sx={{
            width: { xs: 172, sm: 172, lg: 256, xl: 256 },
            height: { xs: 172, sm: 172, lg: 256, xl: 256 },
          }}
        ></Avatar>
        <h1 className="font-bold text-2xl font-merriweather mb-8">
          {props.Name}
        </h1>
      </div>
    </div>
  );
}
