function cuadradosMediosTabla(semilla, maxIteraciones = 100) {
    let resultados = [];
    let x = semilla;
    let d = semilla.toString().length;
    let vistos = new Map();

    for (let i = 0; i < maxIteraciones; i++) {
        let y = x * x;
        let yStr = y.toString();

        // Si la longitud es menor que d, agregar ceros a la izquierda
        if (yStr.length < d) {
            yStr = yStr.padStart(d, "0");
        }

        // Si longitud impar y mayor que d, agregar un cero para emparejar
        if (yStr.length % 2 !== 0 && yStr.length > d) {
            yStr = "0" + yStr;
        }

        // Extraer los d dígitos centrales sin importar la longitud total
        let start = Math.floor((yStr.length - d) / 2);
        let xi1Str = yStr.substring(start, start + d);
        let xi1 = parseInt(xi1Str, 10);
        let ri1 = xi1 / Math.pow(10, d);

        resultados.push({
            i: i,
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
            console.log("Primera vez que apareció en iteración:", vistos.get(xi1));
            console.log("Periodo del ciclo:", i - vistos.get(xi1) + 1);
            return resultados;
        }

        vistos.set(xi1, i + 1);
        x = xi1;
    }

    console.table(resultados);
    console.log("✅ No hubo repetición en", maxIteraciones, "iteraciones");
    return resultados;
}

// Prueba
cuadradosMediosTabla(1220, 100);
