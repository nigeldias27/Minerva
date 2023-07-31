import connectDB from "@/lib/connect";
import Article from "../../models/Article.js";
import validateToken from "@/lib/validateToken";

const deleteArticle = async (req, res) => {
  console.log(req.method);
  if (req.method == "POST") {
    const user = await validateToken(
      req.headers["authorization"].split(" ")[1]
    );
    console.log(user);
    if (!user) {
      res.status(401);
      return;
    }

    const article = await Article.findById(req.body.id);
    console.log(article);

    if (!article.writer.equals(user._id)) {
      console.log("id doesnt match", article.writer, user._id);
      res.status(401);
      return;
    }

    const deletedArticle = await Article.findByIdAndDelete(article._id);

    res.json(deletedArticle);
  }
};

export default connectDB(deleteArticle);
