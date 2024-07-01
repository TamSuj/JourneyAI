import {GoogleGenerativeAI} from "@google/generative-ai";

const API_KEY = 'AIzaSyCbef_xpwNbO3VPK21jfbObLXOziP-tL8M';

// Initialize Google Generative AI client
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const fetchTestingLocalApiData = async () => {
    try {
        const prompt = "can u say hi";

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        return text;
    } catch (error) {
        console.error('Error fetching data from Generative AI:', error);
        throw error;
    }
};
