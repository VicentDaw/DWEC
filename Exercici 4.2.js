"use strict"


function sumar(){
    let num = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    num.in
    var suma = parseInt(num) + parseInt(num2);
    document.getElementById("resultat").innerHTML = "El resultat de la suma es : " +  suma;
}

function resta(){
    let num = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    var resta = num - num2;
    document.getElementById("resultat").innerHTML = "El resultat de la resta es : " + resta;
}

function multiplica(){
    let num = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    var mult = num * num2;
    document.getElementById("resultat").innerHTML = "El resultat de la multiplicacio es " + mult;
}

function dividir(){
    let num = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    var div = num / num2;
    document.getElementById("resultat").innerHTML = "El resultat de la divisió " + div;
}

function exit(){
    document.write("Programa finalitzat")
}