import { Router } from "express";
import { Stock } from './../model/model.stock.js';

const stockRoute = Router();


const updateStockPrices = async () => {
  try {
    const stocks = await Stock.find();
    const updatedStocks = [];
    const currentTime = new Date();
    stocks.forEach(async (stock) => {
      const updatedPrice = (stock.currentPrice + Math.random()).toFixed(2);
      const updatedStock = await Stock.findByIdAndUpdate(stock._id, { currentPrice: updatedPrice }, { new: true });
      updatedStocks.push(updatedStock);
    });

    console.log(`Stock prices updated successfully at ${currentTime}.`);
  } catch (err) {
    console.error('Error: updating stock prices:', err.message);
  }
};

setInterval(updateStockPrices, 60000);

stockRoute.get('/stocks', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export { stockRoute };
