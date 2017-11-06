var arr = [
{
    name: 'p1',
    p1: 1,
    p2: 2,
    p3: 3,
    p4: 12
},
{
    name: 'p2',
    p1: 1,
    p2: 1,
    p3: 3,
    p4: 12
},
{
    name: 'p3',
    p1: 2,
    p2: 2,
    p3: 3,
    p4: 12
},
{
    name: 'p4',
    p1: 2,
    p2: 2,
    p3: 1,
    p4: 12
},
{
    name: 'p5',
    p1: 2,
    p2: 2,
    p3: 11,
    p4: 12
},
{
    name: 'p6',
    p1: 2,
    p2: 2,
    p3: 11,
    p4: 8
}];
arr.sort(function(a, b){
    if(a.p1 == b.p1){
        if(a.p2 == b.p2){
            if(a.p3 == b.p3){
                return a.p4-b.p4;
            }else{
                return a.p3-b.p3;
            }
        }else{
            return a.p2-b.p2;
        } 
    }else{
        return a.p1-b.p1;
    }
})
console.log(arr)