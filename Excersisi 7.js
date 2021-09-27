"use strict"

function getRandomInt() {

return Math.floor(Math.random() * (49 - 1)) + 1;

}

function calcular(){
var numeros = [];
var usr = [1,23,44,32,16,42];

for(var i=0;i < 6;i++){
    numeros[i] = getRandomInt();
    }



var fin = "";
for(var x = 0;x < usr.length;x++){
    for(var y=0;y < numeros.length;y++){
        if(usr[x] == numeros[y]){
            fin += usr[x]+ " ";
        }
    }
}

if(fin == ""){
    document.getElementById("resultat").innerHTML = "No coincideix";
   
}else{
    document.getElementById("resultat").innerHTML =  fin +" Coincideix";

    }

}