module.exports.CentralErrorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? 'Произошла ошибка на сервере' : `Ошибка: ${message} Код ошибки: ${err.statusCode}` });
  next();
};
