import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import sequelize from "./src/config/mysql";
import { routes } from "./src/routes/index";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

routes(app)

let connectDB = async () => {
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.', process.env.DB_PORT);
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
}
connectDB()

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on http://localhost:${process.env.PORT}`)
);
