function lcgAditivo(x1, x2, x3, x4, x5, m, n = 5) {
  if (!Number.isInteger(x1) || !Number.isInteger(x2) || !Number.isInteger(x3) ||
      !Number.isInteger(x4) || !Number.isInteger(x5) || !Number.isInteger(m)) {
    throw new Error("Las semillas y m deben ser enteros.");
  }
  if (m <= 1) {
    throw new Error("m debe ser un entero > 1.");
  }

  const resultados = [];
  const vistos = new Map();
  let x = [x1, x2, x3, x4, x5];

  for (let i = 0; i < m; i++) {
    if (i < 5) {
      // Solo mostramos las semillas iniciales
      resultados.push({
        suma: null,
        xi: x[i],
        ri: null,
      });
    } else {
      // Fórmula: Xi = (Xi-1 + Xi-n) mod m
      const suma = x[i - 1] + x[i - n];
      const xi = suma % m;
      const ri = +(xi / (m - 1)).toFixed(6);

      resultados.push({
        suma: `${x[i - 1]} + ${x[i - n]} = ${suma}`,
        xi: xi,
        ri: ri,
      });

      if (vistos.has(xi)) {
        console.table(resultados);
        const primera = vistos.get(xi);
        console.log("🔁 Ciclo detectado");
        console.log("Total de iteraciones:", i + 1);
        console.log("Valor repetido:", xi);
        console.log("Primera vez que apareció en iteración:", primera);
        console.log("Periodo del ciclo:", i - primera + 1);
        return resultados;
      }

      vistos.set(xi, i + 1);
      x.push(xi);
    }
  }

  console.table(resultados);
  console.log("No hubo repetición en", m, "iteraciones (se generó un ciclo completo)");
  return resultados;
}

// Ejemplo de uso:
lcgAditivo(3841,1237,4031,5891,6004,80);
