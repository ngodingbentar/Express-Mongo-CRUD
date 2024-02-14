import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(cors());
app.use(express.json());
// app.use(UserRoute)
app.use('/api/v1', UserRoute)

app.get('/', (req, res) => res.send('Home Page Route'));

app.listen(5007, () => {
  console.log('Listening on port 5007');
})