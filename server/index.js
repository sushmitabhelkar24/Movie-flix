import express from 'express'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5001;

app.get("/health",(req,res)=>{
    res.status(200).json({
        message:"Server is running"
    })
})

app.listen((PORT),()=>{
    console.log(`Server is running on PORT:${PORT}`)
})