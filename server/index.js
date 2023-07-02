import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './Routes/post.js'


const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
import dotenv from 'dotenv'


app.use(cors());
dotenv.config();

//mongodb cloud 

app.use('/post', postRoutes)

// const CONNECTION_URL = 'mongodb://localhost:27017/jsmatery'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL , {useNewUrlParser: true, useUnifiedTopology: true})



  app.listen(5000, () => {
    console.log(`Server Started on : ${PORT} `);
  });
  