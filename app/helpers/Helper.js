function Helper() {

};

Helper.prototype.isValidDate = function isValidDate(value) {
  if (Object.prototype.toString.call(value) === "[object Date]") {
    if (isNaN(d.getTime())) {  // d.valueOf() could also work
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

module.exports = function () {
  return Helper;
}