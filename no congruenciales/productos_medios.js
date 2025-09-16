function productosMediosTabla(x0, x1, maxIteraciones = 100) {
    let resultados = [];
    const d = x0.toString().length; // dígitos de la semilla inicial
    let vistos = new Map();

    let prev = x0;
    let x = x1;

    for (let i = 0; i < maxIteraciones; i++) {
        let y = prev * x;
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
        let ri1 = formatRi(xi1 / Math.pow(10, d));

        resultados.push({
            prev: prev,
            xi: x,
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
            console.log("Primera vez que apareció en iteración:", vistos.get(xi1) -1);
            console.log("Periodo del ciclo:", i);
            return resultados;
        }

        vistos.set(xi1, i + 1);

        // Avanzar semillas: la nueva se multiplica con la actual
        prev = x;
        x = xi1;
    }

    console.table(resultados);
    console.log("No hubo repetición en", maxIteraciones, "iteraciones");
    return resultados;
}

function formatRi(valor, cifras = 6) {
  return Number(valor.toPrecision(cifras));
}

// Ejemplo de prueba
productosMediosTabla(5323, 6967, 250);
// Ejemplo con pocas iteraciones
//productosMediosTabla(1001, 5095, 250);