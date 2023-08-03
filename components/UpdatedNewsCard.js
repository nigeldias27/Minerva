import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

export default function UpdatedNewsCard(props) {
  const router = useRouter();
  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }
  const colorArr1 = ["#428897", "#B94FEB", "#B18516"];
  const colorArr = ["pink", "yellow", "blue"];
  const colorArrRGBA = [
    "rgba(222,153,255,1)",
    "rgba(239,255,0,1)",
    "rgba(159,225,240,1)",
  ];
  const textColor = props.darkMode
    ? colorArrRGBA[props.i % colorArrRGBA.length]
    : colorArr1[props.i % colorArr1.length];
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
          props.horizontal == true ? "grid grid-cols-5 sm:grid-cols-2 py-6" : ""
        } ${
          props.hideDate == true
            ? "grid grid-cols-2 sm:grid sm:grid-cols-1 py-6"
            : ""
        } hover:scale-105 transition duration-50 ease-linear`}
      >
        <div className="relative col-span-2 sm:col-auto">
          <div
            style={{
              outlineColor: props.horizontal ? "transparent" : textColor,
            }}
            className={
              props.thisweek == true
                ? `outline min-w-0 outline-1 sm:outline-0 sm:w-full ${
                    props.horizontal
                      ? ""
                      : "w-11/12 translate-x-4 translate-y-4"
                  }`
                : "w-full h-full"
            }
          >
            <img
              style={{
                boxShadow: props.hideShadow
                  ? ""
                  : props.bigger == true
                  ? "12px 12px 0px rgba(222,153,255,1)"
                  : props.horizontal == true
                  ? "12px 12px 0px rgba(159,225,240,1)"
                  : "",
              }}
              className={`w-full h-full object-cover aspect-video drop-shadow-[12px_12px_0px_${
                props.bigger == true ? "rgba(222,153,255,1)" : ""
              }${props.horizontal == true ? "rgba(159,225,240,1)" : ""}] ${
                props.thisweek ? "-translate-x-4 -translate-y-4" : ""
              }`}
              src={`${props.imageURL}`}
            ></img>
          </div>
          {props.bigger == true && !props.hideDate ? (
            <div className="absolute rounded-b-2xl px-4 py-1 border border-gray-700 bg-white dark:bg-yellow top-0 left-8 font-gilroy font-500">
              {parseISOString(props.date)
                .toUTCString()
                .split(",")[1]
                .split(":")[0]
                .slice(0, -3)}
            </div>
          ) : (
            <div
              className={`absolute rounded-r-2xl px-4 py-1 border border-gray-700 bg-white dark:bg-yellow ${
                props.hideDate || (!props.horizontal && !props.bigger)
                  ? "hidden"
                  : ""
              } ${
                props.horizontal == true
                  ? "top-3 sm:text-xs text-[8px]"
                  : "top-8"
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
          className={` ${
            props.hideDate == true
              ? "pl-8 pt-2 sm:pt-8 sm:pl-3"
              : props.horizontal == true
              ? "pl-8 pt-2"
              : "pt-8 pl-3"
          } ${props.horizontal == true ? "col-span-3 sm:col-auto" : ""}`}
        >
          <h1
            className={` ${
              props.horizontal == true ? "text-xl" : "sm:text-2xl :text-[14px]"

            } font-georgia text-#1D1D1D dark:text-white`}
          >
            {props.headline}
          </h1>
          <div className="flex flex-row items-center pt-2">
            
            <Avatar size={2}  />
            
            <p
              style={{ color: textColor }}
              className={`ml-2 font-georgia ${
                props.bigger == true ? "sm:text-xl text-[10px]" : " sm:text-lg text-[10px]"

              } `}
            >
              {"Nigel Dias"} | {props.genre}
            </p>
            {props.thisweek && props.readTime && (
              <p
                style={{ color: textColor }}
                className="font-georgia ml-auto text-xs sm:text-base"
              >
                {props.readTime} min read
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
