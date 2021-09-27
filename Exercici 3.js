"use sctrict"
function calcular(){
    var pes = document.getElementById("Pes").value;
    var alt = document.getElementById("Alçada").value;

    var imc = ((pes / (alt * alt)) * 0.9);
    if(imc < 18.5){
        document.getElementById("resultat").innerHTML = "Peso insuficiente"
    }else if(imc > 18.5 && imc <= 24.9){
        document.getElementById("resultat").innerHTML =  imc + " Normopeso";
    }else if(imc >= 25 && imc <= 26.9 ){
        document.getElementById("resultat").innerHTML = imc + " Sobrepeso Grado 1";
    }else if(imc >= 27 && imc <= 29.9){
        document.getElementById("resultat").innerHTML = imc + " Sobrepeso Grado 2";
    }else if(imc >= 30 && imc <= 34.9){
        document.getElementById("resultat").innerHTML = imc + " Obesidad de Tipo 1";
    }else if(imc >= 35 && imc <= 39.9 ){
        document.getElementById("resultat").innerHTML = imc + " Obesidad de Tipo 2";
    }else if(imc >= 40 && imc <= 49.9 ){
        document.getElementById("resultat").innerHTML = imc + " Obesidad Tipo 3";
    }else if(imc >= 50 ){
        document.getElementById("resultat").innerHTML = imc + " Obesidad Tipo 4";
    }
}