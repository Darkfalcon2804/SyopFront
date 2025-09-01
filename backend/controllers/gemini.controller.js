import { GoogleGenerativeAI } from "@google/generative-ai"

export const geminiAPIHandler = async (req, res) => {
    try {
        const postfix_prompt = "based on the symptoms guess the disease and give me the output for this in the form of json file in which following keys are must there : 1.primary condition 2secondry conditions (in array up to 2 to 3 conations) 3.percent match of primary condition 4.percent match of all secondary condition(of all) 5.Risk Assessment (low, medium, high) 6.urgency - (true or false) 7.recommendation for you (array of 5)";
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const { symptoms } = req.body;
        // { "prompt": "what is the meaning of life"}
        if (!symptoms) {
            return res.status(400).json({ error: 'Prompt is required' });
        }
        const prompt = `"${symptoms}" + "${postfix_prompt}"`;

        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash-latest', generationConfig: {
                responseMimeType: "application/json"
            }
        });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({
            generatedText: text
        });

    } catch (error) {
        console.error("Error generating content:", error);
        // It's good practice to send a more generic error message to the client
        res.status(500).json({ error: 'Failed to generate content', error: error });
    }
};