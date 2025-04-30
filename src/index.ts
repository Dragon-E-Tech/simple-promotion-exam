import express, { Express } from 'express';
import cors from 'cors';
import { router } from './routes';

const app: Express = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors
app.use(cors());

// Routes
app.use('/api', router);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});