import connectDB from "@/lib/connect";
import draftArticle from "../../models/draftArticle.js";
import validateToken from "@/lib/validateToken";

const getParticularDraftArticle = async (req, res) => {
  // Used to get the specific pending article awaiting approval by Editors to send to create/[id].js
  if (req.method == "POST") {
    const user = await validateToken(
      req.headers["authorization"].split(" ")[1]
    );

    const article = await draftArticle.findById(req.body.id);
    res.json(article);
  }
};

export default connectDB(getParticularDraftArticle);
