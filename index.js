require('dotenv').config();
express = require('express');
request = require('request-promise');

app = express();
PORT = process.env.PORT
KEY = process.env.API_KEY
BaseURL = `http://api.scraperapi.com?api_key=${KEY}&autoparse=true`
Scrapping_Url = 'https://www.amazon.com'//url example that want to scrapp

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>HELLO WORLD</h1>')
})

//Get product details
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;

    try {

        const response = await request(`${BaseURL}&url=${Scrapping_Url}/dp/${productId}`)
        res.json(JSON.parse(response));

    } catch (error) {
        res.json(error)
    }
})

//Get product reviews
app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;

    try {

        const response = await request(`${BaseURL}&url=${Scrapping_Url}/product-reviews/${productId}`)
        res.json(JSON.parse(response));

    } catch (error) {
        res.json(error)
    }
})

//Get product offers
app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;

    try {

        const response = await request(`${BaseURL}&url=${Scrapping_Url}/gp/offer-listing/${productId}`)
        res.json(JSON.parse(response));

    } catch (error) {
        res.json(error)
    }
})

//Get search
app.get('/search/searchQuery', async (req, res) => {
    const { searchQuery } = req.params;

    try {

        const response = await request(`${BaseURL}&url=${Scrapping_Url}/?sk=${searchQuery}`)
        res.json(JSON.parse(response));

    } catch (error) {
        res.json(error)
    }
})

app.listen(PORT, () => { console.log(`Server is running on PORT: ${PORT}`) })