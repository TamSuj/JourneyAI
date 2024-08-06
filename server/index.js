import express from "express";
import dotenv from 'dotenv';
import placeRoutes from './routes/googleApiService.js';
import mapRoutes from './routes/mapBoxApiService.js';
import geminiRoutes from './routes/geminiApiService.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/place', placeRoutes);
app.use('/api/mapbox', mapRoutes);
app.use('/api/gemini', geminiRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});