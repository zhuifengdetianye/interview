function MP(p, t){
    var m = p.length;
    var n = t.length;
    if(m > n){
        alert('Unsuccessful match!');
        return;
    }

    var i = 0; j = 0; mpNext = [];
    preMp(p, mpNext);
    console.log(mpNext)
}
function preMp(p, mpNext){
    var i = 0;
    var j = mpNext[0] = -1;
    while(i < p.length){
        while(j > -1 && p[i] == p[j])
            j = mpNext[j];
        mpNext[++i] = ++j;
    }
}
MP('hello','helloworld')