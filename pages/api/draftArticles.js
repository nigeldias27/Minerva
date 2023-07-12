import connectDB from "@/lib/connect";
import pendingArticle from "../../models/pendingArticle.js";
import validateToken from "@/lib/validateToken";
import draftArticle from "../../models/draftArticle.js";
const getPendingArticles = async (req, res) => {
    //return all draft articles to where it is called. only in "/pendingNews" by the "Content" role
  if (req.method == "GET") {
    console.log(req.headers["authorization"].split(" ")[1]);
    const user = await validateToken(
      req.headers["authorization"].split(" ")[1]
    );
    const articles = await draftArticle.find({writer: user.id});
    res.json({ article: articles, role: user.role });
  }
};

export default connectDB(getPendingArticles);
