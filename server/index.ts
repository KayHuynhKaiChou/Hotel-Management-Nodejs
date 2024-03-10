import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import connect from "./config/mysql";
import { routes } from "./routes/index";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

routes(app)
connect();

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on http://localhost:${process.env.PORT}`)
);
