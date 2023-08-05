// A id of a particular article is obtained from the query part of the url and is used to get the article which is saved in "data"
//The Article's data is rendered using markdown-it library
import Footer from "@/components/Footer";
import Headers from "@/components/Header";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import md from "markdown-it";
import axios from "axios";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { BsArrowDown } from "react-icons/bs";
import { motion, useScroll } from "framer-motion";
import { blue } from "@mui/material/colors";
import UpdatedNewsCard from "../../components/UpdatedNewsCard";
import Carousel from "react-multi-carousel";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

export default function Article() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  const [recentNews, setRecentNews] = useState([]);
  const [slicedData, setSlicedData] = useState("");
  const [isSliced, setIsSliced] = useState(true);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [articleGenre, setArticleGenre] = useState()
  // const [scrollY, setScrollY] = useState();
  const isSmallScreen = useMediaQuery({ maxWidth: 429 });

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

  var offsetScrollY;
  useEffect(() => {
    initState();
    // window.addEventListener('scroll', handleScroll);
  }, [isSliced]);

  useEffect(()=>{
    getRecentNews();
  }, [articleGenre])

  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }

  async function initState() {
    setOpen(true);
    const response = await axios.post("/api/getParticularArticle", { id: id });
    setOpen(false);
    setTimeout(()=>{setArticleGenre(response.data.article.genre);}, 1000);
    console.log(response.data.article.genre);
    setData({ ...response.data });

    let sliced = response.data.article.data;
    sliced = sliced.slice(0, 1000) + " ...";
    console.log(sliced);
    setSlicedData(sliced);

    // console.log("<><><><><><><><><><>")
    // console.log(">"+articleGenre+"<")
    // console.log("<><><><><><><><><><>")

    console.log(isSliced);
  }

  async function getRecentNews() {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+articleGenre)
    setOpen(true);
    const response = await axios.post("/api/articles", {
      selectedGenres: [articleGenre],
      limit: 5,
    });
    setOpen(false);
    console.log(response.data);
    setRecentNews([...response.data]);
  }

  const continueReading = () => {
    setIsSliced(false);
    console.log(isSliced);
    console.log("==========");
    console.log(data);
  };

  // const handleScroll = () => {
  //   setScrollY(scrollYProgress.current*window.innerWidth);
  // }

  return (
    <div className="lg:min-h-screen">
      <Headers dark={false} />
      <div>
        <motion.div
          style={{
            background: "#B18516",
            zIndex: "10",
            height: "0.75rem",
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            transformOrigin: "0%",
            scaleX: scrollYProgress,
            borderTopRightRadius: "1rem",
            borderBottomRightRadius: "1rem",
            display: isSliced ? "none" : "flex",
          }}
        ></motion.div>
        {/* <div style={{
          background: "#B18516",
          zIndex: "11",
          width: "0.75rem",
          height: "0.75rem",
          position: "fixed",
          top: "0",
          borderRadius: "50%",
          left: scrollY
        }}
        ></div> */}
      </div>

      <div className="ml-10 sm:ml-5 sm:mt-6 md:ml-5 md:mt-6 lg:ml-24">
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center">
          <h2 className="w-screen justify-start text-xs sm:text-sm md:text-sm lg:text-base font-bold font-gilroy sm:w-36 md:w-36 lg:w-screen">
            {data.article == undefined
              ? ""
              : parseISOString(data.article.createdAt)
                  .toUTCString()
                  .split(",")[1]
                  .split(":")[0]
                  .slice(0, -3)}
          </h2>
          {/* <div className="ml-10 sm:ml-0 md:ml-0 lg:ml-0"></div> */}
          <div className="flex flex-row w-screen justify-end mr-20 sm:w-screen text-londonYellow text-xs sm:justify-end sm:mr-5 sm:text-xs md:text-base lg:text-lg md:w-screen md:justify-end md:mr-5 lg:mr-32">
            <div className="flex flex-row h-min items-center">
              <h1 className="mr-1 sm:mr-2 md:mr-2 lg:mr-2 font-gilroy">
                {data.writerName} |{" "}
                {data.article == undefined ? "" : data.article.genre}
              </h1>
              <Avatar className="w-7 h-7 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10" src={`${data.profileURL}`}></Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pr-5 pl-5 lg:mt-4 lg:flex-row">
        <div className="lg:basis-1/4 lg:translate-x-1/4">
          <h1
            className="translate-y-1/3 sm:text-2xl md:text-2xl lg:text-4xl text-white font-gilroy font-bold"
            style={{
              fontWeight: "700",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "black",
            }}
          >
            {data.article == undefined ? "" : data.article.title.toUpperCase()}
          </h1>
        </div>
        <div className="lg:basis-1/2 lg:mt-16">
          <img
            width={"100%"}
            src={`${data.article == undefined ? "" : data.article.imageURL}`}
          ></img>
          <article className="sm: prose sm: max-w-full sm: pt-12 ">
            <div
              className="font-georgia"
              dangerouslySetInnerHTML={{
                __html: md({ html: true, typographer: true }).render(
                  data.article == undefined
                    ? ""
                    : isSliced
                    ? slicedData
                    : data.article.data
                ),
              }}
            />
          </article>
        </div>
      </div>
      {isSliced ? (
        <div className="-translate-y-24">
          <div className="h-24 bg-white blur-2xl"></div>
          <div className="h-24">
            <div className="flex w-full mt-8 underline underline-offset-8 justify-center">
              Continue Reading
            </div>
            <div className="flex flex-row relative mt-32 z-100 justify-center">
              <button
                onClick={continueReading}
                className="z-50 absolute bottom-10 border p-4 rounded-full border-black bg-pink"
              >
                <BsArrowDown size={16} />
              </button>
              <button className="z-90 absolute bottom-12 border p-4 rounded-full border-black bg-yellow">
                <BsArrowDown size={16} />
              </button>
              <button className="z-90 absolute bottom-11 border p-4 rounded-full border-black bg-blue">
                <BsArrowDown size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div style={{height: "3rem", display: isSliced ? "none" : "flex"}}></div>

      <div>
        <h1 className="text-xl sm:text-2xl font-gilroy font-bold md:hidden lg:hidden pl-5">
          Similar News
        </h1>
      </div>

      <div className="md:hidden lg:hidden pr-5 pl-5 pb-5">
        {" "}
        {/* Render carousel for small screens */}
        <Carousel
          draggable={isSmallScreen ? true : false}
          responsive={responsive}
          showDots={isSmallScreen ? true : false}
          customLeftArrow={<></>} // Hide the left arrow button
          customRightArrow={<></>} // Hide the right arrow button
          removeArrowOnDeviceType={["sm", "md"]}
          className="pb-5"
        >
          {/* Render news cards as carousel items */}
          {recentNews.map((val, i) => (
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

      <div>
        <Footer />
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
