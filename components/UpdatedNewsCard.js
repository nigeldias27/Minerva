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
      className={` md:px-8 ${props.horizontal == true ? "" : "py-4"}`}
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
          props.horizontal == true
            ? "grid grid-cols-5 md:grid-cols-2 md:py-6"
            : ""
        } ${
          props.hideDate == true ? "grid grid-cols-2 md:grid-cols-1 py-2" : ""
        } hover:scale-105 transition duration-50 ease-linear`}
      >
        <div className="relative col-span-2 md:col-auto">
          <div
            style={{
              outlineColor: props.horizontal ? "transparent" : textColor,
            }}
            className={` ${
              props.horizontal ? "flex flex-col justify-center md:block" : ""
            } ${
              props.thisweek == true
                ? `outline min-w-0 outline-1 md:outline-0 sm:w-full ${
                    props.horizontal
                      ? ""
                      : "w-11/12 translate-x-2 translate-y-2"
                  }`
                : "w-full h-full"
            }`}
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
              className={`w-full h-full  object-cover aspect-video drop-shadow-[12px_12px_0px_${
                props.bigger == true ? "rgba(222,153,255,1)" : ""
              }${props.horizontal == true ? "rgba(159,225,240,1) " : ""}] ${
                props.thisweek ? "-translate-x-2 -translate-y-2" : ""
              } ${
                props.horizontal == true
                  ? "max-w-[7rem] max-h-[4rem] w-auto h-auto md:max-h-none md:max-w-none py-1rem"
                  : ""
              }`}
              src={`${props.imageURL}`}
              alt={props.headline + " Article"}
            ></img>
          </div>
          {props.bigger == true && !props.hideDate ? (
            <div className="absolute rounded-b-lg md:rounded-b-2xl px-2 md:px-4 md:text-xs text-[8px] py-[3px] border border-gray-700 bg-white dark:bg-yellow top-0 left-4 md:left-8 font-gilroy font-500">
              {parseISOString(props.date)
                .toUTCString()
                .split(",")[1]
                .split(":")[0]
                .slice(0, -3)
                .toUpperCase()}
            </div>
          ) : (
            <div
              className={`absolute rounded-r-2xl px-4 md:py-1 py-[3px] border border-gray-700 bg-white dark:bg-yellow ${
                props.hideDate || (!props.horizontal && !props.bigger)
                  ? "hidden"
                  : ""
              } ${
                props.horizontal == true
                  ? "top-3 md:text-xs text-[8px]"
                  : "top-8 md:text-xs text-[8px]"
              }  font-gilroy font-500`}
            >
              {parseISOString(props.date)
                .toUTCString()
                .split(",")[1]
                .split(":")[0]
                .slice(0, -3)
                .toUpperCase()}
            </div>
          )}
        </div>
        <div
          className={`col-span-3 md:col-auto ${
            props.hideDate == true
              ? "pl-4 pt-2 sm:py-1  md:pt-8 md:pl-3 lg:pl-8 "
              : props.horizontal == true
              ? "pl-8 pt-2"
              : "pt-8 pl-3"
          }`}
        >
          <h3
            className={` ${
              props.horizontal == true
                ? "text-xl"
                : "sm:text-[18px] text-[14px] md:text-2xl"
            } font-georgia text-#1D1D1D dark:text-white`}
          >
            {props.headline}
          </h3>
          <div className="flex flex-row items-center pt-2">
            <Avatar className="w-3 h-3 md:w-8 md:h-8" />
            <p
              style={{ color: textColor }}
              className={`ml-2 font-georgia ${
                props.bigger == true
                  ? "md:text-xl text-xs"
                  : " md:text-lg text-xs"
              } `}
            >
              {props.writerName} | {props.genre}
            </p>
            {props.readTime && (
              <p
                style={{ color: textColor }}
                className="font-georgia ml-auto text-[10px] md:hidden"
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
