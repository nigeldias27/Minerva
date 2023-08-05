// Route to returns all articles depending on the limit and categories of the articles
import connectDB from "@/lib/connect";
import pendingArticle from "../../models/pendingArticle.js";
import Article from "../../models/Article.js";

async function articles(req, res) {
  if (req.method == "POST") {
    if (req.body.selectedGenres.length == 0) {
      if (req.body.limit == undefined) {
        //Get all articles
        var allarticles = await Article.find().sort({ _id: -1 });
      } else {
        //Get some of the articles
        var allarticles = await Article.find()
          .sort({ _id: -1 })
          .limit(req.body.limit);
      }
      res.json(allarticles);
    } else {
      // Get articles depending on the categories selected
      const selectedArticles = [];
      for (const key in req.body.selectedGenres) {
        console.log("<><><><><><><><><><><>")
        console.log(key);
        console.log("<><><><><><><><><><><>")
        const article = await Article.find({
          genre: req.body.selectedGenres[key],
        });
        selectedArticles.push(...article);
      }
      selectedArticles.sort((p1, p2) =>
        p1._id < p2._id ? 1 : p1._id > p2._id ? -1 : 0
      );
      res.json(selectedArticles);
    }
  }
}

export default connectDB(articles);
