import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const connectDB=()=>{
    try {
        mongoose.connect(process.env.DATABASE);
        console.log("db connected")
    }
     catch (error) {
        console.log("db.js",error)
    }   
}
export {connectDB} 