import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    userEmail:{
        type: String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    ,
    phone:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    urgency:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const contactForm = mongoose.model("contactForm", contactFormSchema);


export default contactForm;