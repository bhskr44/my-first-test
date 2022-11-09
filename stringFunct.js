const StringClass = {
stringLength: (str) => {
  if (str.length < 0 || str.length > 10)
    throw new Error('String length must be between 0 and 10');
  return str.length;
},
 reverseString: (str) => {
  return str.split('').reverse().join('');
}
}


module.exports = StringClass;
