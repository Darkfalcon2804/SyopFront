import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    Username:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true});

const Feedback = mongoose.model("Feedback",feedbackSchema);

export default Feedback;