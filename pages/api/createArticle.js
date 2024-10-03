import connectDB from "@/lib/connect";
import validateToken from "@/lib/validateToken";
import pendingArticle from "../../models/pendingArticle.js";
import Article from "../../models/Article.js";
import trendingArticle from "../../models/trendingArticle.js";
import User from "../../models/User.js";
const createArticle = async (req, res) => {
  if (req.method == "POST") {
    const user = await validateToken(
      req.headers["authorization"].split(" ")[1]
    ); // Validate JWT Token and get the User of the token
    console.log(user.role);
    if (user.role == "Faculty") {
      //Add the article in the body to the Article collection and remove it from the pendingArticle collection
      console.log(req.body);
      var article = await trendingArticle.findOneAndDelete().sort({ _id: 1 });
      var writeruser = await User.findById(req.body.writer);
      const finaltrendingArticle = new trendingArticle({
        ...req.body,
        writerName: writeruser.name,
      });
      const finalArticle = new Article({
        ...req.body,
        writerName: writeruser.name,
      });
      const finalData = await Promise.all([
        finalArticle.save(),
        finaltrendingArticle.save(),
        pendingArticle.findByIdAndRemove(req.body._id),
      ]);
      res.send(finalData);
    } else if (user.role == "Editor" || user.role == "Legal") {
      console.log(req.body);
      const modifiedArticle = await pendingArticle.findOneAndUpdate(
        { _id: req.body._id },
        { ...req.body, Role: user.role },
        { returnOriginal: false }
      );
      res.json({ okay: "okay" });
    } else {
      // Else it is a Content creator, so add the article to the pendingArticle collection
      // If called from drafts, which can done only by content creator, remove from drafts and move to pending
      const article = new pendingArticle({
        ...req.body,
        Role: user.role,
        writer: user._id,
      });
      const data = await article.save();
      console.log(data);
      res.json(data);
    }
  }
};

export default connectDB(createArticle);
