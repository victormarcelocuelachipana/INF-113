function calculateCombinatoria() {
    // Obtén los valores de n y k
    var n = parseInt(document.getElementById("n").value);
    var k = parseInt(document.getElementById("k").value);

    // Verifica que los valores sean números y no nulos
    if (isNaN(n) || isNaN(k) || n === null || k === null) {
        alert("Por favor, ingrese números válidos en ambos campos.");
        return;
    }

    // Calcula la combinación
    var result = combinacion(n, k);

    // Muestra el resultado
    document.getElementById("result").innerHTML = "Resultado: " + result;
}

// Función para calcular la combinación
function combinacion(n, k) {
    if (k < 0 || k > n) {
        return 0;
    }

    // Fórmula de combinación: n! / (k! * (n - k)!)
    return factorial(n) / (factorial(k) * factorial(n - k));
}

// Función para calcular el factorial
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
