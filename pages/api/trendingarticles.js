import connectDB from "@/lib/connect";
import trendingArticle from "../../models/trendingArticle.js";
async function trendingArticles(req, res) {
  var article = await trendingArticle.find().sort({ _id: -1 });
  res.json(article);
}

export default connectDB(trendingArticles);
