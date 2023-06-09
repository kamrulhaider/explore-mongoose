import express, { Application, Request, Response, urlencoded } from "express";
import cors from "cors";

// rounter import
import userRoutes from "./app/modules/user/user.route";

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;
