// Calculadora Científica Básica

// 1. Suma de tres valores
function sumar() {
  let n1 = parseFloat(document.getElementById("num1").value) || 0;
  let n2 = parseFloat(document.getElementById("num2").value) || 0;
  let n3 = parseFloat(document.getElementById("num3").value) || 0;
  let suma = n1 + n2 + n3;
  document.getElementById("resultado").innerText = "La suma de los valores constantes es: " + suma;
}

// 2. Cuadrado de un número
function cuadrado() {
  let n1 = parseFloat(document.getElementById("num1").value);
  if (isNaN(n1)) {
    alert("Ingrese un número en el campo Número 1");
    return;
  }
  let resultado = n1 * n1;
  document.getElementById("resultado").innerText = "El cuadrado de " + n1 + " es: " + resultado;
}

// 3. Promedio de tres calificaciones
function promedio() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let n3 = parseFloat(document.getElementById("num3").value);
  let promedio = (n1 + n2 + n3) / 3;
  document.getElementById("resultado").innerText = "El promedio es: " + promedio.toFixed(2) + " puntos.";
}

// 4. Conversión de metros a cm y km
function convertir() {
  let metros = parseFloat(document.getElementById("num1").value);
  if (isNaN(metros)) {
    alert("Ingrese un valor en metros en el campo Número 1");
    return;
  }
  let cm = metros * 100;
  let km = metros / 1000;
  document.getElementById("resultado").innerText = metros + " metros equivalen a " + cm + " cm y " + km + " km.";
}

// 5. Comparación de dos valores
function comparar() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);

  if (n1 === n2) {
    alert("Los números no pueden ser iguales. Ingrese valores distintos.");
    return;
  }

  let mayor = n1 > n2 ? n1 : n2;
  let menor = n1 < n2 ? n1 : n2;
  let diferencia = Math.abs(n1 - n2);

  document.getElementById("resultado").innerText =
    "El número mayor es " + mayor + ", el menor es " + menor + " y su diferencia es " + diferencia + ".";
}
