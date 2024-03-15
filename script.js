var texto = '';

/*Função para avaliar a entrada de texto, 
faz verificação através de expressão regular e desabilita a 
função do decodificaro caso encontre caracteres não permitidos*/
function verificarTexto(){
    texto = document.getElementById('textoEntrada').value;
    var aviso = document.getElementById('alerta');
    var botaoEncript = document.getElementById('botaoCodificar');
    var botaoDesencript = document.getElementById('botaoDecodificar');

    var regex = /[A-ZÀ-ÖØ-öø-ÿ-!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|~-]/;
    
    if(regex.test(texto)){
        aviso.style.display = 'block';
        botaoEncript.disabled = true;
        botaoDesencript.disabled = true;
    }
    else{
        aviso.style.display = 'none';
        botaoEncript.disabled = false;
        botaoDesencript.disabled = false;
    }
}

/*Função para executar a manipulação de string, 
realizando a troca dos caracteres */
function codificarTexto(){

    texto = texto.replaceAll('e','enter');
    texto = texto.replaceAll('i','imes');
    texto = texto.replaceAll('a','ai');
    texto = texto.replaceAll('o','ober');
    texto = texto.replaceAll('u','ufat');

    return texto;

}

/*Função que engatilha a codificação de texto e
 coloca o resultado obtido no campo específico
*/
function codificado(){
    texto = document.getElementById('textoEntrada').value;
    var textoCodificado = codificarTexto(texto);
    document.getElementById('textoResultado').innerText = textoCodificado;
}

/*Função para executar a manipulação de string, 
realizando a troca dos caracteres */
function decodificarTexto(){

    texto = texto.replaceAll('enter','e');
    texto = texto.replaceAll('imes','i');
    texto = texto.replaceAll('ai','a');
    texto = texto.replaceAll('ober','o');
    texto = texto.replaceAll('ufat','u');

    return texto;

}
/*Função que engatilha a decodificação de texto e
 coloca o resultado obtido no campo específico
*/
function decodificado(){
    texto = document.getElementById('textoEntrada').value;
    var textoDescodificado = decodificarTexto(texto);
    document.getElementById('textoResultado').innerText = textoDescodificado;
}

/*Verificação de evento para limpar a 
área de saída caso seja apagado o input*/
document.getElementById('textoEntrada').addEventListener('input', function() {
    if (this.value.trim() === '') {
        document.getElementById('textoResultado').innerText = '';
    }
});

//Função para copiar o texto.
function copiarTexto(){
    var textoResultado = document.getElementById("textoResultado");
    textoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}