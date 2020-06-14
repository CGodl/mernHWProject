const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

// mongodb+srv://<dev>:<gz5mu6KPX2eRVpU5>@cluster0-vas4z.mongodb.net/<dbname>?retryWrites=true&w=majority

app.get("/", (req, res) => res.send("This is yet another message"));


app.use("/api/users", users);
app.use("/api/tweets", tweets);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
