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
import logo from "../public/assets/logo.png";
import Image from "next/image";
import event1 from "../public/assets/minerva_event_1.jpeg";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
export default function HomeComponent() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

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
    <div className="px-0 mt-8 sm:px-48">
      <h1 className="text-3xl font-bold px-8 mt-24 mb-8 sm:px-0">
        Recent News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {data.map((val, i) => {
          return (
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
          );
        })}
      </div>
      <div className="flex w-full justify-center">
        <button
          class="x-6 my-8 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-gray-800 to-blackButton py-3 px-8 text-beigeText"
          type="submit"
          onClick={() => {
            router.push("/allnews");
          }}
        >
          <span className="text-xl">View More</span>
        </button>
      </div>
      <div className="bg-yellowBackground p-8 my-24 w-full rounded-md">
        <h1 className="text-3xl font-bold mb-8">Our Timeline</h1>
        <Timeline className="px-1" position="alternate">
          <TimelineItem>
            <TimelineOppositeContent className="py-8" color="text.secondary">
              <h1>8th Mar 2023, 2:30PM</h1>
              <h1>Seminar Hall 1,BE Block</h1>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ padding: "0px" }}>
                <Avatar className="w-14 h-14 sm:w-24 sm:h-24">
                  <Image src={event1}></Image>
                </Avatar>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="py-8">
              <h1 className="text-md font-semibold">Minerva Orientation</h1>
              <p>
                Come learn more about what our club has in store for all of you
                this year
              </p>
              <button
                class="x-6 my-1 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-gray-800 to-blackButton py-2 px-3 text-beigeText"
                type="submit"
                onClick={() => {}}
              >
                <span className="text-sm">View More</span>
              </button>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className="py-8" color="text.secondary">
              <h1>8th Feb 2023, 2:45PM</h1>
              <h1>Seminar Hall 3,BE Block</h1>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ padding: "0px" }}>
                <Avatar className="w-14 h-14 sm:w-24 sm:h-24">
                  <Image src={event1}></Image>
                </Avatar>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="py-8">
              <h1 className="text-md font-semibold">
                Rethink Retrospect Reflect
              </h1>
              <h6>
                Watch the screenplay, write a report on it and stand a chance to
                win Ant Man tickets!
              </h6>
              <button
                class="x-6 my-1 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-gray-800 to-blackButton py-2 px-3 text-beigeText"
                type="submit"
                onClick={() => {}}
              >
                <span className="text-sm">View More</span>
              </button>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <h1 className="text-3xl font-bold my-8 mx-8">Featuring PES</h1>
      <h4 className="font-bold text-lg pb-4 mx-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </h4>
      <p className="mx-8">
        Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
        ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
        quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
        vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
        vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
        porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non
        ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia.
        Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem
        condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi,
        ac posuere leo. Nam pulvinar blandit velit, id condimentum diam faucibus
        at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue
        felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non
        odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque,
        pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus
        tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat
        sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus
        dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem.
        Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus
        vitae justo pharetra consequat.{" "}
      </p>
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
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
  );
}
