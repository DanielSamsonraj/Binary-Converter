function decToBin() {
    var dec=document.getElementById('dec-value').value;
    document.getElementById('binNo').innerHTML=(dec>>>0).toString(2);
}
function binToDec() {
    var bin=document.getElementById('bin-value').value;
    document.getElementById('decNo').innerHTML=parseInt((bin+'').replace(/[^01]/gi,''),2);
}