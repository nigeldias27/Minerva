import connectDB from "@/lib/connect";
import Article from "../../models/Article.js";
import User from "../../models/User.js";

const getParticularArticle = async (req, res) => {
  if (req.method == "POST") {
    // Get the article and the writer data and send it. This is used in news/[id].js
    const article = await Article.findById(req.body.id);
    const writer = await User.findById(article.writer);
    res.json({
      article: article,
      profileURL: writer.profileURL,
      writerName: writer.name,
    });
  }
};

export default connectDB(getParticularArticle);
