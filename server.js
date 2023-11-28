import express from "express";
import cors from 'cors'
import { connectDB } from './db.js'
import {stockRoute} from './route/route.stock.js'
import dotenv from 'dotenv'
dotenv.config()
const port=process.env.PORT || 8080
const app=express();
app.use(express.json())
app.use(cors())
connectDB()

app.use("/",stockRoute)

app.listen(port,()=>{
    console.log("hiii")
})