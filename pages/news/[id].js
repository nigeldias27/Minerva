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

export default function Article() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  const [recentNews, setRecentNews] = useState([]);
  const [slicedData, setSlicedData] = useState("");
  const [isSliced, setIsSliced] = useState(true);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    initState();
    getRecentNews();
  }, [isSliced]);
  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }
  async function initState() {
    setOpen(true);
    const response = await axios.post("/api/getParticularArticle", { id: id });
    setOpen(false);
    console.log(response.data);
    setData({ ...response.data });

    let sliced = response.data.article.data;
    sliced = sliced.slice(0, 1000) + " ...";
    console.log(sliced);
    setSlicedData(sliced);

    console.log(isSliced);
  }

  async function getRecentNews() {
    setOpen(true);
    const response = await axios.post("/api/articles", {
      selectedGenres: [],
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

  return (
    <div className="sm:min-h-screen">
      <Headers dark={false} />
      <motion.div
        style={{
          background: "yellow",
          zIndex: "10",
          height: "15px",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          transformOrigin: "0%",
          scaleX: scrollYProgress,
        }}
      ></motion.div>

      <div className="sm:mt-12 sm:ml-36 ml-6 mt-6">
        <div className="flex flex-row items-center">
          <h2 className="font-bold font-gilroy">
            {data.article == undefined
              ? ""
              : parseISOString(data.article.createdAt)
                  .toUTCString()
                  .split(",")[1]
                  .split(":")[0]
                  .slice(0, -3)}
          </h2>
          <div className="sm:ml-[70%]"></div>
          <div className="flex flex-row justify-center translate-x-12 ml-6">
            <div className=" flex flex-row h-min items-center">
              <h1 className="mr-2 font-gilroy">
                {data.writerName} |{" "}
                {data.article == undefined ? "" : data.article.genre}
              </h1>
              <Avatar src={`${data.profileURL}`}></Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pr-5 pl-5 sm:mt-4 sm:flex-row">
        <div className="sm:basis-1/4 sm:translate-x-1/4">
          <h1 className="translate-y-1/3 text-xl sm:text-3xl text-pink font-gilroy font-bold">
            {data.article == undefined ? "" : data.article.title.toUpperCase()}
          </h1>
        </div>
        <div className="sm:basis-1/2 sm:mt-16">
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
