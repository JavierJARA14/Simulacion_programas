function multiplicadorConstanteTabla(x0, a, maxIteraciones = 100) {
    let resultados = [];
    const d = x0.toString().length; // dígitos de la semilla inicial
    let vistos = new Map();

    let x = x0;

    for (let i = 0; i < maxIteraciones; i++) {
        let y = a * x;
        let yStr = y.toString();

        // Agregar ceros si el producto tiene menos de d dígitos
        if (yStr.length < d) {
            yStr = yStr.padStart(d, "0");
        }

        // Ajustar cero si (longitud - d) es impar
        if ((yStr.length - d) % 2 !== 0) {
            yStr = "0" + yStr;
        }

        // Extraer d dígitos centrales según la semilla inicial
        let start = Math.floor((yStr.length - d) / 2);
        let xi1Str = yStr.substring(start, start + d);
        let xi1 = parseInt(xi1Str, 10);
        let ri1 = xi1 / Math.pow(10, d);

        resultados.push({
            xi: x,
            a: a,
            y0: yStr,
            xi1: xi1,
            ri1: ri1
        });

        // Detectar repetición
        if (vistos.has(xi1)) {
            console.table(resultados);
            console.log("🔁 Ciclo detectado");
            console.log("Total de iteraciones:", i + 1);
            console.log("Valor repetido:", xi1);
            console.log("Primera vez que apareció en iteración:", vistos.get(xi1) -1, " (", vistos.get(xi1),")");
            console.log("Periodo del ciclo:", i);
            return resultados;
        }

        vistos.set(xi1, i + 1);
        x = xi1;
    }

    console.table(resultados);
    console.log("✅ No hubo repetición en", maxIteraciones, "iteraciones");
    return resultados;
}

// Ejemplo de prueba (pocas iteraciones)
multiplicadorConstanteTabla(2389, 6666, 1000);
