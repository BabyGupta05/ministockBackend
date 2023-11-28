import mongoose from "mongoose";

const stockSchema= new mongoose.Schema({
    symbol: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
    },
  });
  const Stock = mongoose.model('Stock', stockSchema);
  export {Stock}
