import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from 'cors';
import express from 'express';
import routers from "./routers";

import environments from "./environments";
import { getStockByID } from "./db/products.db";
const app = express();

app.use(bodyParser.json({limit: '5mb'}));
app.use(cookieParser());
app.use(compression());
app.use(cors({
    origin: 'http://localhost:5500',
    credentials: true
}));

app.use('/api', routers());

app.listen(environments().serverPort, () => console.log(`Server listen on http://localhost:${environments().serverPort}/`));