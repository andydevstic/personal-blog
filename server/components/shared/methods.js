module.exports.getDataFormatInString = function (data) {
  let result = null
  switch (typeof data) {
    case 'string':
      result =  `'${data}'`
      break;
    default:
      result = `${data}`
      break;
  }
  return result
}