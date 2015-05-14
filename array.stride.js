Array.prototype.stride = function(callback) {
	var stride_length = callback.length;
	var ret = [];
	for (var i=0; i<this.length; i+=stride_length) {
		ret.push(callback.apply(i,this.slice(i,i+stride_length)));
	}
	return ret;
}
