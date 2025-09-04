function lcgTabla(a, c, m, x0) {
  if (!Number.isInteger(a) || !Number.isInteger(c) || !Number.isInteger(m) || !Number.isInteger(x0)) {
    throw new Error("a, c, m y x0 deben ser enteros.");
  }
  if (m <= 1) {
    throw new Error("m debe ser un entero > 1.");
  }

  const resultados = [];
  const vistos = new Map(); // xi -> iteración donde apareció
  let x = x0;

  for (let i = 0; i < m; i++) {  // 👈 límite natural = m
    const axi_c = a * x + c;
    const xi1 = ((axi_c % m) + m) % m; // residuo en [0, m-1]
    const ri1 = xi1 / (m - 1);         // tu definición: xi/m-1

    resultados.push({
      xi: x,
      axi_c: axi_c,
      xi1: xi1,
      ri1: +ri1.toFixed(6),
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
  console.log("✅ No hubo repetición en", m, "iteraciones (se generó un ciclo completo)");
  return resultados;
}

// Ejemplos rápidos de prueba:
//lcgTabla(5, 3, 14, 7);   // m pequeño para ver rápido el ciclo
lcgTabla(523, 505, 75, 2);   // m pequeño para ver rápido el ciclo
