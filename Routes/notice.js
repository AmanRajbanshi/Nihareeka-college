const router = require("express").Router();
const notice = require("../Controller/notice");

router.post("/notice", notice.postNotice);
router.get("/notice", notice.getNotice);
router.delete("/notice/:id", notice.deleteNotice);

module.exports = router;
