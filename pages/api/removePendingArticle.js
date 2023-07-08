import connectDB from "@/lib/connect";
import pendingArticle from "../../models/pendingArticle.js";
import validateToken from "@/lib/validateToken";

const getParticularPendingArticle = async (req, res) => {
  // Used to get the specific pending article awaiting approval by Editors to send to create/[id].js
  if (req.method == "POST") {
    const user = await validateToken(
      req.headers["authorization"].split(" ")[1]
    );
    if (user.role == "Editor") {
      const article = await pendingArticle.findByIdAndDelete(req.body.id);
      res.json({undo: "true"});
    }
  }
};

export default connectDB(getParticularPendingArticle);
