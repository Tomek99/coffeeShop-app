const express = require("express");
const router = express.Router();

const {
  getMessages,
  postMessage,
  putMessage,
  deleteMessage,
} = require("../controllers/messagesController");

router.route("/get-messages").get(getMessages);
router.route("/message/post-message").post(postMessage);
router.route("/message/put-message").put(putMessage);
router.route("/message/delete-message").delete(deleteMessage);

module.exports = router;
