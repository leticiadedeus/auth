import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))
