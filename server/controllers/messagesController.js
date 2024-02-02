const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");

const getMessages = asyncHandler(async (req, res) => {
  const response = await Message.find();
  res.status(200).json(response);
});

const postMessage = asyncHandler(async (req, res) => {
  const { fullName, number, message } = req.body;
  const response = await Message.create({
    fullName,
    number,
    message,
  });
  res.status(200).json(response);
});

const putMessage = asyncHandler(async (req, res) => {
  const response = await Message.findByIdAndUpdate(req._id, {
    isCompleted: req.isCompleted,
  });
  res.status(200).json(response);
});

const deleteMessage = asyncHandler(async (req, res) => {
  const response = await Message.findByIdAndDelete(req.body._id);
  res.status(200).json(response);
});

module.exports = {
  getMessages,
  postMessage,
  putMessage,
  deleteMessage,
};
