import express from "express";

import filmRouter from "./routes/films";
import texteRouter from "./routes/textesADactylographier";

const app = express();

let getCounter = 0;

app.use((req, _res, next) => {

    if(req.method === "GET" ){
        getCounter++;
        console.log(`GET counter : ${getCounter}`);
    }
    next();

});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/films", filmRouter);
app.use("/textes", texteRouter);

export default app;
