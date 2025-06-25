let precio = 400000

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const boton1 = document.querySelector('.boton1')
boton1.onclick = function () {
    let cantidad = document.querySelector('.cantidad')
    let suma = Number(cantidad.innerHTML) + 1
    cantidad.innerHTML = suma

    let multi = Number(cantidad.innerHTML)
    let multiTotal = multi * precio
    const total = document.querySelector(".valor-total")
    total.innerHTML = multiTotal
}

const boton2 = document.querySelector('.boton2')
boton2.onclick = function () {
    let cantidad2 = document.querySelector('.cantidad')
    let resta = Number(cantidad2.innerHTML) - 1
    cantidad2.innerHTML = resta

    let multi = Number(cantidad2.innerHTML)
    let multiTotal = multi * precio
    const total = document.querySelector(".valor-total")
    total.innerHTML = multiTotal
}

