var s = 5;
var a = moment().add(s, 'seconds');
var c, d;

function digi() {
    var b = moment();
    
    if(a.diff(b, 'seconds') == 0){
        //document.getElementById("thebody").style.backgroundColor = 'red';
        c = 10;
    }
    
    if(c > 0){
        c--;
        if((c % 2) == 1){
            document.getElementById("thebody").style.backgroundColor = 'black';
        } else {
            document.getElementById("thebody").style.backgroundColor = 'red';
        }
    } else
        document.getElementById("thebody").style.backgroundColor = 'black';
    
    document.getElementById("tt").innerHTML = b.format("hh:mm:ss A");
    document.getElementById("dd").innerHTML = moment().format("dddd Do MMMM");
    //var d =  new Date();
    //document.getElementById("test").innerHTML = d.getTime() % 2;
    var time = setTimeout(digi, 1000);
}


/*function digi() {
    document.getElementById("tt").innerHTML = moment().hours(5).format("hh:mm:ss A");
    document.getElementById("dd").innerHTML = moment().format("dddd Do MMMM");

    var time = setTimeout(digi, 1000);
}*/