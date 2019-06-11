const sendErrorResponse = (res, ex) => {
  if (ex.message) {
    return res.status(400).send(ex.message);
  }
  res.status(400).send(ex);
};

module.exports = sendErrorResponse;
