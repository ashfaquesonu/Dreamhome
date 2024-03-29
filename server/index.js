import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import bodyParser from 'body-parser'; // Add this import
import aiRoute from './routes/aiRoutes.js';
import userRoute from './routes/userRoute.js'
import engAndArch from './routes/engAndArchRoute.js'
dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/ai', aiRoute);
app.use('/api/users', userRoute)
app.use('/api/engineers', engAndArch)

const port = process.env.PORT || 4000; // Use process.env.PRT if available

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
