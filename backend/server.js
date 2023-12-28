import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { body } from "express-validator";

const app = express();
app.use(express.json({ extented: true }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.cmd360g.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB OK"))
  .catch((err) => console.log("DB ERR", err));

const PORT = 5555;

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
