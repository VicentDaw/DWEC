"use strict"
function calcular(){
    var num = [3,2,1,4,5,6,7,8,9,10,11,12,13,14,15];
    var max = num[0];
    var min = num[0];
    for(var i=0;i<num.length;i++){
        if(num[i] > max){
            max = num[i];
        }else if(num[i] < min){
            min = num[i];
        }
    }
      document.getElementById("resultat").innerHTML = num;
      document.getElementById("resultat").innerHTML = "Valor maxim " + max + "\n" + "Valor minim " + min;
      
}