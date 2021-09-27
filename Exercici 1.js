"use strict"
function calcular(){
    var nota = document.getElementById("nota").value;

    if(nota > 10 || nota < 0){
   document.getElementById("resultat").innerHTML = "Nota no valida";
 }else if(nota < 5){
     document.getElementById("resultat").innerHTML = "Insuficient";
 }else if(nota == 5){
     document.getElementById("resultat").innerHTML = "Suficient"
 }else if(nota >= 5 && nota < 7){
     document.getElementById("resultat").innerHTML = "Bé"; 
 }else if(nota >= 7 && nota < 9){
     document.getElementById("resultat").innerHTML = "Notable";
 }else if(nota == 10){
     document.getElementById("resultat").innerHTML = "Excellent";
 }

    
        
    

}