import Footer from "./Footer";
import NewsCard from "./NewsCard";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Backdrop from "@mui/material/Backdrop";
import Dialog from "@mui/material/Dialog";
import event6 from "../public/assets/newsletter.png";
import event7 from "../public/assets/newsletter_dark.png";
import { GrClose } from "react-icons/gr";
import CircularProgress from "@mui/material/CircularProgress";
import Contact from "./ContactUs";
import { motion, transform } from "framer-motion";
import Image from "next/image";
import event1 from "../public/assets/minerva_event_1.jpeg";
import event2 from "../public/assets/orientation.jpeg";
import event3 from "../public/assets/runway.jpeg";
import background from "../public/assets/background.png";
import foreground from "../public/assets/foreground.png";
import { Avatar, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AnimatedHeading from "@/animatedComponents/Heading";
import UpdatedNewsCard from "./UpdatedNewsCard";
import UpdatedHeading from "@/animatedComponents/UpdatedHeading";
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
  const [dark, setDark] = useState();
  const [openDialogue, setOpenDialogue] = useState(false);
  const handleClickOpen = () => {
    setOpenDialogue(true);
  };

  const handleClose = (value) => {
    setOpenDialogue(false);
  };
  useEffect(() => {
    setOpenDialogue(true);
    initState();
  }, []);
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
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      className={
        typeof window !== "undefined"
          ? localStorage.getItem("mode") == "dark"
            ? "dark"
            : ""
          : ""
      }
    >
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

            <div className=" items-end justify-end h-screen md:flex">
              <div className="pb-8 pr-8 z-10">
                <Image className="w-auto h-auto " src={foreground}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row relative z-100 justify-center">
          <button className="z-50 absolute bottom-10 border p-4 rounded-full border-black bg-pink">
            <BsArrowDown size={16} />
          </button>
          <button className="z-90 absolute bottom-12 border p-4 rounded-full border-black bg-yellow">
            <BsArrowDown size={16} />
          </button>
          <button className="z-90 absolute bottom-11 border p-4 rounded-full border-black bg-blue">
            <BsArrowDown size={16} />
          </button>
        </div>
        <div className="px-0 bg-white dark:bg-greyBlack pt-8 sm:px-12">
          <div className="flex flex-row mt-16 ">
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
            <div className="basis-2/4 pl-16 pt-16">
              <div>
                <h1 className="text-3xl text-#1D1D1D dark:text-white font-gilroy font-bold ml-8">
                  Recent News
                </h1>
              </div>
              <div style={{ maxHeight: "110vh" }} className="overflow-auto">
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

          <div className="flex w-full mt-8 justify-center">
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
                    Runway from buying expensive material in the name of fashion
                    run-towards sustainable and recyclable eco-chic designs
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
                    Come learn more about what our club has in store for all of
                    you this year
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
          </motion.div>
          <div id="featuringPES">
            <UpdatedHeading>Featuring PESU</UpdatedHeading>
          </div>
          <Carousel
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          responsive={responsive}
          className="py-4"
        >
          <div className="flex flex-row mx-20">
            <div className="basis-2/5">
              <h4
                style={{ width: "50%" }}
                className="absolute z-20 text-4xl pt-3 pb-4 mx-8 text-[#428897] dark:text-blue font-han font-bold"
              >
                PESU SHINES UNDER CORI
              </h4>
              <p className="mx-8 mt-24 font-georgia text-#1D1D1D  dark:text-white">
                Crucible of Research and Innovation
                <a
                  className="underline"
                  onClick={() => {
                    window.location.href = "https://research.pes.edu/cori/";
                  }}
                >
                  (CORI)
                </a>
                , headed by Dr. V. Sambasiva Rao is the research centre of PESU
                where multidisciplinary research is carried out. A lot of these
                projects are done under the guidance of professors like Dr
                Manikandan J, for various other organizations like TCS and ISRO.
                They work on multiple interesting projects involving satellites,
                robots, sensors for detection, lifespan of hardware used among
                other ideas. This provides an interesting opportunity for
                students to explore the fields of research.
              </p>
            </div>
            <div className="basis-3/5 relative">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipP0ziHgkSGCOHH99LOGHUUie5kJDdmecp6zIosO=s1360-w1360-h1020"
                className="w-full mt-8 mb-24 relative z-10 aspect-video"
              ></img>
              <div className="absolute w-full  mt-8 mb-24 z-0 bg-blue top-4 left-4 aspect-video"></div>
              <div className="absolute w-full mt-8 mb-24 z-0 bg-white dark:bg-black top-3 left-3 aspect-video"></div>
            </div>
          </div>

          <div className="flex flex-row mx-20">
            <div className="basis-2/5">
              <h4
                style={{ width: "50%" }}
                className="absolute z-20 text-4xl pt-3 pb-4 mx-8 text-[#428897] dark:text-blue font-han font-bold"
              >
                PESU SHINES UNDER CORI
              </h4>
              <p className="mx-8 mt-24 font-georgia text-#1D1D1D  dark:text-white">
                Crucible of Research and Innovation
                <a
                  className="underline"
                  onClick={() => {
                    window.location.href = "https://research.pes.edu/cori/";
                  }}
                >
                  (CORI)
                </a>
                , headed by Dr. V. Sambasiva Rao is the research centre of PESU
                where multidisciplinary research is carried out. A lot of these
                projects are done under the guidance of professors like Dr
                Manikandan J, for various other organizations like TCS and ISRO.
                They work on multiple interesting projects involving satellites,
                robots, sensors for detection, lifespan of hardware used among
                other ideas. This provides an interesting opportunity for
                students to explore the fields of research.
              </p>
            </div>
            <div className="basis-3/5 relative">
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
          <Dialog
            fullWidth={true}
            maxWidth={"lg"}
            onClose={handleClose}
            open={openDialogue}
          >
            <div
              className={`grid grid-cols-2 p-10  ${
                typeof window !== "undefined"
                  ? localStorage.getItem("mode") == "dark"
                    ? "bg-greyBlack"
                    : ""
                  : ""
              }`}
            >
              <div>
                <UpdatedHeading>Join Our Newsletter</UpdatedHeading>
                <div className="ml-8">
                  <Image
                    src={
                      typeof window !== "undefined"
                        ? localStorage.getItem("mode") == "dark"
                          ? event7
                          : event6
                        : event6
                    }
                  ></Image>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col pt-4 items-end relative">
                  <div
                    style={{ color: "white" }}
                    onClick={handleClose}
                    className={`absolute z-10 top-5 -right-1 border bg-white border-otherblue p-1   ${
                      typeof window !== "undefined"
                        ? localStorage.getItem("mode") == "dark"
                          ? "bg-greyBlack"
                          : ""
                        : ""
                    }`}
                  >
                    <GrClose
                      style={{
                        background: "white",
                        fill: "white",
                      }}
                      className={`  ${
                        typeof window !== "undefined"
                          ? localStorage.getItem("mode") == "dark"
                            ? "text-white"
                            : "text-greyBlack"
                          : "text-greyBlack"
                      }`}
                    />
                  </div>
                  <div
                    style={{ color: "white" }}
                    onClick={handleClose}
                    className={`border z-20 relative border-softViolet bg-white p-1   ${
                      typeof window !== "undefined"
                        ? localStorage.getItem("mode") == "dark"
                          ? "bg-greyBlack"
                          : ""
                        : ""
                    }`}
                  >
                    <IoMdClose
                      className={`${
                        typeof window !== "undefined"
                          ? localStorage.getItem("mode") == "dark"
                            ? "text-white"
                            : "text-black"
                          : "text-black"
                      }`}
                    />
                  </div>

                  <h1
                    className={`text-black mt-8 font-han text-md font-light ${
                      typeof window !== "undefined"
                        ? localStorage.getItem("mode") == "dark"
                          ? "text-white"
                          : "text-black"
                        : "text-black"
                    }`}
                  >
                    <span className="text-londonYellow dark:text-yellow">
                      Subscribe
                    </span>{" "}
                    to our newsletter
                  </h1>
                  <Typography
                    className={`text-black font-han font-light dark:text-white  ${
                      typeof window !== "undefined"
                        ? localStorage.getItem("mode") == "dark"
                          ? "text-white"
                          : "text-black"
                        : "text-black"
                    }`}
                  >
                    for the latest articles and{" "}
                    <span className="text-otherblue dark:text-blue">
                      exclusive content
                    </span>
                  </Typography>
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
                  <button className="bg-yellow text-md z-10 px-6 top-2 left-2 rounded-lg  py-2 border border-black font-han hover:bg-hoverbeigeText absolute">
                    Subscribe
                  </button>
                  <button className="bg-blue z-30 text-md px-6 top-1 left-1 rounded-lg  py-2 border border-black font-han hover:bg-hoverbeigeText absolute">
                    Subscribe
                  </button>
                  <button
                    className="bg-pink px-6 text-md z-40 rounded-lg relative font-light  py-2 border border-black font-han hover:bg-hoverbeigeText"
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
          </Dialog>
        </div>
      </div>
    </div>
  );
}
