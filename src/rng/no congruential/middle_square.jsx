import React from "react";
const middleSquare = () => {
  function msTable(seed, maxIterations = 100) {
    let generated = [];
    let x = seed;
    const d = seed.toString().length; // dígitos de la seed inicial
    let seen = new Map();

    // Validaciones
    if (!Number.isInteger(seed)) {
      throw new Error("❌ x0 debe ser entero.");
    }

    if (seed <= 0) {
      throw new Error("❌ La seed inicial (x0) debe ser mayor que 0.");
    }

    if (d < 2) {
      throw new Error("❌ La seed inicial debe tener al menos 2 dígitos para aplicar el método de dígitos centrales.");
    }

    for (let i = 0; i < maxIterations; i++) {
      let y = x * x;
      let yStr = y.toString();

      // Agregar ceros si el cuadrado tiene menos de d dígitos
      if (yStr.length < d) {
        yStr = yStr.padStart(d, "0");
      }

      // Ajustar cero si (longitud - d) es impar
      if ((yStr.length - d) % 2 !== 0) {
        yStr = "0" + yStr;
      }

      // Extraer d dígitos centrales según la seed inicial
      let start = Math.floor((yStr.length - d) / 2);
      let xi1Str = yStr.substring(start, start + d);
      let xi1 = parseInt(xi1Str, 10);
      let ri1 = formatRi(xi1 / Math.pow(10, d));

      generated.push({
        xi: x,
        y0: yStr,
        xi1: xi1,
        ri1: ri1
      });

      // Detectar repetición
      if (seen.has(xi1)) {
        console.table(generated);
        console.log("🔁 Ciclo detectado");
        console.log("Total de iteraciones:", i + 1);
        console.log("Valor repetido:", xi1);
        console.log("Primera vez que apareció en iteración:", seen.get(xi1));
        console.log("Periodo del ciclo:", i);
        return generated;
      }

      seen.set(xi1, i + 1);
      x = xi1;
    }

    console.table(generated);
    console.log("No hubo repetición en", maxIterations, "iteraciones");
    return generated;
  }

  function formatRi(value, digits = 6) {
    return Number(value.toPrecision(digits));
  }

    return (
        <>
        
        </>
    );
};
export default middleSquare;