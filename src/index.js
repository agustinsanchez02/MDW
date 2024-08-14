import express, { Router } from "express";
//now the import 
import router from "./routes/index.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hellow World!");
})

app.use(router)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

