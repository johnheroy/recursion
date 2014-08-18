// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var results = [];
  var getElementsByClassNameInContainer = function(element) {
    for (var k in element.classList) {
      if (element.classList[k] === className) {
        results.push(element);
        break;
      }
    }
    if (element.childNodes.length > 0) {
      for (var i = 0; i < element.childNodes.length; i++) {
        getElementsByClassNameInContainer(element.childNodes[i]);
      }
    }
  };
  getElementsByClassNameInContainer(document.body);
  return results;
};
