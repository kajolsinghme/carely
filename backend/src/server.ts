import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { join } from 'path';
import { connectDB } from './config/db.js';
import routes from './routes/index.js';
import errorHandler from './middleware/error-handler.js';
import { validateEnvVars } from './config/env.js';

const app = express();

config({ path: join(process.cwd(), '.env') });

validateEnvVars();

app.use(cors());

app.use(express.json());

app.use(`/`, routes);

app.use(errorHandler);

await connectDB();

const PORT = Number(process.env['PORT']) || 6000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
