import Headers from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import Menu from "@mui/material/Menu";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import { MdKeyboardDoubleArrowRight, MdCheck } from "react-icons/md";
import { useEffect, useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
export default function News() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState([]);
  const [news, setNews] = useState([]);
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
    const response = await axios.post("/api/articles", {
      selectedGenres: selectedGenres,
    });
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
    <div className="bg-lightGrey min-h-screen">
      <Headers />
      <div className="px-48 mt-8">
        <div className="flex flex-row w-full justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">News</h1>
          <a
            id="basic-button"
            className="flex flex-row items-center"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Filter <MdKeyboardDoubleArrowRight />
          </a>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {genreList.map((val, i) => {
              return (
                <MenuItem
                  key={i}
                  onClick={() => {
                    check[i] == true ? (check[i] = false) : (check[i] = true);
                    setCheck([...check]);
                  }}
                >
                  {check[i] == true ? (
                    <ListItemIcon>
                      <MdCheck />
                    </ListItemIcon>
                  ) : (
                    <ListItemIcon></ListItemIcon>
                  )}

                  {val}
                </MenuItem>
              );
            })}
          </Menu>
        </div>

        <div className="grid grid-cols-3">
          {data.map((val, i) => {
            return (
              <NewsCard
                key={i}
                imageURL={`${val.imageURL}`}
                headline={`${val.title}`}
                genre={`${val.genre}`}
                date={`${val.createdAt}`}
                desc={`${val.description}`}
                id={`${val._id}`}
                newArticle={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
