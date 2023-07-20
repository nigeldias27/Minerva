import Headers from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import DraftNewsCard from "@/components/DraftNewsCard";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
export default function PendingNews() {
  // If the user is an Editor, then articles created by different writers pending approval are shown
  // If the user is a Content Creator, then articles that have been approved by an Editor and published are show
  const router = useRouter();
  const [pendingNews, setPendingNews] = useState([]);
  const [newArticle, setNewArticle] = useState(false); // If false, then the role of the user is Editor otherwise the role is Content Creator
  const [open, setOpen] = useState(false); // For the Backdrop
  const [isDraft, setIsDraft] = useState(false);
  const [draftArticles, setDraftArticles] = useState([]);
  const [userRole, setUserRole] = useState("")

  useEffect(() => {
    initState();
    getDrafts();
  }, []);
  async function initState() {
    setOpen(true);
    const response = await axios.get("/api/pendingArticles", {
      // GET request to get articles
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // JWT token is sent as a security measure
    });
    setOpen(false);
    setPendingNews([...response.data.article]);
    if (response.data.role == "Content") {
      setNewArticle(true);
    }
  }

  async function getDrafts() {
    setOpen(true);
    const response = await axios.get("/api/draftArticles", {
      // GET request to get articles
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // JWT token is sent as a security measure
    });
    setOpen(false);
    setDraftArticles([...response.data.article]);
    if (response.data.role == "Content") {
      setNewArticle(true);
      setUserRole("content");
    }
  }
  
  return (
    <div className="bg-opacity-10 bg-orange-900 min-h-screen">
      <Headers />
      <div className="px-0 sm:px-48 mt-8">
        <div className="flex flex-row w-full justify-between items-center px-8 mb-8 sm:px-0">
          <h1 className="text-3xl font-bold">
            {newArticle == false
              ? "Articles pending approval"
              : isDraft?"Saved drafts":"Published articles"}
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

        <div>
          {userRole=="content"?
          <button
              class="x-6 my-8 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-gray-800 to-blackButton py-3 px-8 text-beigeText"
              type="submit"
              onClick={async () => {
                setIsDraft(!isDraft)
              }}
            >
              <span className="text-xl">Toggle Published/Drafts</span>
          </button>:<div></div>}
        </div>

        {isDraft&&(userRole=="content")?
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {draftArticles.map((val, i) => {
              return (
                <DraftNewsCard
                  key={i}
                  imageURL={`${val.imageURL}`}
                  headline={`${val.title}`}
                  genre={`${val.genre}`}
                  date={`${val.createdAt}`}
                  desc={`${val.description}`}
                  id={`${val._id}`}
                />
              );
            })}
          </div>:
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
        }

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
