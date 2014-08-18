// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  } else if (Array.isArray(obj)) {
    // is an array
  } else if (typeof obj === 'object') {
    // is an object
  } else {
    return new String(obj).toString();
  }

  return _.reduce(obj, function(memo, val, key, list) {
    if (Array.isArray(val)) {
      // is an array
    } else if (typeof val === 'object') {
      // is an object
    } else {
      return memo += val;
    }
  }, '');
};
