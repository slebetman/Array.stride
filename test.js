require('./array.stride');
var assert = require('assert');


assert.equal([1,2,3,4,5].stride(function (a,b) {
	return this + ':' + a + '/' + b;
},'-').join('|'),'0:1/2|1:3/4|2:5/-',
'test1');


assert.equal([1,2,3,4,5].stride(function (a,b,c) {
	return this + ':' + a + '/' + b + '/' + c;
},'-').join('|'),'0:1/2/3|1:4/5/-',
'test2');


assert.equal([1,2,3,4,5].stride(function (a,b,c,d) {
	return this + ':' + a + '/' + b + '/' + c + '/' + d;
},'-').join('|'),'0:1/2/3/4|1:5/-/-/-',
'test3');


console.log('All OK');