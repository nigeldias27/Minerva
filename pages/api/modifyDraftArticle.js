import connectDB from "@/lib/connect";
import draftArticle from "../../models/draftArticle.js";
import validateToken from "@/lib/validateToken";

const modifyDraftArticle = async (req, res) => {
  // Used to get the specific pending article awaiting approval by Editors to send to create/[id].js
  if (req.method == "POST") {
    const user = await validateToken(
      req.headers["authorization"].split(" ")[1]
    );

    const article = await draftArticle.findOneAndUpdate({_id: req.body.id }, req.body.data, { returnOriginal: false });
    res.json({okay: "okay"})
  }
};

export default connectDB(modifyDraftArticle);
