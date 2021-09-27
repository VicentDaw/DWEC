function resposta(){
    var pais = document.getElementById("pais").value;

    switch(pais.toLowerCase()){

        case "españa":
            document.getElementById("res").innerHTML = "Madrid";
        break;

        case "frança":
        document.getElementById("res").innerHTML = "París";
        break;

        case "alemania":
        document.getElementById("res").innerHTML = "Berlín";
        break;

        case "argentina":
        document.getElementById("res").innerHTML = "Buenos Aires";
        break;

        case "australia":
        document.getElementById("res").innerHTML = "Canberra";
        break;

        case "bélgica":
        document.getElementById("res").innerHTML = "Bruselas";
        break;

        case "brasil":
        document.getElementById("res").innerHTML = "Brasilia";
        break;

        case "colombia":
        document.getElementById("res").innerHTML = "Bogotá";
        break;

        case "einamarca":
        document.getElementById("res").innerHTML = "Copenhague";
        break;

        case "Egipto":
        document.getElementById("res").innerHTML = "El Cairo";
        break;

        case "india":
        document.getElementById("res").innerHTML = "Nueva Delhi";
        break;

        case "japón":
        document.getElementById("res").innerHTML = "Tokyo";
        break;

        case "noruega":
        document.getElementById("res").innerHTML = "Oslo";
        break;

        case "serbia":
        document.getElementById("res").innerHTML = "Belgrado";
        break;

        case "rusia":
        document.getElementById("res").innerHTML = "Moscú";
        break;

        case "china":
        document.getElementById("res").innerHTML = "Pkín";
        break;

        case "eixir":
            exit()
        break;

         default:
            document.getElementById("res").innerHTML = "Resposta incorreccta o no disponile.";
            break;
        
    }
}