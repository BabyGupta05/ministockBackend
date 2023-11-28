import mongoose from "mongoose";
import { Stock } from "./model/model.stock.js";
import { connectDB } from "./db.js";
import stocksData from "./stocksData.json" assert {type:'json'};


const pushStockData = async () => {
  try {
   
    connectDB();
    await Stock.insertMany(stocksData);
    console.log("Stock data inserted successfully.");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error inserting stock data:", error);
    mongoose.connection.close();
  }
};

pushStockData();
