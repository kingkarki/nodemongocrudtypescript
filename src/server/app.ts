import express from "express";
import { db } from "../Config/db.config";
import { router } from "../Routes/posts.routes";
const cors = require("cors");

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors

app.use(
  cors({
    origin: "*",
  })
);

//routes
app.use("/api/v1/posts", router);

//db connection then server connection
db.then(() => {
  app.listen(7070, () => console.log("Server is listening on port 7070"));
});
