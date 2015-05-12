# array.stride

Implement stride method for javascript arrays to iterate multiple elements per loop.

## Installation

    npm install array.stride

## Usage

Simply require this module. Unlike most node modules, array.stride doesn't export anything.
Instead it modifies the `Array` prototype to implement a new method: `.stride()`.

## Syntax

	arr.stride(callback)

### Parameters

- `callback` : Function to execute for each iteration through the array, takes one or more
  arguments. 
  
## Description

`Array.prototype.stride()` works like `Array.prototype.forEach()`. It iterates through the
array passing elements to a callback function. Only, instead of passing one element per
iteration, `stride()` passes as many elements as there are function arguments.

## Examples

### Example: Iterating through an array two elements at a time

The following code iterates through the array two elements at a time:

    [1,2,3,4,5,6,7,8].stride(function (a,b) {
	    console.log("[" + a + "|" + b + "]");
	});

    // logs:
    [1|2]
    [3|4]
    [5|6]
	[7|8]

### Example: Iterating through an array three elements at a time

The following code processes the array three elements at a time:


	[1,2,3,4,5,6,7,8].stride(function (a,b,c) {
		console.log("[" + a + "|" + b + "|" + c + "]");
	});

    // logs:
    [1|2|3]
    [4|5|6]
    [7|8|undefined]

