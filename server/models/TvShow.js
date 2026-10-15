import {Schema,model} from "mongoose"

const tvShowSchema = new Schema({
    title :String,
    timing:String,
    thumbnail:String,
    channel:String
})


const TvShow = model("TvShow",tvShowSchema);

export default TvShow;
