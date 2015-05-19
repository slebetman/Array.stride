# array.stride

Implement stride method for javascript arrays to iterate multiple elements per loop.

## Installation

    npm install array.stride

## Usage

In node.js simply require this module. Unlike most node modules, array.stride doesn't 
export anything. Instead it modifies the `Array` prototype to implement a new method: 
`.stride()`.

    require('array.stride');
	
In the browser simply include it. There are no node.js specific code used in the module. 
Either copy/paste the code into your own source or inclde it in a script tag:

    <script src="array.stride.js"></script>

## Syntax

	arr.stride( callback [, default_value ] )

### Parameters

- `callback` : Function to execute for each iteration through the array, takes one or more
  arguments.

- `default_value` : Optional argument to specify what the value of an argument should be
  if there are not enough elements in the array. If not specified the value defaults to
  `undefined`.

## Description

`Array.prototype.stride()` works like `Array.prototype.forEach()`. It iterates through the
array passing elements to a callback function. Only, instead of passing one element per
iteration, `stride()` passes as many elements as there are function arguments.

If there are not enough elements in the array for the last iteration of the loop the
remaining arguments to the callback will be `undefined`. Optionally you can pass a value
as a second argument to `.stride()` for the remaining arguments.

Inside the callback function, `this` is set to the iteration number/count. This behavior
may be overridden by calling `.bind()` on the callback.

`Array.prototype.stride()` returns an array of results of applying the callback on each
element. So I lied a bit: it doesn't work like `.forEach()`, instead it works more like
`Array.prototype.map()`.

## Examples

### Example: Iterating through an array two elements at a time

The following code iterates through the array two elements at a time:

    [1,2,3,4,5,6,7,8].stride(function (a,b) {
	    console.log("(" + a + "|" + b + ")");
	});

    // logs:
    (1|2)
    (3|4)
    (5|6)
	(7|8)

### Example: Iterating through an array three elements at a time

The following code generates a 3x3 2-dimensional array:

	var x = [1,2,3,4,5,6,7,8].stride(function (a,b,c) {
		return [a,b,c];
	});

    // x is now:
    [[1,2,3],
     [4,5,6],
     [7,8,undefined]]

### Example: Default value

Here's how you can specify an alternate value for the `undefined`:

	var x = [1,2,3,4,5,6,7,8].stride(function (a,b,c) {
		return [a,b,c];
	},0); // <-- default_value

	// x is now:
	[[1,2,3],
	 [4,5,6],
	 [7,8,0]]

### Example: this

You can use `this` to get the loop count:

	[1,2,3,4,5,6].stride(function (a,b) {
		console.log(this + " : " + a + "|" + b);
	});
	
	// logs:
	0 : 1|2
	1 : 3|4
	2 : 5|6

