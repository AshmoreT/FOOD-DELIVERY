import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

// app config
const app = express();
const port = 4000

// middleware
app.use(bodyParser.json());
app.use(cors())

// DB connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)


app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

// mongodb+srv://tatendamawere9972:ashmoremawere@cluster0.c9chumu.mongodb.net/?
// mongodb+srv://mawereashmoredb:ashmoremawere@cluster0.mey4wrm.mongodb.net/?