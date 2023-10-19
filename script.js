let buttons = document.querySelectorAll(".button")

// adicionamos um evento em cada elemento button
buttons.forEach((button) => {
    button.addEventListener("click", apresentar_valor);
})

// essa função coloca o elemento na barra da calculadora
function apresentar_valor(event) {
    let value = event.target.innerText;
    document.getElementById("tela").value += value;
}

// essa função faz o calculo que foi adicionado no input
function calc() {
    let expressao = document.getElementById("tela").value;
    try {
        var result = eval(expressao);
        document.getElementById('tela').value = result
    } catch {
        console.log("deu errado")
    }
}

// deleta os elementos dentro do input
function dell(){
    document.getElementById('tela').value = ''
}

