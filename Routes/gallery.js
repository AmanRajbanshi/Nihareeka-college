const router = require("express").Router();
const gallery = require("../Controller/gallery");

router.post("/gallery", gallery.postGallery);
router.get("/gallery", gallery.getGallery);
router.delete("/gallery/:id", gallery.deleteGallery);

module.exports = router;
