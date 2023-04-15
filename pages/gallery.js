const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { motion } from "framer-motion";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
export default function MyGallery() {
  return (
    <div>
      <Headers />
      <motion.div
        initial={{ boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.4)" }}
        whileHover={{ boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)" }}
        style={{
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundClip: "border-box",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundImage:
            "url('https://media.istockphoto.com/id/538773438/photo/close-up-of-a-digital-camera-large-copyspace.jpg?s=170667a&w=0&k=20&c=xMn7Y98ybG7qqt4xtxrZd0oGeSAVzJ1cuN2J4vl4tiI=')",
        }}
      >
        <h1 className="pt-24 pb-12 text-lg sm:text-3xl font-merriweather pl-8 sm:pl-48 sm:pt-48 text-gray-300">
          Pixels Gallery
        </h1>
      </motion.div>
      <div className="px-0 mt-8 py-4 sm:py-12 sm:px-48">
        <Gallery withCaption>
          <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-4 gap-2">
            {itemData.map((item, i) => (
              <Item
                key={i}
                caption="Credit to : Photographer Name"
                original={`${item.img}?w=1024&h=768&fit=crop&auto=format`}
                thumbnail={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    style={{ width: "100%" }}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    className="w-auto h-auto"
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>
      <Footer />
    </div>
  );
}
