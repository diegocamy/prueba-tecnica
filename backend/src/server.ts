import express from "express";
import dotenv from "dotenv";
import { createConnection } from "typeorm";
import "reflect-metadata";
import albumRoute from "./routes/album";
dotenv.config();
const PORT = process.env.PORT || 4000;

//create connection with db
createConnection({
  type: "postgres",
  host: process.env.DB_HOST as string,
  port: 5432,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  synchronize: true,
  logging: true,
  entities: [__dirname + "/db/entities/*{.ts,.js}"],
})
  .then(async (connection) => {
    const app = express();

    app.use(express.json());
    app.use("/api", albumRoute);

    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((error) => console.log("TypeORM connection error: ", error));
