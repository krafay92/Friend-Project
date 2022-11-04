import express from "express";

// routes
import userRoute from "./user/index.js";
import genreRoute from "./genre/index.js";
import seriesRoute from "./series/index.js";
import seasonRoute from "./season/index.js";
import episodeRoute from "./episode/index.js";
import streamRoute from "./stream/index.js";



const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes

// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/genre", genreRoute);
unProtectedRouter.use("/series", seriesRoute);
unProtectedRouter.use("/season", seasonRoute);
unProtectedRouter.use("/episode", episodeRoute);
unProtectedRouter.use("/stream", streamRoute);


export { protectedRouter, unProtectedRouter };
