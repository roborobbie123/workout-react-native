const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

let password = 'aqxx4DXVUEql641Z'
let api = 'mongodb+srv://roborobbie123:aqxx4DXVUEql641Z@cluster0.ijuaufj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/workouts")