import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { config } from './config';
import cors from 'cors';
import { reportRoutes } from './routes/report';

const app: Express = express();
const { serverPort } = config;

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
    allowedHeaders: ['Content-Type']
}));
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server Status
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is running"
    });
});

// Routers
app.use("/report", reportRoutes);

app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}`);
});