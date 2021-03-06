function whatIsInAName(collection, source) {
  var sourceProps = Object.keys(source); // Returns ["last"]
  
  return collection.filter(function (obj) {
    for (var i=0; i < sourceProps.length; i++) {
      if (!obj.hasOwnProperty(sourceProps[i]) || obj[sourceProps[i]] !== source[sourceProps[i]]) {
        return false;
      }
    }
    return true;
  });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // [{ first: "Tybalt", last: "Capulet" }]

// Method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
