import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", "extended": true}));
app.use(bodyParser.urlencoded({ limit: "30mb", "extended": true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://mern_proj_93:mernfirst1@cluster0.twsxi.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`server Running on Port ${PORT}`)))
.catch(() => console.log(error.message));

mongoose.set('useFindAndModify', false);

// https://www.mongodb.com/cloud/atlas

