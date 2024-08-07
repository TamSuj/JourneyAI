import express from 'express';
import dotenv from 'dotenv';
import placeRoutes from './routes/googleApiService.js';
import mapRoutes from './routes/mapBoxApiService.js';
import geminiRoutes from './routes/geminiApiService.js';
import data from './UserSavedPlan.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/place', placeRoutes);
app.use('/api/mapbox', mapRoutes);
app.use('/api/gemini', geminiRoutes);

const PORT = process.env.PORT || 3001;

app.get('/api/saved_plan/:userId', async (req, res) => {
  const userId = req.params.userId;
  if (userId === data.id) {
    res.json(data);
    console.log(data);
  } else {
    console.log("Not found");
    res.status(404).send('User Not Found'); // Adjusted to 404
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});
