import Headers from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PendingNews() {
  const router = useRouter();
  const [pendingNews, setPendingNews] = useState([]);
  const [newArticle, setNewArticle] = useState(false);
  useEffect(() => {
    initState();
  }, []);
  async function initState() {
    const response = await axios.get("/api/pendingArticles", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setPendingNews([...response.data.article]);
    if (response.data.role == "Content") {
      setNewArticle(true);
    }
  }
  return (
    <div className="bg-lightGrey min-h-screen">
      <Headers />
      <div className="px-48 mt-8">
        <div className="flex flex-row w-full justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            {newArticle == false
              ? "Articles pending approval"
              : "Your Articles"}
          </h1>
          {newArticle ? (
            <button
              class="x-6 my-8 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-gray-800 to-blackButton py-3 px-8 text-beigeText"
              type="submit"
              onClick={async () => {
                router.push("/create/content");
              }}
            >
              <span className="text-xl">New Article</span>
            </button>
          ) : (
            <div></div>
          )}
        </div>

        <div className="grid grid-cols-3">
          {pendingNews.map((val, i) => {
            return (
              <NewsCard
                key={i}
                imageURL={`${val.imageURL}`}
                headline={`${val.title}`}
                genre={`${val.genre}`}
                date={`${val.createdAt}`}
                desc={`${val.description}`}
                id={`${val._id}`}
                newArticle={newArticle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
