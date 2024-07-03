import {GoogleGenerativeAI} from "@google/generative-ai";

const API_KEY = 'AIzaSyCbef_xpwNbO3VPK21jfbObLXOziP-tL8M';
if (!API_KEY) {
    console.error("API key is not defined. Please set it in the .env file.");
}

// Initialize Google Generative AI client
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    generationConfig: {responseMimeType: "application/json"}
});

export const fetchTestingLocalApiData = async (command) => {
    try {
        const prompt = command;

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        console.log(text);
        return text;
    } catch (error) {
        console.error('Error fetching data from Generative AI:', error);
        throw error;
    }
};
