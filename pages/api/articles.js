// Route to returns all articles depending on the limit and categories of the articles
import connectDB from "@/lib/connect";
import pendingArticle from "../../models/pendingArticle.js";
import Article from "../../models/Article.js";
import User from "../../models/User.js";

async function getwriter(articles) {
  const updatedArticles = articles;
  for (var i = 0; i < articles.length; i++) {
    const article = articles[i];
    const writer = await User.findById(article.writer);
    updatedArticles[i] = {
      ...updatedArticles[i]["_doc"],
      writerName: writer.name,
      profileURL: writer.profileURL,
    };
  }

  return updatedArticles;
}
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
      allarticles = await getwriter(allarticles);
      console.log(allarticles[0].writerName);
      res.json(allarticles);
    } else {
      // Get articles depending on the categories selected
      var selectedArticles = [];
      for (const key in req.body.selectedGenres) {
        console.log(key);
        const article = await Article.find({
          genre: req.body.selectedGenres[key],
        });
        selectedArticles.push(...article);
      }
      selectedArticles.sort((p1, p2) =>
        p1._id < p2._id ? 1 : p1._id > p2._id ? -1 : 0
      );
      selectedArticles = await getwriter(selectedArticles);

      res.json(selectedArticles);
    }
  }
}

export default connectDB(articles);
