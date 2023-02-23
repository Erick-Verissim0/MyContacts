module.exports = (error, req, res, next) => {
  console.log('Error Handler: ', error);
  res.sendStatus(500);
};
