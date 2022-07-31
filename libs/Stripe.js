require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createProducto(){
  const Iphone13ProMax =  await stripe.products.create({
    name: 'Iphone 13 Pro Max' ,
    type: 'Apple', 
    description: 'Iphone 13 Pro Max 128gb'
  });
  const iphoneX =  await stripe.products.create({
    name: 'Iphone x' ,
    type: 'Apple', 
    description: 'Iphone x 64gb'
  });
  const Iphone11 =  await stripe.products.create({
    name: 'Iphone 11' ,
    type: 'Apple', 
    description: 'Iphone 11 64gb'
  });

  return Iphone13ProMax, iphoneX, Iphone11;
};

