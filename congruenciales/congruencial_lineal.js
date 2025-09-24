function lcgTabla(c, g, k, x0) {
  if (!Number.isInteger(c) || !Number.isInteger(k) || !Number.isInteger(g) || !Number.isInteger(x0)) {
    throw new Error("a, c, k y/o x0 deben ser enteros.");
  }

  if (c <= 0 || g <= 0 || k <= 0 || x0 <= 0) {
    throw new Error("a, c, k y/o x0 deben ser enteros.");
  }
  const m = Math.pow(2, g);   // m = 2^g
  const a = 1 + 4 * k;        // a = 1 + 4k
  // Validar c
  if (c % 2 === 0) throw new Error("c debe ser impar");

  const resultados = [];
  const vistos = new Map(); // xi -> iteración donde apareció
  let x = x0;

  for (let i = 0; i < m; i++) {  // <-- límite natural = m
    const axi_c = a * x + c;
    const xi1 = ((axi_c % m) + m) % m; // residuo en [0, m-1]
    const ri1 = formatRi(xi1 / (m - 1));         // tu definición: xi/m-1

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
  console.log("No hubo repetición en", m, "iteraciones (se generó un ciclo completo)");
  return resultados;
}

function formatRi(valor, cifras = 6) {
  return Number(valor.toPrecision(cifras));
}

// Ejemplos rápidos de prueba:
lcgTabla(505, 6, 130, 2);   // m pequeño para ver rápido el ciclo
