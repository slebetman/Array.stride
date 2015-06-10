Array.prototype.stride = function(callback,undef) {
	var stride_length = callback.length;
	var ret = [];
	var l=0;
	for (var i=0; i<this.length; i+=stride_length) {
		var slice = this.slice(i,i+stride_length);
		if (i+stride_length > this.length) {
			for (var j=this.length%stride_length; j<stride_length; j++) {
				slice[j] = undef;
			}
		}
		ret.push(callback.apply(l,slice));
		l++;
	}
	return ret;
}
