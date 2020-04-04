const exporess = require('express');
const router = exporess.Router();
var HttpStatus = require('http-status-codes');
// /products
router.get('/', (req, res, next) => {
    res.status(HttpStatus.OK).json({
        message : "List of products 🎀"
    });
});


router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };

    res.status(HttpStatus.OK).json({
        message : "Added new product",
        details: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(HttpStatus.OK).json({
        message : "Product details for id " + id
    });
});

router.put('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(HttpStatus.OK).json({
        message : "Updated details for id " + id
    });
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(HttpStatus.OK).json({
        message : "Product details for id " + id
    });
});

module.exports = router;