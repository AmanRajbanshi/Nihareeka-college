const router = require("express").Router();
const newsletter = require("../Controller/newsletter");

router.post("/newsletter", newsletter.postNewsletter);
router.get("/newsletter", newsletter.getNewsletter);
router.delete("/newsletter/:id", newsletter.deleteNewsletter);

module.exports = router;
