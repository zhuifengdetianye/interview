function useArguments() {
	var sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(useArguments(1, 2, 3, 4));