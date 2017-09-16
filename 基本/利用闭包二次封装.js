function partialUsingArguments(fn) {
	return function(arg){
        return function result(){
            return fn.apply(this, arg.concat(Array.prototype.slice.call(arguments)));
       } 
    }(Array.prototype.slice.call(arguments, 1))
}