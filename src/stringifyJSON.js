// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'undefined' || typeof obj === 'function') {
    return '';
  } else if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  } else if (Array.isArray(obj)) {
    // is an array
    var unclosedArray = _.reduce(obj, function(memo, val, index, list) {
      var stringifiedValue = stringifyJSON(val);
      return stringifiedValue === '' ? memo : memo += stringifyJSON(val) + ',';
    }, '[');
    if (unclosedArray.charAt(unclosedArray.length - 1) === ',') {
      unclosedArray = unclosedArray.slice(0, -1);
    }
    return unclosedArray + ']';
  } else if (typeof obj === 'object') {
    // is an object
    var unclosedObject = _.reduce(obj, function(memo, val, key, list) {
      var stringifiedValue = stringifyJSON(val);
      return stringifiedValue === '' ? memo : memo += stringifyJSON(key) + ':' + stringifyJSON(val) + ',';
    }, '{');
    if (unclosedObject.charAt(unclosedObject.length - 1) === ',') {
      unclosedObject = unclosedObject.slice(0, -1);
    }
    return unclosedObject + '}';
  } else {
    return new String(obj).toString();
  }
};
