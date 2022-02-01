import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();

//database connection
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:root@bd01.szi3v.mongodb.net/bdWeb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
const db = mongoose.connection;
if (!db) {
  console.log("Error connecting MongoDB");
} else {
  console.log("Mongo Db connection successfully");
}
// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api", require("./routes/category"));
app.use("/api", require("./routes/classification"));
app.use("/api", require("./routes/console"));
app.use("/api", require("./routes/game"));
app.use("/api", require("./routes/user"));

///Middleware for Vue js router history mode
const history = require("connect-history-api-fallback");
app.use(history());

//Automatic Ports assignation
app.set("port", process.env.PORT || 5500);
app.listen(app.get("port"), () => {
  console.log("Listening to port" + " " + app.get("port"));
});
