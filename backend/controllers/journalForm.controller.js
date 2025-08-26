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


// fething recent joutnal fromdatabase 

export const userJournalActivaty = async (req, res) => {
    try {
      const userId = req.user.id; // Assuming you have user ID in req.user
      const activities = await journalForm.find({ userId }).sort({ createdAt: -1 });
      const activitiesCount = await journalForm.countDocuments({ userId });
      res.status(200).json({ activities, activitiesCount });
    } catch (error) {
      res.status(500).json({ message: "Error fetching user activities", error });
    }
};