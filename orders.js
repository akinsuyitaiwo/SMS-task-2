const express = require('express');
const app = express();

app.use(express.json());

const orders = [
    {
    orderId: ObjectId,
    customerId: ObjectId,
    items: [
    {
     productId: ObjectId,
    quantity: number
     }
        ],
     totalAmount: number,
    status: string,
    orderDate: date,
    deliveryAddress: String,
    paymentType: String
   }
]

app.get('/', (req, res) => {
    res.send(orders);
});

const port = process.env.PORT || 3000
app.listen(port,() => console.log(`listening on ${port}`));

app.get('/api/orders', (req,res) => {
    res.send(orders);
});

app.get('/api/orders/:{customerId}', (req, res) => {
    const order = orders.find(c => c.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('The order with the given ID is not on the menu');
    res.send(order);
});

app.get('/api/orders/:{orderId}', (req, res) => {
    const order = orders.find(c => c.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('The order with the given ID is not on the menu');
    res.send(order);
});