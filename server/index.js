import express from "express";
import {GoogleGenerativeAI} from "@google/generative-ai";
// import {mapboxgl} from 'mapbox-gl';
// import {mapboxGeocoder} from '@mapbox/mapbox-gl-geocoder';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;
// const MAP_KEY = process.env.MAP_KEY;

if (!API_KEY) {
    console.error("API key is not defined. Please set it in the .env file.");
}

// if (!MAP_KEY){
//     console.error("MAP key is not defined. Please set it in the .env file.")
// }

const PORT = 3001;
const app = express();

app.use(express.json());


// Initialize Google Generative AI client
const genAI = new GoogleGenerativeAI(API_KEY);

// Initialize Map client
// const mapBox = new mapboxGeocoder(MAP_KEY);


const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    generationConfig: {responseMimeType: "application/json"}
});



app.get("/api", (req, res) => {
    console.log("Received request for /api");
    res.json({ message: "Connected" });
});


app.post("/gemini_response", async (req, res) => {
    try {
        const { prompt } = req.body; // Correctly destructure the prompt

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        console.log("Received request for /gemini_reponse");
        console.log(prompt);
        console.log(text);

        res.json({ message: text });

    } catch (error) {
        console.error('Error fetching data from Generative AI:', error);
        throw error;
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
})
