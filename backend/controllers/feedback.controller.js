import Feedback from '../models/feedback.model.js';
import {User} from '../models/user.model.js';

export const storeFeedback = async (req, res) => {
    try {
        const {rating, message} = req.body;
        const user = await User.findById(req.user.id);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const feedback = new Feedback({
            user:req.user.id,
            Username:user.FirstName,
            rating,
            message
        });
        await feedback.save();
        res.status(201).json({message:"Feedback stored successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}