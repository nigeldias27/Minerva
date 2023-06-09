import Footer from "./Footer";
import NewsCard from "./NewsCard";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Contact from "./ContactUs";
import { motion } from "framer-motion";
import Image from "next/image";
import event1 from "../public/assets/minerva_event_1.jpeg";
import event2 from "../public/assets/orientation.jpeg";
import background from "../public/assets/background.png";
import foreground from "../public/assets/foreground.png";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import AnimatedHeading from "@/animatedComponents/Heading";
export default function HomeComponent() {
  const router = useRouter();
  const [data, setData] = useState([]); //This refers to the 6 news articles featured in the home page
  const [open, setOpen] = useState(false); // Loading circular progress bar(Backdrop)

  useEffect(() => {
    initState();
  }, []);
  async function initState() {
    setOpen(true);
    const response = await axios.post("/api/articles", {
      selectedGenres: [],
      limit: 6,
    });
    setOpen(false);
    console.log(response.data);
    setData([...response.data]);
  }
  return (
    <div className="flex flex-col">
      <div
        className="w-screen h-screen -z-20"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="grid grid-cols-2 h-full w-full">
          <motion.div
            className="h-full w-screen md:w-full flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="pl-12">
              <h1 className="text-4xl font-merriweather md:text-7xl">
                Introducing Minerva
              </h1>
              <h1 className="text-xl font-typewriter mt-8 mb-4 md:text-3xl">
                Bangalore&apos;s first student-run college newspaper
              </h1>
              <p className="text-md font-typewriter md:text-xl text-gray-500">
                We are a group of thinkers that challenge people through good
                journalism.
              </p>
            </div>
          </motion.div>

          <div className="hidden items-end justify-end h-screen md:flex">
            <div className="pb-8 pr-8 z-10">
              <Image className="w-auto h-auto" src={foreground}></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0 mt-8 sm:px-48">
        <div className="mt-16">
          <AnimatedHeading>Recent News</AnimatedHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {data.map((val, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <NewsCard
                  key={i}
                  imageURL={`${val.imageURL}`}
                  headline={`${val.title}`}
                  genre={`${val.genre}`}
                  date={`${val.createdAt}`}
                  desc={`${val.description}`}
                  id={`${val._id}`}
                  newArticle={true}
                />
              </motion.div>
            );
          })}
        </div>
        <div className="flex w-full justify-center">
          <button
            class="x-6 my-8 drop-shadow-xl hover:drop-shadow-xl font-small rounded-md bg-gradient-to-r from-gray-800 to-blackButton py-3 px-8 text-beigeText  hover:scale-105 transition duration-50 ease-linear"
            type="submit"
            onClick={() => {
              router.push("/allnews", undefined, { scroll: false });
            }}
          >
            <span className="text-xl font-merriweather">View More</span>
          </button>
        </div>
        <motion.div
          className="bg-yellowBackground p-8 my-24 w-full rounded-md shadow-orange-900/20 shadow-lg"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8 font-merriweather">
            Our Timeline
          </h1>
          <Timeline id="timeline" className="px-1" position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                className="pt-8 pb-32 font-typewriter"
                color="text.secondary"
              >
                <h1 className=" font-typewriter">12th Apr 2023, 2:45PM</h1>
                <h1 className=" font-typewriter">MRD Auditorium</h1>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ width: "auto", padding: "0px" }}>
                  <Avatar className="w-14 h-14 sm:w-32 sm:h-32">
                    <Image src={event2}></Image>
                  </Avatar>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="py-8">
                <h1 className="text-md font-semibold font-merriweather">
                  Minerva Orientation
                </h1>
                <p className="font-typewriter">
                  Come learn more about what our club has in store for all of
                  you this year
                </p>
                <button
                  class="x-6 my-1 font-merriweather drop-shadow-xl hover:drop-shadow-xl font-small rounded-md bg-gradient-to-r from-gray-800 to-blackButton py-2 px-3 text-beigeText hover:scale-105 transition duration-50 ease-linear"
                  type="submit"
                  onClick={() => {}}
                >
                  <span
                    onClick={() => {
                      window.location.href =
                        "https://www.instagram.com/p/Cq0K-B-JLoC/?utm_source=ig_web_copy_link";
                    }}
                    className="text-sm"
                  >
                    View More
                  </span>
                </button>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                className="pt-8 pb-32 font-typewriter"
                color="text.secondary"
              >
                <h1 className=" font-typewriter">8th Feb 2023, 2:45PM</h1>
                <h1 className=" font-typewriter">Seminar Hall 3,BE Block</h1>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ width: "auto", padding: "0px" }}>
                  <Avatar className="w-14 h-14 sm:w-32 sm:h-32">
                    <Image src={event1}></Image>
                  </Avatar>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="py-8">
                <h1 className="text-md font-merriweather font-semibold">
                  Rethink Retrospect Reflect
                </h1>
                <h6 className="font-typewriter">
                  Watch the screenplay, write a report on it and stand a chance
                  to win Ant Man tickets!
                </h6>
                <button
                  class="x-6 my-1 drop-shadow-xl hover:drop-shadow-xl font-merriweather font-small rounded-md bg-gradient-to-r from-gray-800 to-blackButton py-2 px-3 text-beigeText hover:scale-105 transition duration-50 ease-linear"
                  type="submit"
                  onClick={() => {
                    window.location.href =
                      "https://www.instagram.com/p/CoSP_WVSf2k/?utm_source=ig_web_copy_link";
                  }}
                >
                  <span className="text-sm">View More</span>
                </button>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </motion.div>
        <div id="featuringPES">
          <AnimatedHeading>Featuring PES</AnimatedHeading>
        </div>
        <h4 className="font-bold text-lg pb-4 mx-8 font-typewriter">
          PESU shines under CORI
        </h4>
        <p className="mx-8 font-typewriter">
          Crucible of Research and Innovation
          <a
            className="underline"
            onClick={() => {
              window.location.href = "https://research.pes.edu/cori/";
            }}
          >
            (CORI)
          </a>
          , headed by Dr. V. Sambasiva Rao is the research centre of PESU where
          multidisciplinary research is carried out. A lot of these projects are
          done under the guidance of professors like Dr Manikandan J, for
          various other organizations like TCS and ISRO. They work on multiple
          interesting projects involving satellites, robots, sensors for
          detection, lifespan of hardware used among other ideas. This provides
          an interesting opportunity for students to explore the fields of
          research.
        </p>
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipP0ziHgkSGCOHH99LOGHUUie5kJDdmecp6zIosO=s1360-w1360-h1020"
          className="w-full mt-8 mb-24"
        ></img>
        <Contact />
        <Footer />
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  );
}
