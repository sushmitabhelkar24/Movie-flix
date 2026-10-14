import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5001;

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.Mongo_URL);

    if(conn){
        console.log("mongoDB connected successfully")
    }
}

const TV_SHOWS = []

app.get("/health",(req,res)=>{
    res.status(200).json({
        message:"Server is running"
    })
})

app.get("/tv_shows",(req,res)=>{
    return res.status(200).json({
        success:true,
        data:TV_SHOWS,
        message:"Tv shows fetched successfully"
    })
})

app.post("/tv_shows",(req,res)=>{
    const {title,timing,thumbnail,channel} = req.body;

    const newTvshows = {
        title,
        timing,
        thumbnail,
        channel
    }

    TV_SHOWS.push(newTvshows);

    res.status(201).json({
        succee:true,
        data:newTvshows,
        message:"Tv shows created successfully"
    })
})

app.listen((PORT),()=>{
    console.log(`Server is running on PORT:${PORT}`);
    connectDB();
})