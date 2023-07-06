import Footer from "./Footer";
import NewsCard from "./NewsCard";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { BsArrowDown } from "react-icons/bs";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Contact from "./ContactUs";
import { motion, transform } from "framer-motion";
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
import UpdatedNewsCard from "./UpdatedNewsCard";
import UpdatedHeading from "@/animatedComponents/UpdatedHeading";
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
      limit: 9,
    });
    setOpen(false);
    console.log(response.data);
    setData([...response.data]);
  }
  return (
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
      <div className="px-0 bg-greyBlack pt-8 sm:px-12">
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
              <h1 className="text-3xl text-white font-gilroy font-bold ml-8">
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
              class="bg-pink border border-black relative z-40 x-6 my-1 drop-shadow-xl hover:drop-shadow-xl font-gilroy font-bolder rounded-md py-2 px-3 text-blackish hover:scale-105 transition duration-50 ease-linear"
              type="submit"
              onClick={() => {
                router.push("/allnews", undefined, { scroll: false });
              }}
            >
              View More
            </button>
            <button className="bg-yellow border min-w-max border-black absolute top-1 left-1 z-30 x-6 my-1 drop-shadow-xl hover:drop-shadow-xl font-merriweather font-small rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
              View More
            </button>
            <button className="bg-blue border min-w-max border-black absolute top-2 left-2 z-20 x-6 my-1 drop-shadow-xl hover:drop-shadow-xl font-merriweather font-small rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
              View More
            </button>
          </div>
        </div>
        <motion.div
          className="bg-yellowBackground p-8 my-24 w-full rounded-md"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <UpdatedHeading>Our Timeline</UpdatedHeading>
          <Timeline id="timeline" className="px-1 " position="alternate">
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
                      class="bg-pink border border-black font-gilroy font-bolder relative z-40 x-6 my-1 drop-shadow-xl hover:drop-shadow-xl font-merriweather rounded-md py-2 px-3 text-blackish hover:scale-105 transition duration-50 ease-linear"
                      type="submit"
                      onClick={() => {
                        window.location.href =
                          "https://www.instagram.com/p/Cq0K-B-JLoC/?utm_source=ig_web_copy_link";
                      }}
                    >
                      View More
                    </button>
                    <button className="bg-yellow border border-black absolute top-1 left-1 z-30 x-6 my-1 drop-shadow-xl hover:drop-shadow-xl font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                      View More
                    </button>
                    <button className="bg-blue border border-black absolute top-2 left-2 z-20 x-6 my-1 drop-shadow-xl hover:drop-shadow-xl font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
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
                  Watch the screenplay, write a report on it and stand a chance
                  to win Ant Man tickets!
                </h6>
                <div>
                  <div className="relative">
                    <button
                      class="bg-pink border border-black relative z-40 x-6 my-1 drop-shadow-xl hover:drop-shadow-xl font-gilroy font-bolder rounded-md py-2 px-3 text-blackish hover:scale-105 transition duration-50 ease-linear"
                      type="submit"
                      onClick={() => {
                        window.location.href =
                          "https://www.instagram.com/p/CoSP_WVSf2k/?utm_source=ig_web_copy_link";
                      }}
                    >
                      View More
                    </button>
                    <button className="bg-yellow border border-black absolute top-1 -right-1 z-30 x-6 my-1 drop-shadow-xl hover:drop-shadow-xl font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
                      View More
                    </button>
                    <button className="bg-blue border border-black absolute top-2 -right-2 z-20 x-6 my-1 drop-shadow-xl hover:drop-shadow-xl font-gilroy font-bold rounded-md py-2 px-3 text-black hover:scale-105 transition duration-50 ease-linear">
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
        <div className="flex flex-row">
          <div className="basis-2/5">
            <h4
              style={{ width: "50%" }}
              className="absolute text-4xl pt-3 pb-4 mx-8 text-blue font-han font-bold"
            >
              PESU SHINES UNDER CORI
            </h4>
            <p className="mx-8 mt-24 font-georgia text-white">
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
              other ideas. This provides an interesting opportunity for students
              to explore the fields of research.
            </p>
          </div>
          <div className="basis-3/5">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipP0ziHgkSGCOHH99LOGHUUie5kJDdmecp6zIosO=s1360-w1360-h1020"
              className="w-full mt-8 mb-24 aspect-video"
            ></img>
          </div>
        </div>

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
