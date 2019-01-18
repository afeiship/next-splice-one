(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  // https://github.com/ustbhuangyi/better-scroll/blob/master/src/util/spliceOne.js
  // As of V8 6.6, depending on the size of the array, this is anywhere
  // between 1.5-10x faster than the two-arg version of Array#splice()

  nx.spliceOne = function(inArray, inIndex) {
    for (; inIndex + 1 < inArray.length; inIndex++) {
      inArray[inIndex] = inArray[inIndex + 1];
    }
    return inArray.pop();
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.spliceOne;
  }
})();
