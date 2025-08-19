import journalForm from "../models/journal.model.js";

export const userJournalData = async (req, res) => {
    try {
        const { name, age, gender, bloodPressure, heartRate, temperature, weight, symptoms, medications, allergies, medicalHistory, familyHistory, lifestyle } = req.body;
        const newJournalEntry = new journalForm({
            userId: req.user.id,
            name,
            age,
            gender,
            bloodPressure,
            heartRate,
            temperature,
            weight,
            symptoms,
            medications,
            allergies,
            medicalHistory,
            familyHistory,
            lifestyle
        });

        await newJournalEntry.save();

        res.status(201).json({ message: "Journal entry created successfully", data: newJournalEntry });
    } catch (error) {
        console.error("Error creating journal entry:", error);
        res.status(500).json({ message: "Internal server error" , error:error });
    }
}