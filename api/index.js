import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { diseaseRoutes } from '../src/routes/diseaseRoute.js';
import { postRoutes } from '../src/routes/postRoute.js';
import { seedInitialData } from '../src/utils/seed.js';
import Disease from '../src/models/Disease.js';
import Post from '../src/models/Post.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/disease', diseaseRoutes);
app.use('/api/post', postRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/reset-seed', async (req,res)=> {
  await Disease.deleteMany();
  await Post.deleteMany();

  await seedInitialData()

  res.status(200).json({status : 'reset'});
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await seedInitialData();
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

export default app;
