import Footer from "./Footer";
import Headers from "@/components/Header";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Backdrop from "@mui/material/Backdrop";
import { Dialog, Transition } from "@headlessui/react";
import event6 from "../public/assets/newsletter.png";
import event7 from "../public/assets/newsletter_dark.png";
import { GrClose } from "react-icons/gr";
import CircularProgress from "@mui/material/CircularProgress";
import Contact from "./ContactUs";
import {
  motion,
  transform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import event1 from "../public/assets/minerva_event_1.jpeg";
import event2 from "../public/assets/orientation.jpeg";
import event3 from "../public/assets/runway.jpeg";
import background from "../public/assets/background.png";
import foreground from "../public/assets/foreground.png";
import { Avatar, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState, useRef, Fragment } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AnimatedHeading from "@/animatedComponents/Heading";
import UpdatedNewsCard from "./UpdatedNewsCard";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import UpdatedHeading from "@/animatedComponents/UpdatedHeading";
import AnimatedTimelineItem from "./AnimatedTimelineItem";
import { isMdAsciiPunct } from "markdown-it/lib/common/utils";
import { IoMdClose } from "react-icons/io";

const CustomLeftArrow = ({ onClick }) => (
  <div
    onClick={() => onClick()}
    className="w-10 h-10 relative z-50 bg-pink react-multiple-carousel__arrow "
  >
    <button
      style={{ transform: "translate(,-50%)" }}
      className=" w-full absolute h-full -z-10 -right-1 border p-4 rounded-full border-black bg-blue"
    >
      <BsArrowRight style={{ transform: "translate(-20%,-20%)" }} size={16} />
    </button>
    <button
      style={{ transform: "translate(,-50%)" }}
      className=" w-full absolute h-full -z-20 -right-2 border p-4 rounded-full border-black bg-yellow"
    >
      <BsArrowRight style={{ transform: "translate(-20%,-20%)" }} size={16} />
    </button>
    <button className=" w-full h-full bottom-10 border p-4 rounded-full border-black bg-pink">
      <BsArrowLeft style={{ transform: "translate(-20%,-20%)" }} size={16} />
    </button>
  </div>
);
const CustomRightArrow = ({ onClick }) => (
  <div
    onClick={() => onClick()}
    className="w-1 h-1 relative z-50 bg-pink react-multiple-carousel__arrow right-0 "
  >
    <button
      style={{ transform: "translate(,-50%)" }}
      className=" w-full absolute h-full -z-10 -left-1 border p-4 rounded-full border-black bg-blue"
    >
      <BsArrowRight style={{ transform: "translate(-20%,-20%)" }} size={16} />
    </button>
    <button
      style={{ transform: "translate(,-50%)" }}
      className=" w-full absolute h-full -z-20 -left-2 border p-4 rounded-full border-black bg-yellow"
    >
      <BsArrowRight style={{ transform: "translate(-20%,-20%)" }} size={16} />
    </button>
    <button
      style={{ transform: "translate(,-50%)" }}
      className=" w-full h-full bottom-10 border p-4 rounded-full border-black bg-pink"
    >
      <BsArrowRight style={{ transform: "translate(-20%,-20%)" }} size={16} />
    </button>
  </div>
);

export default function HomeComponent() {
  const router = useRouter();
  const [data, setData] = useState([]); //This refers to the 6 news articles featured in the home page
  const [open, setOpen] = useState(false); // Loading circular progress bar(Backdrop)
  const isSmallScreen = useMediaQuery({ maxWidth: 480 });
  const [dark, setDark] = useState(false);
  const [openDialogue, setOpenDialogue] = useState(false);
  const handleClickOpen = () => {
    setOpenDialogue(true);
  };

  const handleClose = (value) => {
    setOpenDialogue(false);
  };
  useEffect(() => {
    localStorage.getItem("mode") == "dark" ? setDark(true) : setDark(false);

    setOpenDialogue(true);
    initState();
  }, []);
  function closeModal() {
    setOpenDialogue(false);
  }
  async function initState() {
    setOpen(true);
    const response = await axios.post("/api/articles", {
      selectedGenres: [],
      limit: 9,
    });
    setOpen(false);
    console.log(response.data);
    setData([...response.data]);
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 481 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 481, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={dark ? "dark" : ""}>
      <Headers dark={dark} setDark={setDark} />
      <div className="flex flex-col">
        <div
          className="w-screen -z-20"
          style={{
            height: "90vh",
            backgroundImage: `url(${background.src})`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="w-screen h-screen z-0 bg-[rgba(0,0,0,0.7)] absolute"></div>

          <div className="grid grid-cols-2 h-full relative z-10 w-full">
            <motion.div
              className="h-full w-screen md:w-full  flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div style={{ transform: "translate(0,-30%)" }} className="pl-12">
                <h1 className="text-4xl font-georgia font-bold text-white md:text-7xl">
                  Introducing Minerva
                </h1>
                <h1 className="text-xl font-georgia font-light mt-8 mb-4 text-white md:text-3xl">
                  Bangalore&apos;s first student-run college newspaper
                </h1>
                <p className="text-md font-georgia font-light md:text-xl text-white">
                  We are a group of thinkers that challenge people through good
                  journalism.
                </p>
              </div>
            </motion.div>

            <div className=" items-end justify-end h-screen hidden md:flex">
              <div className="pb-8 pr-8 z-10">
                <Image className="w-auto h-auto " src={foreground}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row relative z-100 justify-center">
          <button className="z-90 absolute bottom-12 border p-4 rounded-full border-black bg-yellow">
            <BsArrowDown size={16} />
          </button>
          <button className="z-80 absolute bottom-11 border p-4 rounded-full border-black bg-blue">
            <BsArrowDown size={16} />
          </button>
          <button className="z-90 absolute bottom-10 border p-4 rounded-full border-black bg-pink">
            <BsArrowDown size={16} />
          </button>
        </div>
        <div className="px-0 bg-white dark:bg-greyBlack pt-8 sm:px-12">
          <div className="md:flex md:flex-row sm:flex sm:flex-col mt-16 ">
            <div className="basis-3/6">
              <UpdatedHeading># Trending</UpdatedHeading>
              {data[0] == undefined ? (
                <div></div>
              ) : (
                <div>
                  <UpdatedNewsCard
                    i={2}
                    imageURL={`${data[0].imageURL}`}
                    headline={`${data[0].title}`}
                    genre={`${data[0].genre}`}
                    date={`${data[0].createdAt}`}
                    desc={`${data[0].description}`}
                    id={`${data[0]._id}`}
                    newArticle={true}
                    bigger={true}
                  />
                  <UpdatedNewsCard
                    i={2}
                    imageURL={`${data[1].imageURL}`}
                    headline={`${data[1].title}`}
                    genre={`${data[1].genre}`}
                    date={`${data[1].createdAt}`}
                    desc={`${data[1].description}`}
                    id={`${data[1]._id}`}
                    newArticle={true}
                    bigger={true}
                  />
                </div>
              )}
            </div>
            <div className="basis-2/4 pl-3 pt-16 sm:flex sm:flex-col">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl text-#1D1D1D dark:text-white font-gilroy font-bold ml-8 ">
                  Recent News
                </h1>
                <Link
                  href={"/allnews"}
                  className=" text-otherblue dark:text-blue underline text-lg font-georgia pr-4 hover:text-hoverbeigeText sm:hidden "
                >
                  View More
                </Link>
              </div>
              <div className="sm:hidden">
                {" "}
                {/* Render carousel for small screens */}
                <Carousel
                  draggable={isSmallScreen ? true : false}
                  responsive={responsive}
                  showDots={isSmallScreen ? true : false}
                  customLeftArrow={<></>} // Hide the left arrow button
                  customRightArrow={<></>} // Hide the right arrow button
                  removeArrowOnDeviceType={["sm", "md"]}
                  className="py-4"
                >
                  {/* Render news cards as carousel items */}
                  {data.map((val, i) => (
                    <UpdatedNewsCard
                      key={i}
                      i={i}
                      imageURL={`${val.imageURL}`}
                      headline={`${val.title}`}
                      genre={`${val.genre}`}
                      date={`${val.createdAt}`}
                      desc={`${val.description}`}
                      id={`${val._id}`}
                      newArticle={true}
                      darkMode={
                        localStorage.getItem("mode") == "dark" ? true : false
                      }
                    />
                  ))}
                </Carousel>
              </div>
              <div
                style={{ maxHeight: "110vh" }}
                className=" hidden sm:block overflow-auto"
              >
                {data.slice(2, -1).map((val, i) => {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: -60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <UpdatedNewsCard
                        key={i}
                        i={i}
                        imageURL={`${val.imageURL}`}
                        headline={`${val.title}`}
                        genre={`${val.genre}`}
                        date={`${val.createdAt}`}
                        desc={`${val.description}`}
                        id={`${val._id}`}
                        newArticle={true}
                        horizontal={true}
                        darkMode={
                          localStorage.getItem("mode") == "dark" ? true : false
                        }
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden sm:flex w-full mt-8 justify-center">
            <div className="relative">
              <button
                class="bg-pink border border-black relative z-40 x-6 my-1  font-gilroy font-bolder rounded-md py-2 px-3 text-blackish hover:scale-105 transition duration-50 ease-linear"
                type="submit"
                onClick={() => {
                  router.push("/allnews", undefined, { scroll: false });
                }}
              >
                View More
              </button>
              <button className="bg-yellow border min-w-max border-black absolute top-1 left-1 z-30 x-6 my-1 font-merriweather font-small rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                View More
              </button>
              <button className="bg-blue border min-w-max border-black absolute top-2 left-2 z-20 x-6 my-1 font-merriweather font-small rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                View More
              </button>
            </div>
          </div>
          <motion.div
            className="bg-[#428797] dark:bg-yellowBackground p-8 my-24 w-full rounded-md"
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <UpdatedHeading>Our Timeline</UpdatedHeading>
            <div className="hidden sm:flex">
              <Timeline id="timeline" className="px-1 " position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent
                    className="pt-8 pb-32 font-typewritter"
                    color="text.secondary"
                  >
                    <h1 className="text-white">14th Apr 2023, 12:00pm</h1>
                    <h1 className="text-white">10th Floor, BE Block</h1>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot sx={{ width: "auto", padding: "0px" }}>
                      <Avatar className="w-14 h-14 sm:w-32 sm:h-32">
                        <Image src={event3}></Image>
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="py-8">
                    <h1 className="text-white font-semibold font-gilroy">
                      Runaway Runway
                    </h1>
                    <p className="font-georgia text-white">
                      Runway from buying expensive material in the name of
                      fashion run-towards sustainable and recyclable eco-chic
                      designs
                    </p>

                    <div>
                      <div className="relative">
                        <button
                          class="bg-pink border border-black font-gilroy font-bolder relative z-40 x-6 my-1 font-merriweather rounded-md py-2 px-3 text-blackish hover:scale-105 transition duration-50 ease-linear"
                          type="submit"
                          onClick={() => {
                            window.location.href =
                              "https://www.instagram.com/p/Cq0K-B-JLoC/?utm_source=ig_web_copy_link";
                          }}
                        >
                          View More
                        </button>
                        <button className="bg-yellow border border-black absolute top-1 left-1 z-30 x-6 my-1 font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                          View More
                        </button>
                        <button className="bg-blue border border-black absolute top-2 left-2 z-20 x-6 my-1 font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                          View More
                        </button>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    className="pt-8 pb-32 font-typewriter"
                    color="text.secondary"
                  >
                    <h1 className="text-white font-georgia">
                      8th Feb 2023, 2:45PM
                    </h1>
                    <h1 className="text-white font-georgia">
                      Seminar Hall 3,BE Block
                    </h1>
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
                    <h1 className="text-md font-gilroy text-white font-semibold">
                      Rethink Retrospect Reflect
                    </h1>
                    <h6 className="font-georgia text-white">
                      Watch the screenplay, write a report on it and stand a
                      chance to win Ant Man tickets!
                    </h6>
                    <div>
                      <div className="relative">
                        <button
                          class="bg-pink border border-black relative z-40 x-6 my-1 font-gilroy font-bolder rounded-md py-2 px-3 text-blackish hover:scale-105 transition duration-50 ease-linear"
                          type="submit"
                          onClick={() => {
                            window.location.href =
                              "https://www.instagram.com/p/CoSP_WVSf2k/?utm_source=ig_web_copy_link";
                          }}
                        >
                          View More
                        </button>
                        <button className="bg-yellow border border-black absolute top-1 -right-1 z-30 x-6 my-1 font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                          View More
                        </button>
                        <button className="bg-blue border border-black absolute top-2 -right-2 z-20 x-6 my-1 font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                          View More
                        </button>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    className="pt-8 pb-32 font-typewriter"
                    color="text.secondary"
                  >
                    <h1 className="text-white font-georgia">
                      12th Apr 2023, 2:45PM
                    </h1>
                    <h1 className="text-white font-georgia">MRD Auditorium</h1>
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
                    <h1 className="text-md font-semibold font-gilroy text-white">
                      Minerva Orientation
                    </h1>
                    <p className="font-georgia text-white">
                      Come learn more about what our club has in store for all
                      of you this year
                    </p>
                    <div>
                      <div className="relative">
                        <button
                          class="bg-pink border border-black font-gilroy font-bolder relative z-40 x-6 my-1 font-merriweather rounded-md py-2 px-3 text-blackish hover:scale-105 transition duration-50 ease-linear"
                          type="submit"
                          onClick={() => {
                            window.location.href =
                              "https://www.instagram.com/p/Cq0K-B-JLoC/?utm_source=ig_web_copy_link";
                          }}
                        >
                          View More
                        </button>
                        <button className="bg-yellow border border-black absolute top-1 left-1 z-30 x-6 my-1 font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                          View More
                        </button>
                        <button className="bg-blue border border-black absolute top-2 left-2 z-20 x-6 my-1 font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                          View More
                        </button>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
            <div className="flex sm:hidden">
              <Timeline
                id="timeline"
                className="px-1 "
                sx={{
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0,
                  },
                }}
              >
                <AnimatedTimelineItem
                  title={"Runaway Runway"}
                  time={"14th Apr 2023, 12:00pm"}
                  venue={"10th Floor, BE Block"}
                  desc={`Runway from buying expensive material in the name of
                        fashion run-towards sustainable and recyclable eco-chic
                        designs`}
                  img={event3}
                ></AnimatedTimelineItem>
                <AnimatedTimelineItem
                  title={"Rethink Retrospect Reflect"}
                  time={"8th Feb 2023, 2:45PM"}
                  venue={"Seminar Hall 3,BE Block"}
                  desc={`Watch the screenplay, write a report on it and stand a
                        chance to win Ant Man tickets!`}
                  img={event1}
                ></AnimatedTimelineItem>
                <AnimatedTimelineItem
                  title={"Minerva Orientation"}
                  time={"12th Apr 2023, 2:45PM"}
                  venue={"MRD Auditorium"}
                  desc={`Come learn more about what our club has in store for all
                        of you this year`}
                  img={event2}
                ></AnimatedTimelineItem>
              </Timeline>
            </div>
          </motion.div>
          <div id="featuringPES" className="flex">
            <UpdatedHeading>Featuring PESU</UpdatedHeading>
          </div>
          <Carousel
            draggable={isSmallScreen ? true : false}
            responsive={responsive}
            showDots={isSmallScreen ? true : false}
            customLeftArrow={isSmallScreen ? <></> : <CustomLeftArrow />} // Hide the left arrow button
            customRightArrow={isSmallScreen ? <></> : <CustomRightArrow />} // Hide the right arrow button
            className="py-3"
          >
            <div className="md:flex md:flex-row  sm:flex-col mx-10">
              <div className="basis-3/5 relative sm:hidden">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipP0ziHgkSGCOHH99LOGHUUie5kJDdmecp6zIosO=s1360-w1360-h1020"
                  className="w-full mt-8 mb-20 relative z-10 aspect-video"
                ></img>
                <div className="absolute w-full  md:mt-8 sm:mt-7  md:mb-24 sm:mb-14 z-0 bg-blue top-4 left-4 aspect-video"></div>
                <div className="absolute w-full md:mt-8 sm:mt-7 md:mb-24 sm:mb-14 z-0 bg-white dark:bg-black top-3 left-3 aspect-video"></div>
              </div>
              <div className="basis-2/5">
                <div className="pb-1">
                  <h4
                    /* style={{ width:"50%" }}*/
                    className="absolute z-20 md:w-50% sm:w-100% md:text-4xl sm:text-16px md:pt-3  md:pb-4 md:mx-8 sm:ml-10 text-[#428897] dark:text-blue font-han font-bold"
                  >
                    PESU SHINES UNDER CORI
                  </h4>
                </div>
                <p className="mx-3 mt-20 mb-5 sm:text-14px font-georgia text-#1D1D1D  dark:text-white">
                  Crucible of Research and Innovation
                  <a
                    className="underline"
                    onClick={() => {
                      window.location.href = "https://research.pes.edu/cori/";
                    }}
                  >
                    (CORI)
                  </a>
                  , headed by Dr. V. Sambasiva Rao is the research centre of
                  PESU where multidisciplinary research is carried out. A lot of
                  these projects are done under the guidance of professors like
                  Dr Manikandan J, for various other organizations like TCS and
                  ISRO. They work on multiple interesting projects involving
                  satellites, robots, sensors for detection, lifespan of
                  hardware used among other ideas. This provides an interesting
                  opportunity for students to explore the fields of research.
                </p>
              </div>
              <div className="basis-3/5 relative hidden sm:block">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipP0ziHgkSGCOHH99LOGHUUie5kJDdmecp6zIosO=s1360-w1360-h1020"
                  className="w-full mt-8 mb-24 relative z-10 aspect-video"
                ></img>
                <div className="absolute w-full  mt-8 mb-24 z-0 bg-blue top-4 left-4 aspect-video"></div>
                <div className="absolute w-full mt-8 mb-24 z-0 bg-white dark:bg-black top-3 left-3 aspect-video"></div>
              </div>
            </div>

            <div className="md:flex md:flex-row  sm:flex-col mx-10">
              <div className="basis-3/5 relative sm:hidden">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipP0ziHgkSGCOHH99LOGHUUie5kJDdmecp6zIosO=s1360-w1360-h1020"
                  className="w-full mt-8 mb-20 relative z-10 aspect-video"
                ></img>
                <div className="absolute w-full  md:mt-8 sm:mt-7  md:mb-24 sm:mb-14 z-0 bg-blue top-4 left-4 aspect-video"></div>
                <div className="absolute w-full md:mt-8 sm:mt-7 md:mb-24 sm:mb-14 z-0 bg-white dark:bg-black top-3 left-3 aspect-video"></div>
              </div>
              <div className="basis-2/5">
                <div className="pb-1">
                  <h4
                    /* style={{ width:"50%" }}*/
                    className="absolute z-20 md:w-50% sm:w-100% md:text-4xl sm:text-16px md:pt-3  md:pb-4 md:mx-8 sm:ml-10 text-[#428897] dark:text-blue font-han font-bold"
                  >
                    PESU SHINES UNDER CORI
                  </h4>
                </div>
                <p className="mx-3 mt-20 sm:text-14px font-georgia text-#1D1D1D  dark:text-white">
                  Crucible of Research and Innovation
                  <a
                    className="underline"
                    onClick={() => {
                      window.location.href = "https://research.pes.edu/cori/";
                    }}
                  >
                    (CORI)
                  </a>
                  , headed by Dr. V. Sambasiva Rao is the research centre of
                  PESU where multidisciplinary research is carried out. A lot of
                  these projects are done under the guidance of professors like
                  Dr Manikandan J, for various other organizations like TCS and
                  ISRO. They work on multiple interesting projects involving
                  satellites, robots, sensors for detection, lifespan of
                  hardware used among other ideas. This provides an interesting
                  opportunity for students to explore the fields of research.
                </p>
              </div>
              <div className="basis-3/5 relative hidden sm:block">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipP0ziHgkSGCOHH99LOGHUUie5kJDdmecp6zIosO=s1360-w1360-h1020"
                  className="w-full mt-8 mb-24 relative z-10 aspect-video"
                ></img>
                <div className="absolute w-full  mt-8 mb-24 z-0 bg-blue top-4 left-4 aspect-video"></div>
                <div className="absolute w-full mt-8 mb-24 z-0 bg-white dark:bg-black top-3 left-3 aspect-video"></div>
              </div>
            </div>
          </Carousel>

          <Contact />

          <Footer />
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Transition appear show={openDialogue} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel
                      className={`w-full max-w-4xl rounded-none ${
                        dark ? "bg-greyBlack" : "bg-backgroundModal"
                      } transform overflow-hidden p-10 text-left align-middle shadow-xl transition-all`}
                    >
                      <div className="grid grid-cols-2">
                        <UpdatedHeading>Join Our Newsletter</UpdatedHeading>
                        <div className="flex flex-col pt-4 items-end relative">
                          <div
                            style={{ color: dark ? "black" : "white" }}
                            onClick={handleClose}
                            className={`absolute z-10 top-5 -right-1 border   border-otherblue p-1   ${
                              dark ? "bg-greyBlack" : "bg-backgroundModal"
                            }`}
                          >
                            <GrClose
                              style={{
                                background: dark ? "black" : "white",
                                fill: dark ? "black" : "white",
                              }}
                              className={`  ${
                                dark ? "text-white" : "text-greyBlack"
                              }`}
                            />
                          </div>
                          <div
                            style={{ color: dark ? "black" : "white" }}
                            onClick={handleClose}
                            className={`border z-20 relative border-softViolet p-1   ${
                              dark ? "bg-greyBlack" : "bg-backgroundModal"
                            }`}
                          >
                            <IoMdClose
                              className={`${
                                dark ? "text-white" : "text-black"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div className=" flex items-center h-64 sm:h-full justify-center sm:justify-start">
                          <Image
                            className="scale-75"
                            src={dark ? event7 : event6}
                          ></Image>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-col sm:pt-4 items-start sm:items-end relative">
                            <h1
                              className={`text-black sm:mt-8 font-questrial font-semibold text-md ${
                                dark ? "text-white" : "text-black"
                              }`}
                            >
                              <span className="text-londonYellow dark:text-yellow">
                                Subscribe
                              </span>{" "}
                              to our newsletter
                            </h1>
                            <h1
                              className={`text-black font-questrial font-semibold text-md dark:text-white  ${
                                dark ? "text-white" : "text-black"
                              }`}
                            >
                              for the latest articles and{" "}
                              <span className="text-otherblue dark:text-blue">
                                exclusive content
                              </span>
                            </h1>
                            <TextField
                              InputProps={{
                                style: {
                                  borderRadius: "0",
                                  color: "black",
                                  background: "white",
                                  border: "black",
                                },
                              }}
                              color="secondary"
                              placeholder="Name"
                              className="font-georgia text-md w-full mt-6 py-3 text-black border border-black placeholder:text-gray-500  outline-none focus:ring-black focus:border-black focus:ring-1 drop-shadow-[8px_8px_0px_rgba(222,153,255,1)]"
                            ></TextField>
                            <TextField
                              InputProps={{
                                style: {
                                  borderRadius: "0",
                                  color: "black",
                                  background: "white",
                                },
                              }}
                              placeholder="Email"
                              className="font-georgia w-full text-md mt-6 py-3 text-black border border-black placeholder:text-gray-500  outline-none focus:ring-black focus:border-black focus:ring-1 drop-shadow-[8px_8px_0px_rgba(159,225,240,1)]"
                            ></TextField>
                          </div>
                          <div className="mt-6 relative">
                            <button className="bg-yellow text-md z-10 px-6 top-2 left-2 rounded-lg  py-2 border border-black font-questrial  font-semibold hover:bg-hoverbeigeText absolute">
                              Subscribe
                            </button>
                            <button className="bg-blue z-30 text-md px-6 top-1 left-1 rounded-lg  py-2 border border-black font-questrial  font-semibold hover:bg-hoverbeigeText absolute">
                              Subscribe
                            </button>
                            <button
                              className="bg-pink px-6 text-md z-40 rounded-lg relative  py-2 border border-black font-questrial  font-semibold hover:bg-hoverbeigeText"
                              onClick={async () => {
                                try {
                                  const response = await axios.post(
                                    "/api/contactUs",
                                    data
                                  );
                                  console.log(response);
                                  if ((response.data = "Finished")) {
                                    alert("Thank you for your response!");
                                  }
                                } catch (e) {
                                  alert("Failed to send.");
                                }
                                setData({
                                  Name: "",
                                  Email: "",
                                  Subject: "",
                                  Message: "",
                                });
                              }}
                            >
                              Subscribe
                            </button>
                            <button></button>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  );
}
