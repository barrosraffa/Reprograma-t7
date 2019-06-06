function exibir(){

let mes = parseInt(document.getElementById("numero").value);

switch(mes){
    case 1:
        alert("Janeiro")
    break;

    case 2:
        alert("Fevereiro")
    break;

    case 3:
        alert("Março")
    break;

    case 4:
        alert("Abril")
    break;

    case 5:
        alert("Maio")
    break;

    case 6:
        alert("Junho")
    break;

    case 7:
        alert("Julho")
    break;

    case 8:
        alert("Agosto")
    break;

    case 9:
        alert("Setembro")
    break;

    case 10:
        alert("Outubro")
    break;

    case 11:
        alert("Novembro")
    break;
    
    case 12:
        alert("Dezembro")
    break;

    default:
        alert("Digite um numero de 1 a 12")
}
}