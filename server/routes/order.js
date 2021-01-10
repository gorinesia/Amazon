const router = require('express').Router();
const Order = require('../models/order');
const verifyToken = require('../middlewares/verify-token');

router.get('/orders', verifyToken, async (req, res) => {
  try {
    let products = await Order.find({ owner: req.decoded._id }).populate('owner products.productID, ')
  } catch (err) {
    console.log(err);
  }
})
