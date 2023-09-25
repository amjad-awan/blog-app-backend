import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import blogRoute from "./routes/blogRouter.js";
import connectDB from "./db.js";
// import * as path from 'path'


dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

// middelwares
app.use(express.json());
app.use(cors());
// parse application/x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/blog", blogRoute);

app.use("/",(req, res)=>{
  res.send("express api is here ")
})

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
