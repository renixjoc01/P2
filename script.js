// === Calculadora Científica Básica ===
// Programación Web III - Renix Guillen
function sumarValores() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const n3 = parseFloat(document.getElementById("num3").value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    document.getElementById("resultado1").innerText =
      "⚠️ Por favor, ingrese los tres números correctamente.";
    return;
  }

  const suma = n1 + n2 + n3;
  document.getElementById("resultado1").innerText =
    `La suma de los valores ingresados (${n1}, ${n2}, ${n3}) es: ${suma}`;
}

// 2️⃣ Cuadrado de un número
function calcularCuadrado() {
  const num = parseFloat(document.getElementById("numeroCuadrado").value);
  if (isNaN(num)) {
    document.getElementById("resultado2").innerText =
      "⚠️ Por favor, ingrese un número válido.";
    return;
  }
  document.getElementById("resultado2").innerText =
    `El cuadrado de ${num} es: ${num ** 2}`;
}

// 3️⃣ Promedio de calificaciones
function calcularPromedio() {
  const nombre = document.getElementById("nombreEstudiante").value;
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const n3 = parseFloat(document.getElementById("nota3").value);

  if (!nombre || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    document.getElementById("resultado3").innerText =
      "⚠️ Complete todos los campos correctamente.";
    return;
  }

  const promedio = (n1 + n2 + n3) / 3;
  document.getElementById("resultado3").innerText =
    `El promedio de ${nombre} es: ${promedio.toFixed(2)} puntos.`;
}

// 4️⃣ Conversión de unidades (metros)
function convertirUnidades() {
  const metros = parseFloat(document.getElementById("metros").value);
  if (isNaN(metros)) {
    document.getElementById("resultado4").innerText =
      "⚠️ Ingrese un valor válido en metros.";
    return;
  }

  const cm = metros * 100;
  const km = metros / 1000;
  document.getElementById("resultado4").innerText =
    `${metros} metros equivalen a ${cm} centímetros y ${km} kilómetros.`;
}

// 5️⃣ Comparación de dos valores
function compararValores() {
  const v1 = parseFloat(document.getElementById("valor1").value);
  const v2 = parseFloat(document.getElementById("valor2").value);

  if (isNaN(v1) || isNaN(v2)) {
    document.getElementById("resultado5").innerText =
      "⚠️ Ingrese ambos números.";
    return;
  }

  if (v1 === v2) {
    document.getElementById("resultado5").innerText =
      "⚠️ Los números no pueden ser iguales.";
    return;
  }

  const mayor = v1 > v2 ? v1 : v2;
  const menor = v1 < v2 ? v1 : v2;
  const diferencia = Math.abs(v1 - v2);

  document.getElementById("resultado5").innerText =
    `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
}
