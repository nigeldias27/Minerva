import Headers from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import Menu from "@mui/material/Menu";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import { MdKeyboardDoubleArrowRight, MdCheck } from "react-icons/md";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ListItemIcon from "@mui/material/ListItemIcon";
import Footer from "@/components/Footer";
import UpdatedNewsCard from "@/components/UpdatedNewsCard";
import UpdatedHeading from "@/animatedComponents/UpdatedHeading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Head from "next/head";
export default function News() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
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
    "AI/ Machine Learning",
    "Biotechnology",
    "Business",
    "Design",
    "Fasion",
    "History",
    "Life Skills",
    "Psych",
    "Science",
    "Sorts",
  ];

  useEffect(() => {
    initState();
  }, [check]);
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
    <div className=" min-h-screen">
      <Headers />
      <div className="px-0 relative pt-8 bg-#FCF7FF dark:bg-greyBlack sm:px-12">
        <div className="flex flex-row w-full justify-between items-center px-8 mb-8 sm:px-0">
          <UpdatedHeading>News</UpdatedHeading>
        </div>
        <Carousel responsive={responsive}>
          <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
            View All
          </button>

          <button class="px-2 h-8 whitespace-nowrap bg-white text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
            Club Heads
          </button>

          <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
            UI/UX
          </button>

          <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
            Web Dev
          </button>

          <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
            AV
          </button>

          <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
            journalism
          </button>

          <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
            Ops Content
          </button>

          <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
            Social Media Content
          </button>

          <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
            Animations
          </button>

          <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
            Communication Design
          </button>
        </Carousel>
        {/*
        <Slider {...settings}>
          <div>
            <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
              View All
            </button>

            <button class="px-2 h-8 whitespace-nowrap bg-white text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
              Club Heads
            </button>

            <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
              UI/UX
            </button>

            <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
              Web Dev
            </button>

            <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
              AV
            </button>

            <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
              journalism
            </button>

            <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
              Ops Content
            </button>

            <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
              Social Media Content
            </button>

            <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
              Animations
            </button>

            <button class="px-2 h-8 whitespace-nowrap bg-white  text-black rounded-md border border-black hover:border-2 hover:border-londonYellow hover:shadow-xl mr-10 font-georgia font-semibold">
              Communication Design
            </button>
          </div>
        </Slider>
        */}

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
                <UpdatedNewsCard
                  key={i}
                  imageURL={`${val.imageURL}`}
                  headline={`${val.title}`}
                  genre={`${val.genre}`}
                  i={i}
                  date={`${val.createdAt}`}
                  desc={`${val.description}`}
                  id={`${val._id}`}
                  newArticle={true}
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
