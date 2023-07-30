import connectDB from "@/lib/connect";
import pendingArticle from "../../models/pendingArticle.js";
import validateToken from "@/lib/validateToken";

const deletePendingArticle = async (req, res) => {
  if (req.method == "POST") {
    const user = await validateToken(
      req.headers["authorization"].split(" ")[1]
    );
    if (!user || user.role != "Editor") {
      res.status(401);
      return;
    }

    const article = await pendingArticle.findByIdAndDelete(req.body.id);
    res.json(article);
  }
};

export default connectDB(deletePendingArticle);
