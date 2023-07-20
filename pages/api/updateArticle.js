import connectDB from "@/lib/connect";
import validateToken from "@/lib/validateToken";
import Article from "../../models/Article.js";

const updateArticle = async (req, res) => {
  if (req.method == "POST") {
    const user = await validateToken(
      req.headers["authorization"].split(" ")[1]
    ); // Validate JWT Token and get the User of the token

    // Update existing published article
    if (user.role == "Content") {
      const updatedArticle = new Article({
        ...req.body,
      });

      await Article.findByIdAndUpdate(req.body._id, { $set: updatedArticle });

      res.send(updatedArticle);
    }
  }
};

export default connectDB(updateArticle);
