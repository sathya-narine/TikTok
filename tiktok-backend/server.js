import express from 'express'
import mongoose from 'mongoose'
import Data from './data.js';
import Videos from './dbModel.js';
import dotenv from 'dotenv';  // Import dotenv to load environment variables
dotenv.config(); // Call dotenv.config() to load the environment variables

//dbconfig
const connection_url = process.env.MONGO_URI;  // Retrieve the MongoDB URI from environment variable


mongoose.connect(connection_url);

// app config
const app = express();
const port = 9000;


// middleware
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});


//api endpooints
app.get('/',(req,res)=>res.status(200).send('hello api'));

app.get('/v1/posts',(req,res)=> res.status(200).send(Data));

app.get('/v2/posts', async (req, res) => {
    try {
        const data = await Videos.find(); // No need for a callback
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});


app.post('/v2/posts', async (req, res) => {
    try {
        const dbVideos = req.body;
        const result = await Videos.create(dbVideos);
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

// listener
app.listen(port,()=>console.log(`listening on localhost: ${port}`));


