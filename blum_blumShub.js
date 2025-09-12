function lcgBlum(p, q, x0) {
  // Validaciones de parámetros
//   if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c) || !Number.isInteger(x0) || !Number.isInteger(g)) {
//     throw new Error("a, b, c, g y x0 deben ser enteros.");
//   }

  // m = pq
  const m = p * q;

  // Validación de condiciones
//   if (a % 2 !== 0 || a % 4 === 0) {
//     throw new Error("'a' debe ser par pero NO múltiplo de 4.");
//   }
//   if (c % 2 === 0) {
//     throw new Error("'c' debe ser impar.");
//   }
//   if ((b - 1) % 4 !== 2) {
//     throw new Error("'(b - 1) mod 4' debe ser igual a 2.");
//   }

  const resultados = [];
  const vistos = new Map(); // xi -> iteración donde apareció
  let x = x0;

  for (let i = 0; i < m + 1; i++) {
    const expr = (x * x);   // (xi²)
    const xi1 = ((expr % m) + m) % m;           // mod (m)
    const ri1 = +(xi1 / (m - 1));    // ri = xi / (m-1)

    resultados.push({
      xi: x,
      "xi²": expr,
      "xi + 1": xi1,
      ri: ri1,
    });

    if (vistos.has(xi1)) {
      console.table(resultados);
      const primera = vistos.get(xi1);
      console.log("🔁 Ciclo detectado");
      console.log("Total de iteraciones:", i + 1);
      console.log("Valor repetido:", xi1);
      console.log("Primera vez que apareció en iteración:", primera);
      console.log("Periodo del ciclo:", i - primera + 1);
      return resultados;
    }

    vistos.set(xi1, i + 1);
    x = xi1; // avanzar semilla
  }

  console.table(resultados);
  console.log("✅ No hubo repetición en", m, "iteraciones (ciclo completo)");
  return resultados;
}

// Ejemplo válido
lcgBlum(3187, 8431, 3698);
