const express = require("express");
const router = express.Router();

const  {linkshortner,redirector} = require("../controllers/url");

router.post('/short',linkshortner);
router.get('/:shortId',redirector);


module.exports = router;