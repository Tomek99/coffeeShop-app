const express = require("express");
const router = express.Router();

const {
  getMessages,
  postMessage,
  putMessage,
  deleteMessage,
} = require("../controllers/messagesController");

router.route("/getMessages").get(getMessages);
router.post("/message/postMessage").post(postMessage);
router.put("/message/putMessage").put(putMessage);
router.delete("/message/deleteMessage").delete(deleteMessage);

module.exports = router;
