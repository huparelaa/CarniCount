import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use(indexRoutes);

app.listen(PORT, () => console.log(`listening... on port ${PORT}`));
