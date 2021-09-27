"use strict"
function calcular(){
    var num = document.getElementById("num").value;
  
    for(let i=4;i > 0;i--){
       
        console.log(i)
     document.getElementById("resultat").innerHTML = (num * i);  
     num = num* i;
    } 
   
}