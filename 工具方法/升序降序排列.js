//升序排列
function sortNumber(a,b) {
    return a - b
}
//降序排列
function sortNumber(a,b) {
    return b - a
}
arr.sort(sortNumber);