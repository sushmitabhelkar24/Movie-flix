import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
import TvShow from './models/TvShow.js';

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



app.get("/health",(req,res)=>{
    res.status(200).json({
        message:"Server is running"
    })
})

app.get("/tv_shows",async(req,res)=>{

    const tvShows =await TvShow.find();
    
    return res.status(200).json({
        success:true,
        data:tvShows,
        message:"Tv shows fetched successfully"
    })
})

app.post("/tv_shows",async(req,res)=>{
    const {title,timing,thumbnail,channel} = req.body;

    const newTvshows = new TvShow({
        title,
        timing,
        thumbnail,
        channel
    })

    const savedTvShow =await newTvshows.save()

   

    res.status(201).json({
        succee:true,
        data:savedTvShow,
        message:"Tv shows created successfully"
    })
})

app.listen((PORT),()=>{
    console.log(`Server is running on PORT:${PORT}`);
    connectDB();
})