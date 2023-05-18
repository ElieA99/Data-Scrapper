# Data-Scrapper
NodeJS API Example that uses the https://www.scraperapi.com/ key to scrap data from specific website as demo
https://www.scraperapi.com/ Free account gives you 5000 request/month

In this Tutorial i used Amazon website https://www.amazon.com/
lets take this example of the product : https://www.amazon.com/SAMSUNG-microSDXC-Expanded-MB-ME256KA-AM/dp/B09B1GXM16/ref=sr_1_1?qid=1684425421&s=electronics&sr=1-1

first part is the amazon url, followed by the product name /dp/ and the product id

lets take a look on the code :
<br>
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
<br>
with this function after you run in the browser localhost:4500/products/give it the product id B09B1GXM16 it will return all the related data as json format
<br>
{
    "name": "",
    "product_information": {},
    "brand": "",
    "brand_url": "",
    "full_description": "",
    "pricing": "",
    "list_price": "",
    "shipping_price": "FREE",
    "availability_status": "In Stock                                                   
    "images":"'
    }
