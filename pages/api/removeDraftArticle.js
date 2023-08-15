import connectDB from "@/lib/connect";
import validateToken from "@/lib/validateToken";
import draftArticle from "../../models/draftArticle.js";

const removeDraftArticle = async (req, res) => {
  // Used to get the specific pending article awaiting approval by Editors to send to create/[id].js
  if (req.method == "POST") {
    const user = await validateToken(
      req.headers["authorization"].split(" ")[1]
    );
    if(user.role == "Content"){
        const article = await draftArticle.findByIdAndDelete(req.body.id);
        res.json({undo: "true"});
    }
  }
};

export default connectDB(removeDraftArticle);
