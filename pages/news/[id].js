import Footer from "@/components/Footer";
import Headers from "@/components/Header";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import md from "markdown-it";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Article() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});

  useEffect(() => {
    initState();
  }, []);

  async function initState() {
    const response = await axios.post(
      "/api/getParticularArticle",
      { id: id },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    console.log(response.data);
    setData({ ...response.data });
  }
  return (
    <div className="bg-lightGrey min-h-screen">
      <Headers />
      <div className="bg-titleColor w-screen py-4 flex justify-center">
        <h1 className="font-semibold text-3xl">
          {data.article == undefined ? "" : data.article.title}
        </h1>
      </div>
      <div className="px-48 mt-8">
        <h1>
          {data.article == undefined ? "" : data.article.genre} |{" "}
          {data.article == undefined ? "" : data.article.createdAt}
        </h1>
        <div className="flex flex-row mt-2 mb-8 items-center">
          <Avatar src={`${data.profileURL}`}></Avatar>
          <h1 className="ml-2">{data.writerName}</h1>
        </div>
        <article className="prose max-w-full">
          <div
            dangerouslySetInnerHTML={{
              __html: md().render(
                data.article == undefined ? "" : data.article.data
              ),
            }}
          />
        </article>
      </div>
      <div className="pt-8">
        <Footer />
      </div>
    </div>
  );
}
