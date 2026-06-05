const buttonSotear = document.querySelector(".generate-number-button")
const visorSoteado = document.querySelector(".mostrar-sorteado")

function sotear() {

    const min = Math.ceil(document.querySelector(".input1").value)
    const max = Math.floor(document.querySelector(".input2").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;


    visorSoteado.innerHTML = result
}

buttonSotear.addEventListener("click", sotear)
