import express from "express";
import {GoogleGenerativeAI} from "@google/generative-ai";
import dotenv from 'dotenv';
import axios from "axios";


dotenv.config();

const API_KEY = process.env.API_KEY;
const GG_PLACE_KEY = process.env.GG_PLACE_KEY;


if (!API_KEY) {
    console.error("API key is not defined. Please set it in the .env file.");
}

if (!GG_PLACE_KEY){
    console.error("Google API key not defined");
}

const PORT = 3001;
const app = express();

app.use(express.json());

const genAI = new GoogleGenerativeAI(API_KEY);


const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    generationConfig: {responseMimeType: "application/json"}
});


app.post("/place_detail", async (req, res) => {
    try {
        const {place_id} = req.body;

        const fields = ["formatted_address", "formatted_phone_number", "international_phone_number", "opening_hours", "url", "website", "rating", "reviews", "price_level"];
        const fieldsParams = fields.join(",");
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?fields=${fieldsParams}&place_id=${place_id}&key=${GG_PLACE_KEY}`);
        // console.log("------------->GG PLACE Detail RESPONSE:   ", response.data);

        res.json({place_detail: response.data});
        console.log("PLACE DETAIL API got triggered");

    } catch (error) {
        console.error('Error fetching data from Google Place Detail API:', error);
        res.status(500).json({ error: 'Failed to fetch data from Google Place Detail API' });
    }
})


app.post("/photo_search", async (req, res) => {
    try {
        const { photoRef } = req.body; // Destructure the photo reference from the request body
        const max_h = 175;
        const max_w = 175;
        const key = GG_PLACE_KEY;

        const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${max_w}&maxheight=${max_h}&photo_reference=${photoRef}&key=${key}`;
        
        // No need to make an additional request with axios; simply return the URL
        res.json({ photoUrl: url });
        console.log("PHOTO SEARCH API got triggered");

    } catch (error) {
        console.error('Error fetching data from Google Photo API:', error);
        res.status(500).json({ error: 'Failed to fetch data from Google Photo API' });
    }
});



app.post("/place_search", async (req, res) => {
    try {
        const {location} = req.body;

        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}&key=${GG_PLACE_KEY}`)

        res.json(response.data);
        console.log("PLACE SEARCH API got triggered");

    } catch (error) {
        console.error('Error fetching data from Google Places API:', error);
        res.status(500).json({ error: 'Failed to fetch data from Google Places API' });
    }
});

app.get("/api", (req, res) => {
    console.log("Received request for /api");
    res.json({ message: "Connected" });
});


app.post("/gemini_response", async (req, res) => {
    try {
        const { prompt } = req.body; // Correctly destructure the prompt
        console.log("PROMPT:  ");
        console.log(prompt);

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        if(!text){
            console.log("No response")
        }

        if(!prompt){
            console.log("No prompt")
        }

        res.json({ message: text });
        console.log("GEMINI API got triggered");


    } catch (error) {
        console.error('Error fetching data from Generative AI:', error);
        throw error;
    }
});


app.post("/map", async (req, res) => {
    try {
        const { location } = req.body;
        const apiKey = 'pk.eyJ1Ijoia255aWhsYWkiLCJhIjoiY2x5YThiM2hpMHpzdzJqcHhhZGhqNmFsdyJ9.RpZAifKmlWn9kQRkakLRYg';
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${apiKey}`;

        const response = await fetch(url); //get url

        if (!response.ok) {
            throw new Error('Failed to fetch coordinates');
        }

        const data = await response.json(); //parse

        if (data.features.length > 0) {
            const coordinates = data.features[0].center;
            res.json({
                center: coordinates,
                zoom: 10 // Example zoom level
            });
        } else {
            res.status(400).json({error: "No coordinates found"});
        }

        console.log("MAP BOX API got triggered");


    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw error;
    }
});


app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
})
