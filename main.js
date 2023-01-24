const precioContado = parseInt(prompt("Ingrese el precio contado:"));
const precioCuotas = parseInt(prompt("Ingrese el precio en cuotas:"));
const cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
const porcentajeInflacion = parseFloat(
  prompt("Ingrese el IPC (como parametro, en el 2022 la media fue de 5.72%):")
);
let totalPrecioAjustado = 0;

for (let i = 0; i < cantidadCuotas; i++) {
  totalPrecioAjustado =
    totalPrecioAjustado +
    precioCuotas / cantidadCuotas / (1 + porcentajeInflacion / 100) ** i;
  console.log(
    precioCuotas / cantidadCuotas / (1 + porcentajeInflacion / 100) ** i
  );
}

if (totalPrecioAjustado > precioContado) {
  alert(
    "Te conviene pagarlo al contado. Precio total: " +
      precioContado +
      " y precio en cuotas ajustado: " +
      totalPrecioAjustado
  );
} else if (totalPrecioAjustado < precioContado) {
  alert(
    "Te conviene pagarlo en cuotas. Precio total: " +
      precioContado +
      " y precio en cuotas ajustado: " +
      totalPrecioAjustado
  );
} else {
  alert(
    "Hubo un problema o es lo mismo pagarlo de las 2 maneras. Precio total: " +
      precioContado +
      " y precio en cuotas ajustado: " +
      totalPrecioAjustado
  );
}
