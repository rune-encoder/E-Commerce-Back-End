const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

//Send all the requests that begin with /categories to the category-routes.js in the api folder.
router.use('/categories', categoryRoutes);

//Send all the requests that begin with /products to the product-routes.js in the api folder.
router.use('/products', productRoutes);

//Send all the requests that begin with /tags to the tag-routes.js in the api folder.
router.use('/tags', tagRoutes);

module.exports = router;
