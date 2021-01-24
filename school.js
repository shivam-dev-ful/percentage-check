
function percent(){

    
var tatal=document.getElementById("total").value;
var base=document.getElementById("optain").value;

var got= ((base * 100) / tatal);
var result= `hi bro you got ${got} % Congratulations!`
document.getElementById("output").innerText=result;

}