import * as functions from "firebase-functions";
import express from 'express';
import cors from "cors"
 

const app = express();
 app.use(cors())
 app.use(express.json())

 //app.use("/", exampleRoutes); found slide 49 of modern web

export const api = functions.https.onRequest(app);