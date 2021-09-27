"use strict"

var num2 = [];
var i=0;
var resultat = 0;
function calcular(){
    if(resultat <= 1000){
    var num = document.getElementById("numero").value;
     num2.push(num);
    resultat = parseInt(resultat)+parseInt(num2[i]);
    document.getElementById("resposta").innerHTML = resultat;
    i++;

    }else{
        document.getElementById("resposta").innerHTML = " Suma completa Progrma finalitzat " + "<br>" +"Calcul final: " + resultat;
    }

}