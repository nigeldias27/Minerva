import connectDB from "@/lib/connect";
import validateToken from "@/lib/validateToken";
import pendingArticle from "../../models/pendingArticle.js";
import draftArticle from "../../models/draftArticle.js";

const createDraftArticle = async (req, res) => {
  if (req.method == "POST") {
    const user = await validateToken(
      req.headers["authorization"].split(" ")[1]
    ); // Validate JWT Token and get the User of the token
    // console.log(user.role);
    // console.log(req.body);
    if(user.role=="Content"){
        //save the data for the first time -
        const finalDraftArticle = new draftArticle({
            ...req.body,
            writer: user._id,
            Role: user.role,
          });
        const finalDraftData = await finalDraftArticle.save();
        console.log(finalDraftData);
        res.json({id: finalDraftData._id});
    }
    else{
        //overwrite/edit the existing draft article
    }
  }
};

export default connectDB(createDraftArticle);
