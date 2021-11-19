// const routes = require("./routes/route-index");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");


const PORT = process.env.PORT || 3003;

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weddingplanner");
const app = express();
// app.use(passport.initialize());
// require('./passport')(passport);

// app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(__filename, "./client/build/index.html");
});

// // Add routes, both API and view
// app.use('/api/users', users);
// app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
