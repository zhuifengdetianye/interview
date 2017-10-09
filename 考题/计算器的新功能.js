/*
//判断是否是素数
function isSuShu(n){
    if(n < 2) return false;
    for(var i=2; i<=Math.sqrt(n); i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}
*/

function newFunctionOfCounter(n){
    var arr = [];
    var i = 2;
    while(i<=n){
        if(n%i == 0){
            arr.push(i);
            n = n/i;
        }else{
            i++;
        }
    }
    printOut(arr);
}
function printOut(numArr){
    var arr1 = [];
    var arr = [
        [
            ' - ',
            '| |',
            '   ',
            '| |',
            ' - '
        ],
        [
            '   ',
            '  |',
            '   ',
            '  |',
            '   '
        ],
        [
            ' - ',
            '  |',
            ' - ',
            '|  ',
            ' - '
        ],
        [
            ' - ',
            '  |',
            ' - ',
            '  |',
            ' - '
        ],
        [
            '   ',
            '| |',
            ' - ',
            '  |',
            '   '
        ],
        [
            ' - ',
            '|  ',
            ' - ',
            '  |',
            ' - '
        ],
        [
            ' - ',
            '|  ',
            ' - ',
            '| |',
            ' - '
        ],
        [
            ' - ',
            '  |',
            '   ',
            '  |',
            '   '
        ],
        [
            ' - ',
            '| |',
            ' - ',
            '| |',
            ' - '
        ],
        [
            ' - ',
            '| |',
            ' - ',
            '  |',
            ' - '
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            ' '
        ]
    ];
    str = numArr.join('*');
    for(var i=0; i<str.length; i++){
        if(str[i] == '*'){
            arr1.push(arr[10]);
        }else{
            arr1.push(arr[parseInt(str[i])]);
        }
    }
    for(var i=0; i<5; i++){
        var str = '';
        for(var j=0; j<arr1.length; j++){
            str +=arr1[j][i];
        }
        console.log(str);
    }
}
newFunctionOfCounter(25);
//newFunctionOfCounter