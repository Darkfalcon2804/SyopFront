import { GoogleGenerativeAI } from "@google/generative-ai"

export const geminiAPIHandler = async (req, res) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const { prompt } = req.body;
        // { "prompt": "what is the meaning of life"}

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({
            geminiResult: result,
            coreResponse: response,
            generatedText: text
        });

    } catch (error) {
        console.error("Error generating content:", error);
        // It's good practice to send a more generic error message to the client
        res.status(500).json({ error: 'Failed to generate content', error: error });
    }
};