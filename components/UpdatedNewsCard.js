import { useRouter } from "next/router";

export default function UpdatedNewsCard(props) {
  
  const router = useRouter();
  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }
  const colorArr1 = ["softViolet","londonYellow","[#428897]"];
  const colorArr = ["pink", "yellow", "blue"] ;
  const colorArrRGBA = [
    " rgba(222,153,255,1)",
    " rgba(239,255,0,1)",
    "rgba(159,225,240,1)",  
  ];
  const textColor = props.darkMode ?   colorArr[props.i % colorArr.length]: colorArr1[props.i % colorArr1.length];
  return (
    <div
      className={` px-8 ${props.horizontal == true ? "" : "py-4"}`}
      onClick={() => {
        if (props.newArticle) {
          router.push("/news/" + props.id, undefined, { scroll: false });
        } else {
          router.push("/create/" + props.id, undefined, { scroll: false });
        }
      }}
    >
      <div
        className={`min-h-full ${
          props.horizontal == true ? "grid grid-cols-2 py-6" : ""
        } hover:scale-105 transition duration-50 ease-linear`}
      >
        <div className="relative">
          <img
            style={{
              width: "100%",
              boxShadow:
                props.bigger == true
                  ? "12px 12px 0px rgba(222,153,255,1)"
                  : props.horizontal == true
                  ? "12px 12px 0px rgba(159,225,240,1)"
                  : "",
            }}
            className={`aspect-video drop-shadow-[12px_12px_0px_${
              props.bigger == true ? "rgba(222,153,255,1)" : ""
            }${props.horizontal == true ? "rgba(159,225,240,1)" : ""}]`}
            src={`${props.imageURL}`}
          ></img>
          {props.bigger == true ? (
            <div className="absolute rounded-b-2xl px-4 py-1 border border-gray-700 bg-yellow top-0 left-8 font-gilroy font-500">
              {parseISOString(props.date)
                .toUTCString()
                .split(",")[1]
                .split(":")[0]
                .slice(0, -3)}
            </div>
          ) : (
            <div
              className={`absolute rounded-r-2xl px-4 py-1 border border-gray-700 bg-yellow ${
                props.horizontal == null && props.bigger == null ? "hidden" : ""
              } ${
                props.horizontal == true ? "top-3 text-xs" : "top-8"
              }  font-gilroy font-500`}
            >
              {parseISOString(props.date)
                .toUTCString()
                .split(",")[1]
                .split(":")[0]
                .slice(0, -3)}
            </div>
          )}
        </div>
        <div
          className={` ${props.horizontal != true ? "pl-3" : ""} ${
            props.horizontal == true ? "pl-8 pt-2" : "pt-8"
          }`}
        >
          <h1
            className={` ${
              props.horizontal == true ? "text-xl" : "text-2xl"
            } font-georgia text-#1D1D1D dark:text-white`}
          >
            {props.headline}
          </h1>
          <p
            className={`my-1 font-georgia ${
              props.bigger == true ? "text-xl" : ""
            } text-${textColor} `}
          >
            {"Nigel Dias"} | {props.genre}
          </p>
        </div>
      </div>
    </div>
  );
}
