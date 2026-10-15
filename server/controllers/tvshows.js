import TvShow from '../models/TvShow.js';

const getTvshows= async(req,res)=>{

    const tvShows =await TvShow.find();
    
    return res.status(200).json({
        success:true,
        data:tvShows,
        message:"Tv shows fetched successfully"
    })
}

const postTvshows = async(req,res)=>{
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
}

const getTvshowsById = async(req,res)=>{
    const {id} = req.params;

    try{
    const tvshow = await TvShow.findById(id)

    if(!tvshow){
        return res.status(400).json({
        success:false,
        data:"null",
        message:`Tv Shows with id:${id} does not exists`
     })}
     else{
          return res.status(200).json({
        success:true,
        data:tvshow,
        message:`Tv Shows with id:${id} load sucessfully`
    })}
    }catch(e){
         return res.status(400).json({
            success:true,
            message:e.message,
            data:"null"
         })
    }
}

const deleteTvshowsByID = async(req,res)=>{
    const {id} = req.params;

    await TvShow.deleteOne({_id :id});

     return res.status(200).json({
        success:true,
        message:`Tv show with id:${id} deleted successfully`
     })
}

export {getTvshows , postTvshows ,getTvshowsById, deleteTvshowsByID}