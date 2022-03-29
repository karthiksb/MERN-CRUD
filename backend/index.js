var express = require("express");
var cors = require("cors");
var mongo = require("mongodb").MongoClient;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create", (req, res, next) => {
  console.log(req.body.name, " " + req.body.age, " " + req.body.address);
  var url = "mongodb://localhost:27017/";
  mongo.connect(url, { useUnifiedTopology: true }, function (err, client) {
    if (err) {
      console.log(err.message);
    } else {
      console.log("mongooo connects");
      var db = client.db("blog");
      db.collection("users").insertOne({
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
      });
    }
  });
});
app.listen(5000, () => {
  console.log("running on port 5000");
});
