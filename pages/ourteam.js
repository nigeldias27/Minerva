import AnimatedHeading from "@/animatedComponents/Heading";
import UpdatedHeading from "@/animatedComponents/UpdatedHeading";
import Footer from "@/components/Footer";
import Headers from "@/components/Header";
import PersonCard from "@/components/PersonCard";
import { team } from "@/models/team";
import { BsInstagram, BsYoutube, BsLinkedin, BsTwitter } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
import { GrClose } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { Avatar, TextField, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import Image from "next/image";
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
export async function getStaticProps() {
  const teams = team;
  return { props: { teams } };
}
export default function OurTeam({ teams }) {
  const isSmallScreen = useMediaQuery({ maxWidth: 429 });
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
  const [openDialogue, setOpenDialogue] = useState(false);
  const [dialogData, setDialogData] = useState({});
  const handleClickOpen = () => {
    setOpenDialogue(true);
  };

  const handleClose = (value) => {
    setOpenDialogue(false);
  };
  function closeModal() {
    setOpenDialogue(false);
  }
  const genreList = [
    "Club head",
    "Journalism",
    "UI/UX Design",
    "Web Development",
    "Event Design",
    "Administration",
    "Photography",
    "Marketing",
    "Ops/Logs Content",
    "Social Media content",
    "Event Management",
    "Ops/Logs",
    "Search Engine Optimisation",
    "Communication Design",
    "Animations",
    "Legal",
    "Audio Engineering",
  ];
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [dark, setDark] = useState(false);
  const fetchData = async () => {
    // Fetch data from your API or any other data source
    // Update the URL or data fetching logic as per your application's requirements

    // Update the items state with the new data
    setItems([...items, ...teams.slice(page - 1, page - 1 + 10)]);

    // Determine if there's more data to fetch
    if (teams.slice(page - 1, page - 1 + 10).length === 0) {
      setHasMore(false);
    }

    // Increment the page number for the next data fetch
    setPage(page + 10);
  };

  useEffect(() => {
    fetchData(); // Fetch initial data when the component mounts
  }, []);

  useEffect(() => {
    localStorage.getItem("mode") == "dark" ? setDark(true) : setDark(false);
  }, []);
  return (
    <div className={dark ? "dark " : ""}>
      <div className="bg-white dark:bg-greyBlack">
        <NextSeo
          title="Meet The Team - Minerva PESU"
          description="Minerva PESU consists of 100+ members of diverse backgrounds and exceptional skill, all working towards one cause i.e. to promote and practise ethical journalism"
          canonical="https://minervapesu.vercel.app/ourteam"
          openGraph={{
            url: "https://minervapesu.vercel.app/ourteam",
            title: "Meet The Team - Minerva PESU",
            description:
              "Minerva PESU consists of 100+ members of diverse backgrounds and exceptional skill, all working towards one cause i.e. to promote and practise ethical journalism",
            siteName: "Minerva PESU",
          }}
        />
        <Head>
          <title>Our Team</title>
        </Head>
        <Headers dark={dark} setDark={setDark} />
        <div className="relative md:mx-8 mt-24 ">
          <div className="mx-4 md:mx-8">
            <UpdatedHeading>Our Team</UpdatedHeading>
          </div>
          <Carousel
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            responsive={responsive}
            className="py-4"
          >
            {genreList.map((v, i) => {
              return (
                <div
                  key={i}
                  className="py-2 px-5 sm:p-0 flex justify-center items-center"
                >
                  <button
                    class="py-0.5 mx-1 sm:px-1 flex w-full text-center whitespace-nowrap bg-white dark:bg-greyBlack  text-black dark:text-white rounded-[4px] border border-black dark:border-white hover:dark:border-yellow hover:border-londonYellow hover:shadow-xl font-georgia font-semibold"
                    onClick={() => {
                      if (selectedCategory == v) {
                        setSelectedCategory(null);
                      } else {
                        setSelectedCategory(v);
                      }
                    }}
                  >
                    <p className="flex justify-center items-center w-full text-[10px]">
                      {v}
                    </p>
                  </button>
                </div>
              );
            })}
          </Carousel>
          <InfiniteScroll
            dataLength={items.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            <div className="grid grid-cols-2 mt-8 md:grid-cols-2 xl:grid-cols-3 mb-8">
              {items.map((v, i) => {
                if (selectedCategory == null || selectedCategory == v.Domain) {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: -60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <PersonCard
                        key={i}
                        imageURL={v.link}
                        Name={v.name}
                        Role={v.Domain}
                        setOpenDialogue={setOpenDialogue}
                        setDialogData={setDialogData}
                        data={v}
                      ></PersonCard>
                    </motion.div>
                  );
                }
              })}
            </div>
          </InfiniteScroll>
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
                      } transform overflow-hidden px-5 py-6 md:px-10 md:py-10 text-left align-middle shadow-xl transition-all`}
                    >
                      <div className="flex flex-col md:pt-4 items-end relative">
                        <div
                          style={{ color: dark ? "black" : "white" }}
                          onClick={handleClose}
                          className={`absolute z-10 top-1 md:top-5 -right-1 border   border-otherblue p-1   ${
                            dark ? "bg-greyBlack" : "bg-backgroundModal"
                          }`}
                        >
                          <GrClose
                            style={{
                              background: dark ? "black" : "white",
                              fill: dark ? "black" : "white",
                            }}
                            className={`md:text-xl text-sm  ${
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
                            className={`md:text-xl text-sm ${
                              dark ? "text-white" : "text-black"
                            }`}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="relative min-w-full min-h-fit flex justify-center">
                          <Image
                            alt="Minerva Newsletter Logo"
                            width={800}
                            height={800}
                            src={dialogData.link}
                            priority={true}
                          ></Image>
                        </div>
                        <div className="flex flex-col justify-center md:pl-4">
                          <p
                            className={`text-black pt-4 font-serif text-[18px] md:text-[24px] dark:text-white  ${
                              dark ? "text-white" : "text-black"
                            }`}
                          >
                            {dialogData.name}
                          </p>
                          <h5
                            className={`text-black pb-4 font-serif text-[14px] md:text-[21px] dark:text-white  ${
                              dark ? "text-white" : "text-black"
                            }`}
                          >
                            {dialogData.Domain}
                          </h5>
                          <div className="flex flex-row pt-2 pb-6">
                            <div
                              onClick={() => {
                                window.location.href =
                                  "https://www.instagram.com/minerva.pesu/";
                              }}
                              className=" dark:bg-white bg-greyBlack p-1.5 md:p-3 mx-2 w-7 h-7 md:w-auto md:h-auto rounded-full hover:bg-hoverbeigeText"
                            >
                              <BsInstagram
                                color={dark ? "#3C3635" : "#FFFFFF"}
                                className="md:w-4 md:h-4"
                              />
                            </div>

                            <div
                              onClick={() => {
                                window.location.href =
                                  "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjzs5nhg6H-AhVKW2wGHQ3YBCQQFnoECBMQAQ&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fminerva-pesu%3Ftrk%3Dpublic_profile_experience-item_profile-section-card_image-click&usg=AOvVaw1tS4uBkYlptap2RiVb05Gu";
                              }}
                              className=" dark:bg-white bg-greyBlack p-1.5 md:p-3 mx-2 w-7 h-7 md:w-auto md:h-auto rounded-full hover:bg-hoverbeigeText"
                            >
                              <BsLinkedin
                                color={dark ? "#3C3635" : "#FFFFFF"}
                                className="md:w-4 md:h-4"
                              />
                            </div>
                            <div
                              onClick={() => {
                                window.location.href = "";
                              }}
                              className=" dark:bg-white bg-greyBlack p-1.5 md:p-3 mx-2 w-7 h-7 md:w-auto md:h-auto rounded-full hover:bg-hoverbeigeText"
                            >
                              <BsTwitter
                                color={dark ? "#3C3635" : "#FFFFFF"}
                                className="md:w-4 md:h-4"
                              />
                            </div>
                          </div>
                          <div className="flex justify-start">
                            <div className=" relative">
                              <button className="bg-yellow text-xs md:text-[16px] z-10 px-3 md:px-6 top-2 left-2 rounded-lg  py-2 md:py-3 border border-black font-questrial  font-semibold hover:bg-hoverbeigeText absolute">
                                ContactlMe
                              </button>
                              <button className="bg-blue z-30 text-xs md:text-[16px] px-3 md:px-6 top-1 left-1 rounded-lg  py-2 md:py-3 border border-black font-questrial  font-semibold hover:bg-hoverbeigeText absolute">
                                ContactlMe
                              </button>
                              <button
                                className="bg-pink px-3 md:px-6 text-xs md:text-[16px] z-40 rounded-lg relative  py-2 md:py-3 border border-black font-questrial  font-semibold hover:bg-hoverbeigeText"
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
                                Contact Me
                              </button>
                              <button></button>
                            </div>
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
        <Footer />
      </div>
    </div>
  );
}
