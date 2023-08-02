import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
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
export default function AnimatedTimelineItem(props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75vh", "end 60vh"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.05, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05, 1], [1, 0, 1]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.05, 1],
    ["#428797", "#000000", "#428797"]
  );
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <TimelineItem ref={ref} sx={{ marginTop: "45px" }}>
      <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
      <TimelineSeparator>
        <motion.div style={{ zIndex: "0", opacity }}>
          <TimelineDot
            sx={{
              width: "auto",
              padding: "8px",
              boxShadow: `70px 0px 0px 10px #000000`,
              backgroundColor: "#000000",
            }}
          >
            <Avatar className="w-14 h-14 sm:w-32 sm:h-32">
              <Image src={props.img}></Image>
            </Avatar>
          </TimelineDot>
        </motion.div>
        <motion.div style={{ position: "absolute", scale }}>
          <TimelineDot
            sx={{
              width: "auto",
              padding: "0px",
            }}
          >
            <Avatar className="w-14 h-14 sm:w-32 sm:h-32">
              <Image src={props.img}></Image>
            </Avatar>
          </TimelineDot>
        </motion.div>

        <TimelineConnector />
      </TimelineSeparator>
      <motion.div style={{ zIndex: "10", backgroundColor }}>
        <TimelineContent className="py-8 ">
          <h1 className="text-white font-semibold font-gilroy">
            {props.title}
          </h1>
          <h1 className="text-white font-georgia">{props.time}</h1>
          <motion.h1 className="text-white font-georgia" style={{ opacity }}>
            {props.venue}
          </motion.h1>
          <motion.p className="font-georgia text-white" style={{ opacity }}>
            {props.desc}
          </motion.p>
        </TimelineContent>
      </motion.div>
    </TimelineItem>
  );
}
