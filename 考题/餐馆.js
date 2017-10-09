var tables = [2, 4, 2];
var people = [1, 3, 3, 5, 1];
var money = [3, 5, 7, 9, 10];
function maxMoney(tables, people, money){
    //桌子升序排列
    tables = tables.sort(sortNumber);
    var maxMoney = 0;

    for(var j=0; j<money.length; j++){
        var maxMoneyIndex = getMaxIndex(money);
        //选择人数最符合的一张桌子
        var flag =0;
        for(var i=0; i<tables.length; i++){
            if(tables[i] > people[maxMoneyIndex]){
                maxMoney += money[maxMoneyIndex];
                money.splice(maxMoneyIndex, 1);
                j--;
                people.splice(maxMoneyIndex, 1);
                tables.splice(i, 1);
                i--;
                break;
            }else{
               flag = 1;
            }
        }
        if(flag){
            money.splice(maxMoneyIndex, 1);
            j--;
            people.splice(maxMoneyIndex, 1); 
        }
    }
    console.log(maxMoney);
  
}
function sortNumber(a,b) {
    return a - b;
}
function getMaxIndex(arr){
    var index = 0;
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
            index = i;
        }
    }
    return index;
}
maxMoney(tables, people, money)
