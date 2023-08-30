const router = require('express').Router();
const apiRoutes = require('./api');

//Send all the requests that begin with /api to the index.js in the api folder.
router.use('/api', apiRoutes);

//Send all invalid requests a message in HTML saying "Wrong Route!".
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;