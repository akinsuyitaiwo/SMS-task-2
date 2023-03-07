const express = require('express');
const app = express();

app.use(express.json());

const products = [
    {
        id: 1,
        name: 'HP pavilion Aero',
        description: 'This is Windows 11 HomeAMD Ryzen 5000 processors13.3-inch FHD display with taller 16:10 aspect ratioUltra lightweight design powerful ',
        price: 529,
        categories: ['1']
    },
    {
        id: 2,
        name: 'HP pavilion X360',
        description: 'Windows 11 HomeIntel® Celeron™ and i3 Processors available500GB and 1TB Hard Drive optionsAudio by B&O PLAY',
        price: 549,
        categories: ['2']
    }
];

app.get('/', (req,res) => {
    res.send(products);
});
const port = process.env.PORT || 3000
app.listen(port,() => console.log(`listening on ${port}`));

app.get('/api/products', (req,res) => {
    res.send(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(c => c.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('The item with the given ID is not on the menu');
    res.send(product);
});

function validateProduct(product) {
    const schema = {
        name: Joi.string().required(),
        description: Joi.string(),
        price: Joi.number()
    };
    return Joi.validate(product,schema);
};

app.post('/api/products', (req, res) => {
    const { error }  = validateproduct(req.body);
    if (error) return res.status(400).send(error.details[0].message);
   
    const product = {
        id: products.length +1,
        name: req.body.name,

    };
    courses.push(product)
    res.send(product);
});