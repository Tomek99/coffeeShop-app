const asyncHandler = require("express-async-handler");

const getMessages = asyncHandler(async (req, res) => {
  res.status(200).json(true);
});

const postMessage = asyncHandler(async (req, res) => {
  res.status(200).json(true);
});

const putMessage = asyncHandler(async (req, res) => {
  res.status(200).json(true);
});

const deleteMessage = asyncHandler(async (req, res) => {
  res.status(200).json(true);
});

module.exports = {
  getMessages,
  postMessage,
  putMessage,
  deleteMessage,
};
