const express = require('express'); 
const router = express.Router(); 
const checkout = require('../services/checkout.js');
const checkoutValidate = new checkout();

router.post('/checkout',async(req,res) =>{
  try {
    const {id,amount} =req.body
    const paymentIntent = await checkoutValidate.checkout(id,amount);
    console.log(paymentIntent);
    res.send("Pago realizado correctamente")
  } catch (error) {
    res.send("Error al realizar el pago")
    res.status(500).json({error:error.message});
  } 
})

  

module.exports = router;
