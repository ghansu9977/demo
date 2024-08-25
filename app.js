import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./route/user.route.js";
import session from "express-session";
import PropertyRouter from "./route/property.route.js";
import ContactUs from './route/contact-us.route.js'
dotenv.config();

const app = express();

//Middleware

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors()
);

app.use(cookieParser());

// Database Connection
mongoose
  .connect("mongodb+srv://ghanshyamkushwah623:579tpJQnWw528A9p@cluster0.fi6v6lj.mongodb.net/realstate")
  .then(() => {
    console.log("MongoDB connected...");

    //Routes
    app.use("/user", UserRouter);
    app.use("/contact",ContactUs)
    app.use("/properties", PropertyRouter);
    //Start the server after successful database connection
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

export default app;
