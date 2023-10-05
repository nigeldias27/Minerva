import Headers from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import Menu from "@mui/material/Menu";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import { MdKeyboardDoubleArrowRight, MdCheck } from "react-icons/md";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ListItemIcon from "@mui/material/ListItemIcon";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";
import UpdatedNewsCard from "@/components/UpdatedNewsCard";
import UpdatedHeading from "@/animatedComponents/UpdatedHeading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Head from "next/head";
const CustomLeftArrow = ({ onClick }) => (
  <div
    onClick={() => onClick()}
    className="w-10 h-10 relative z-50 bg-pink react-multiple-carousel__arrow hidden md:flex"
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
    className="w-1 h-1 relative z-50 bg-pink react-multiple-carousel__arrow right-0 hidden md:flex"
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
export default function News() {
  const [previousChecker, setPrevious] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    localStorage.getItem("mode") == "dark" ? setDark(true) : setDark(false);
  }, []);
  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }
  function getMinAndMax(dates) {
    var result = {};
    for (var fullDate in dates) {
      // var thisDate = dates[index],
      // dateParts = thisDate.split(/\//),
      // fullDate = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
      if (!result["max"] || fullDate > result["max"]) {
        result["min"] = dates[fullDate];
      }
      if (!result["min"] || fullDate < result["min"]) {
        result["max"] = dates[fullDate];
      }
    }

    return result;
  }
  function isSameWeek1(dates) {
    var today = new Date();
    var minAndMax = getMinAndMax([parseISOString(dates.createdAt), today]),
      dayOfWeek = {};

    dayOfWeek["min"] = minAndMax["min"].getDay();
    dayOfWeek["max"] = minAndMax["max"].getDay();

    if (
      minAndMax["max"] - minAndMax["min"] > 518400000 ||
      dayOfWeek["min"] > dayOfWeek["max"]
    ) {
      return false;
    }
    return true;
  }
  function isSameWeek2(dates) {
    var today = new Date();
    var minAndMax = getMinAndMax([parseISOString(dates.createdAt), today]),
      dayOfWeek = {};

    dayOfWeek["min"] = minAndMax["min"].getDay();
    dayOfWeek["max"] = minAndMax["max"].getDay();

    if (
      minAndMax["max"] - minAndMax["min"] > 518400000 ||
      dayOfWeek["min"] > dayOfWeek["max"]
    ) {
      return true;
    }
    return false;
  }
  const responsive = {
    desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 430 },
      items: 8,
    },
    mobile: {
      breakpoint: { max: 430, min: 320 },
      items: 3,
    },
    smallMobile: {
      breakpoint: { max: 320, min: 0 },
      items: 3,
    },
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState([]);
  const [news, setNews] = useState([]);
  const [openLoad, setOpenLoad] = useState(false);
  const [check, setCheck] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const open = Boolean(anchorEl);
  const genreList = [
    "World",
    "India",
    "Local",
    "Business",
    "Finance",
    "Sports",
    "Technology",
    "Lifestyle",
    "Science",
    "Entertainment",
  ];

  useEffect(() => {
    initState();
  }, [check]);

  function getReadTime(contents) {
    // assuming 150 words per minute
    return Math.round(contents.split(/\w+/g).length / 150) || 1;
  }

  async function initState() {
    var selectedGenres = [];
    for (let i = 0; i < check.length; i++) {
      const element = check[i];
      if (element == true) {
        selectedGenres.push(genreList[i]);
      }
    }
    console.log(selectedGenres);
    setOpenLoad(true);
    const response = await axios.post("/api/articles", {
      selectedGenres: selectedGenres,
    });
    setOpenLoad(false);
    console.log(response.data);
    setData([...response.data]);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={` min-h-screen ${dark ? "dark" : ""}`}>
      <NextSeo
        title="News - Minerva PESU"
        description="We are a group of thinkers that challenge people through good journalism. We strive to provide the required tools and knowledge to develop skills and Inspire change."
        canonical="https://minervapesu.vercel.app/allnews"
        openGraph={{
          url: "https://minervapesu.vercel.app/allnews",
          title: "News - Minerva PESU",
          description:
            "We are a group of thinkers that challenge people through good journalism. We strive to provide the required tools and knowledge to develop skills and Inspire change.",
          siteName: "Minerva PESU",
        }}
      />
      <Head>
        <title>News</title>
      </Head>
      <Headers dark={dark} setDark={setDark} />
      <div className="px-0 relative pt-8 bg-#FCF7FF dark:bg-greyBlack md:px-12">
        <div className="flex flex-row w-full justify-between items-start px-0">
          <UpdatedHeading>News</UpdatedHeading>
        </div>
        <Carousel
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          responsive={responsive}
        >
          {genreList.map((v, i) => {
            return (
              <div
                key={i}
                className="py-2 px-5 sm:p-0 flex justify-center items-center"
              >
                <button class="py-0.5 mx-1 sm:px-1 flex w-full text-center whitespace-nowrap bg-white dark:bg-greyBlack  text-black dark:text-white rounded-[4px] border border-black dark:border-white hover:dark:border-yellow hover:border-londonYellow hover:shadow-xl font-georgia font-semibold">
                  <p className="flex justify-center items-center w-full text-[10px]">
                    {v}
                  </p>
                </button>
              </div>
            );
          })}
        </Carousel>
        <h2 className="font-han px-8 mt-6 text-[1.375rem] py-4 dark:text-white text-greyBlack">
          This week
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {data.filter(isSameWeek1).map((val, i) => {
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
                  imageURL={`${val.imageURL}`}
                  headline={`${val.title}`}
                  writerName={`${val.writerName}`}
                  genre={`${val.genre}`}
                  i={i}
                  date={`${val.createdAt}`}
                  desc={`${val.description}`}
                  id={`${val._id}`}
                  newArticle={true}
                  thisweek={true}
                  readTime={getReadTime(val.data)}
                  darkMode={
                    localStorage.getItem("mode") == "dark" ? true : false
                  }
                />
              </motion.div>
            );
          })}
        </div>
        <div className="flex mt-8 justify-center">
          <div
            style={{ height: "2px", width: "80vw" }}
            className=" bg-gray-500"
          ></div>
        </div>

        <h2 className="font-han mt-4 text-[1.375rem] px-8 md:px-10 py-4 dark:text-white text-greyBlack">
          Previously
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {data.filter(isSameWeek2).map((val, i) => {
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
                  imageURL={`${val.imageURL}`}
                  headline={`${val.title}`}
                  writerName={`${val.writerName}`}
                  genre={`${val.genre}`}
                  i={i}
                  date={`${val.createdAt}`}
                  desc={`${val.description}`}
                  id={`${val._id}`}
                  newArticle={true}
                  hideDate={true}
                  thisweek={false}
                  horizontal={true}
                  hideShadow={true}
                  darkMode={
                    localStorage.getItem("mode") == "dark" ? true : false
                  }
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      <Footer />

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoad}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
