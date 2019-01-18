var nx = require('next-js-core2');
require('../src/next-splice-one');

test('nx.spliceOne benchmark:', function() {
  var times = 10000000;

  console.group('slice');
  console.time('array slice');
  for (var i = 0; i < times; i = i + 1) {
    var array = [1, 2, 3, 4, 5, 6];
    var val = array.splice(2,1);
  }
  console.timeEnd('array slice');
  console.groupEnd('slice');

  console.group('array-index');
  console.time('array index');
  for (var i = 0; i < times; i = i + 1) {
    var array = [1, 2, 3, 4, 5, 6];
    var val = nx.spliceOne(array,2)
  }
  console.timeEnd('array index');
  console.groupEnd('array-index');
});
