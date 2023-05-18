# Data-Scrapper
NodeJS API Example that uses the https://www.scraperapi.com/ key to scrap data from specific website as demo
https://www.scraperapi.com/ Free account gives you 5000 request/month

In this Tutorial i used Amazon website https://www.amazon.com/
lets take this example of the product : https://www.amazon.com/SAMSUNG-microSDXC-Expanded-MB-ME256KA-AM/dp/B09B1GXM16/ref=sr_1_1?qid=1684425421&s=electronics&sr=1-1

first part is the amazon url, followed by the product name /dp/ and the product id

lets take a look on the code :
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
with this function after you run in the browser localhost:4500/products/give it the product id B09B1GXM16 it will return all the related data as json format
{
    "name": "SAMSUNG EVO Select Micro SD-Memory-Card + Adapter, 256GB microSDXC 130MB/s Full HD & 4K UHD, UHS-I, U3, A2, V30, Expanded Storage for Android Smartphones, Tablets, Nintendo-Switch (MB-ME256KA/AM)",
    "product_information": {},
    "brand": "Visit the SAMSUNG Store",
    "brand_url": "https://www.amazon.com/stores/Samsung%C2%AE/page/F50AFABA-4CDE-4A95-84D0-CA4C61819FEB?ref_=ast_bln",
    "full_description": "",
    "pricing": "$19.99",
    "list_price": "$39.99$39.99",
    "shipping_price": "FREE",
    "availability_status": "In Stock                                                      In Stock.",
    "images": [
        "https://m.media-amazon.com/images/I/412hxiwuTyL.jpg",
        "https://m.media-amazon.com/images/I/410UJPkRkLL.jpg",
        "https://m.media-amazon.com/images/I/41va5T4DHeL.jpg",
        "https://m.media-amazon.com/images/I/41eWP9r1QkL.jpg",
        "https://m.media-amazon.com/images/I/41RXif-sFJL.jpg",
        "https://m.media-amazon.com/images/I/31U22Ah4dzL.jpg",
        "https://m.media-amazon.com/images/I/41ifB6335iL.jpg"
    ],
    "product_category": "Electronics › Computers & Accessories › Computer Accessories & Peripherals › Memory Cards › Micro SD Cards",
    "average_rating": 4.7,
    "small_description": "About this item ALL THE SPACE YOU NEED: Store tons of media on your phone, load games or download more apps on your tablet at top-notch speed, making transfers seamless and reliable FAST AND SMOOTH: With superfast U3, class 10 rated transfer speeds of up to 130MB/s¹,²and UHS-I Interface³ big apps load and run smoothly, while 4K video remains sharp with A2, V30, and USH-I Interface EXPAND AND STORE BIG: Find your perfect fit from 64GB, 128GB, 256GB and 512GB; Select the best capacity for all your memories. Speed class: U3 YOU'RE FULLY PROTECTED: EVO Select Plus provides reliable storage and takes on life’s adventures with water⁴, temperature⁵, X-ray⁶, ⁷magnet, drop⁸, and wears⁹ out protection; Backed by a 10-year limited warranty; Proofs are for the microSD card and do not include the adaptor FLASH MEMORY CARD: Performance and reliability you can count on from the flash memory brand; All firmware and components are produced in-house",
    "feature_bullets": [
        "ALL THE SPACE YOU NEED: Store tons of media on your phone, load games or download more apps on your tablet at top-notch speed, making transfers seamless and reliable",
        "FAST AND SMOOTH: With superfast U3, class 10 rated transfer speeds of up to 130MB/s¹,²and UHS-I Interface³ big apps load and run smoothly, while 4K video remains sharp with A2, V30, and USH-I Interface",
        "EXPAND AND STORE BIG: Find your perfect fit from 64GB, 128GB, 256GB and 512GB; Select the best capacity for all your memories. Speed class: U3",
        "YOU'RE FULLY PROTECTED: EVO Select Plus provides reliable storage and takes on life’s adventures with water⁴, temperature⁵, X-ray⁶, ⁷magnet, drop⁸, and wears⁹ out protection; Backed by a 10-year limited warranty; Proofs are for the microSD card and do not include the adaptor",
        "FLASH MEMORY CARD: Performance and reliability you can count on from the flash memory brand; All firmware and components are produced in-house"
    ],
    "total_reviews": 52147,
    "total_answered_questions": 417,
    "customization_options": {
        "Capacity": [
            {
                "is_selected": false,
                "url": "https://www.amazon.com/dp/B09B1F9L52/ref=twister_B09Q7Q2WZ1?_encoding=UTF8&psc=1",
                "value": "64GB",
                "price_string": "$10.99",
                "price": 10.99,
                "image": null
            },
            {
                "is_selected": false,
                "url": "https://www.amazon.com/dp/B09B1JFY24/ref=twister_B09Q7Q2WZ1?_encoding=UTF8&psc=1",
                "value": "128GB",
                "price_string": "$12.99",
                "price": 12.99,
                "image": null
            },
            {
                "is_selected": true,
                "url": null,
                "value": "256GB",
                "price_string": "$19.99",
                "price": 19.99,
                "image": null
            },
            {
                "is_selected": false,
                "url": "https://www.amazon.com/dp/B09B1HMJ9Z/ref=twister_B09Q7Q2WZ1?_encoding=UTF8&psc=1",
                "value": "512GB",
                "price_string": "$44.99",
                "price": 44.99,
                "image": null
            }
        ]
    },
    "seller_id": null,
    "seller_name": "Amazon.com",
    "fulfilled_by_amazon": true,
    "fast_track_message": "",
    "aplus_present": false
}

