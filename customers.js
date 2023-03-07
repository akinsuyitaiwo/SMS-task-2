const express = require('express');
const app = express();

app.use(express.json());
const customers = [
    {
        customerId: 1,
   name: 'Taiwo',
   email: 'akinsuyitaiwo@gmail.com',
   password: 'paswordone',
   deliveryAddress: 'NO 42 ashipa ayobo, Lagos',
   phone: '09014969379'
    },
    {
        customerId: 2,
   name: 'Tyler',
   email: 'teeboidayo@gmail.com',
   password: 'passwordtwo',
   deliveryAddress: 'Iba Housing estate, Ojo, Lagos',
   phone: '09099943939'
    }
];

app.get('/', (req, res) => {
    res.send(customers);
});

const port = process.env.PORT || 3000
app.listen(port,() => console.log(`listening on ${port}`));

app.get('/api/customers', (req,res) => {
    res.send(customers);
});

app.get('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).send('The customer with the given ID is not on the menu');
    res.send(customer);
});