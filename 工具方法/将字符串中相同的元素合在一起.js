var pattern = /(\w)\1*/g;
var strSortedArr = str.split("").sort().join("").match(pattern);