"use strict"

function buscamines(){
var x = 5;
var y = 5;
var tauler =[[0,0,0,1,1],[1,1,0,1,0],[0,0,0,0,0],[1,0,1,0,1],[1,0,0,0,1]];

var h = document.getElementById("hori").value;
var v = document.getElementById("vert").value;


for(var i=0;i < x;i++){
    tauler[i] = new Array(y);
    
    if(tauler[h][v] == 0){
        document.getElementById("tauler").innerHTML = "No hi ha cap Mina";
    }else if(tauler[h][v] == 1) {
        document.getElementById("tauler").innerHTML = "Ha explotat una mina";
    }
}

}