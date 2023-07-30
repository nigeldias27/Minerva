import connectDB from "@/lib/connect";
import validateToken from "@/lib/validateToken";
import Article from "../../models/Article.js";
import pendingArticle from "../../models/pendingArticle.js";

const updateArticle = async (req, res) => {
  if (req.method == "POST") {
    const user = await validateToken(
      req.headers["authorization"].split(" ")[1]
    ); // Validate JWT Token and get the User of the token

    // Update existing published article
    if (user.role == "Content") {
      const articleData = { ...req.body, Role: user.role };
      delete articleData.editor;
      delete articleData._id;

      const updatedArticle = new pendingArticle(articleData);
      const finalData = await updatedArticle.save();
      await Article.findByIdAndRemove(req.body._id);

      res.send(finalData);
    }
  }
};

export default connectDB(updateArticle);
