function verificar(){
    const numero = getElementById("numero").value;

    const valor = parseInt(numero);
}
if (isNaN(valor)) {
    document.getElementById("resultado").innerText = "Por favor, digite um número válido";
} else if (valor % 2 === 0){
    documento.getElementById("resultado").innerText = 'O número ${valor} é Impar.';
} else{
    document.getElementById("resultado").innerText = 'O número ${valor} é ímpar.';
}
console.log(resultado)