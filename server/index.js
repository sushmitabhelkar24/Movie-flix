import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
import {getHealth} from "./controllers/health.js"
import {getTvshows,postTvshows,getTvshowsById,deleteTvshowsByID} from './controllers/tvshows.js'


const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5001;

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.Mongo_URL);

    if(conn){
        console.log("mongoDB connected successfully")
    }
}



app.get("/health",getHealth);

app.get("/tv_shows",getTvshows);
app.post("/tv_shows",postTvshows);
app.get("/tv_shows/:id",getTvshowsById);
app.delete("/tv_shows/:id",deleteTvshowsByID);

app.listen((PORT),()=>{
    console.log(`Server is running on PORT:${PORT}`);
    connectDB();
})