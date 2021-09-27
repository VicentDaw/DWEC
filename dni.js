    function calcular(){
        var num = document.getElementById("num").value;
        var div = 23;
        var resultat = num % div;
        console.log(resultat);
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F','P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C','K', 'E', 'T'];

        if(num <= 0 || num > 99999999){
            document.getElementById("resultat").innerHTML = "Numero incorrecto";  
            stop;            
        }else{

        for(let i = 0 ;i < letras.length;i++){
            console.log(letras[resultat]);
            document.getElementById("resultat").innerHTML = num + letras[resultat];
        }
            }
     }
