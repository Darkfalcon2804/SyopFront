import mongoose from "mongoose";

export const journalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    bloodPressure: {
        type: String,
        required: false
    },
    heartRate: {
        type: String,
        required: false
    },
    temperature: {
        type: String,
        required: false,
        default: "98.6°F"
    },
    weight: {
        type: String,
        required: true
    },
    symptoms: {
        type: String,
        required: true
    },
    medications: {
        type: String,
        required: false
    },
    allergies: {
        type: String,
        required: false
    },
    medicalHistory: {
        type: String,
        required: false
    },
    familyHistory: {
        type: String,
        required: false
    },
    lifestyle: {
        type: String,
        required: false
    }
},
    {
        timestamps: true
    }
);

const journalForm = mongoose.model("JournalForm", journalSchema);

export default journalForm;