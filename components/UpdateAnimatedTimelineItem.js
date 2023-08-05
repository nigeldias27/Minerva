import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
  useMotionTemplate,
} from "framer-motion";
import { Avatar } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
export default function UpdatedAnimatedTimelineItem(props) {
  const [fontSizevar, setFontSize] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75vh", "end 60vh"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.05, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05, 1], [1, 0, 1]);
  const fontSize = useTransform(scrollYProgress, [1, 0], [14, 0.1]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.05, 1],
    ["#428797", "#000000", "#428797"]
  );
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest == 1) {
      setFontSize(14);
    }
    if (latest == 0) {
      setFontSize(0);
    }
  });

  return (
    <div ref={ref} className="grid grid-cols-3 gap-1">
      <div className="bg-lighterblue dark:bg-lighterblack p-4 rounded-sm">
        <Image
          className="aspect-square rounded-full border-white border-8"
          src={props.img}
        ></Image>
      </div>
      <div className="bg-lighterblue flex flex-col justify-center p-3 dark:bg-lighterblack col-span-2  rounded-sm">
        <h2 className="text-white text-sm font-gilroy">
          {props.title.toUpperCase()}
        </h2>
        <p className="text-[14px] font-georgia text-[#ffffff90]">
          {props.time}
        </p>
        <div>
          <motion.p
            style={{ fontSize: fontSizevar.toString() + "px" }}
            className=" font-georgia text-[#ffffff90]"
          >
            {props.venue}
          </motion.p>
          <motion.p
            style={{ fontSize: fontSizevar.toString() + "px" }}
            className="pt-2 font-georgia text-white"
          >
            {props.desc}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
