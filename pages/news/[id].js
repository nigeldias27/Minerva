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
      <div className=" bg-opacity-5 bg-orange-900 w-screen py-4 flex justify-center">
        <h1 className="font-semibold text-3xl">
          {data.article == undefined ? "" : data.article.title}
        </h1>
      </div>
      <div className="px-8 sm:px-48 mt-8">
        <h1>
          {data.article == undefined ? "" : data.article.genre} |{" "}
          {data.article == undefined ? "" : parseISOString(data.article.createdAt).toLocaleDateString()} |{" "}
          {data.article == undefined ? "" : parseISOString(data.article.createdAt).toLocaleTimeString()}
        </h1>
        <div className="flex flex-row mt-2 mb-8 items-center">
          <Avatar src={`${data.profileURL}`}></Avatar>
          <h1 className="ml-2">{data.writerName}</h1>
        </div>
        <article className="prose max-w-full">
          <div
            dangerouslySetInnerHTML={{
              __html: md({ html: true }).render(
                data.article == undefined ? "" : data.article.data
              ),
            }}
          />
        </article>
      </div>
      <div className="pt-8">
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
