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
export default function Article() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    initState();
  }, []);
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
  }
  return (
    <div className=" min-h-screen">
      <Headers />
      <div className="flex mt-16 flex-row">
        <div className="basis-1/4" style={{ transform: "translate(20%,0%)" }}>
          <h2 className="font-gilroy">
            {data.article == undefined
              ? ""
              : parseISOString(data.article.createdAt)
                  .toUTCString()
                  .split(",")[1]
                  .split(":")[0]
                  .slice(0, -3)}
          </h2>
          <h1 className=" text-3xl text-pink font-gilroy font-bold">
            {data.article == undefined ? "" : data.article.title.toUpperCase()}
          </h1>
        </div>
        <div className="basis-1/2 mt-16">
          <img
            width={"100%"}
            src={`${data.article == undefined ? "" : data.article.imageURL}`}
          ></img>
          <article className="prose max-w-full pt-12 ">
            <div
              className="font-georgia"
              dangerouslySetInnerHTML={{
                __html: md({ html: true, typographer: true }).render(
                  data.article == undefined ? "" : data.article.data
                ),
              }}
            />
          </article>
        </div>
        <div className="basis-1/4 flex flex-row justify-center mt-12">
          <div className="flex flex-row h-min items-center">
            <h1 className="mr-2 font-gilroy">
              {data.writerName} |{" "}
              {data.article == undefined ? "" : data.article.genre}
            </h1>
            <Avatar src={`${data.profileURL}`}></Avatar>
          </div>
        </div>
      </div>
      <div className="pt-32">
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
