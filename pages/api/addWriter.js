/*
import Article from "../../models/Article.js";
import Article1 from "../../models/Article.js";
import User from "../../models/User.js";
import connectDB from "@/lib/connect";
import trendingArticle from "../../models/trendingArticle.js";
import trendingArticle1 from "../../models/trendingArticle.js";
const addWriter = async (req, res) => {

    const listOfArticles = await Article.find({});
  for (let index = 0; index < listOfArticles.length; index++) {
    const element = listOfArticles[index];
    const user = await User.findById(element.writer);
    element.writerName = user.name;
    await element.save();
  }

  const listOfTrendingArticles = await Article.find({}).sort({ _id: -1 });
  for (let index = 0; index < listOfTrendingArticles.length; index++) {
    const user = await User.findById(listOfTrendingArticles[index].writer);
    //listOfTrendingArticles[index].writerName = user.name;
    const trendingarticle1 = Article1({
      writerName: user.name,
      data: listOfTrendingArticles[index].data,
      genre: listOfTrendingArticles[index].genre,
      title: listOfTrendingArticles[index].title,
      imageURL: listOfTrendingArticles[index].imageURL,
      description: listOfTrendingArticles[index].description,
      writer: listOfTrendingArticles[index].writer,
      editor: listOfTrendingArticles[index].editor,
    });
    trendingarticle1._id = listOfTrendingArticles[index]._id;
    await trendingarticle1.save();
    console.log(listOfTrendingArticles[index].writerName);
  }

  res.json("Done");
};
export default connectDB(addWriter);
*/
import connectDB from "@/lib/connect";
import User from "../../models/User.js";
const addUser = async (req, res) => {
  if (req.method == "POST") {
    const newUser = new User({ ...req.body });
    const data = await newUser.save();
    res.json(data);
  }
};

export default connectDB(addUser);
