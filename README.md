# 📊 Simulación - Algoritmos

Este repositorio contiene programas con diferentes **métodos de generación de números pseudaleatorios**, correspondientes a la **Unidad 2** de la materia de *Simulación*.  

---

## 📌 Contenido
1. [Algoritmo de Cuadrados Medios](#-algoritmo-de-cuadrados-medios)  
2. [Algoritmo de Productos Medios](#-algoritmo-de-productos-medios)  
3. [Algoritmo de Multiplicador Constante](#-algoritmo-de-multiplicador-constante)  
4. [Algoritmo Congruencial Lineal](#-algoritmo-congruencial-lineal)  

---

## 🔹 Algoritmo de Cuadrados Medios  
- **Descripción:**  
  Propuesto por Von Neumann. Se parte de una **semilla inicial (X₀)**.  
  En cada iteración, se **eleva al cuadrado la semilla**, se toman los **dígitos centrales** del resultado como nueva semilla, y el proceso se repite.  

- **Características:**  
  - Tiende a generar secuencias cortas.  
  - Puede caer en ciclos pequeños o en cero rápidamente.  

- **Fórmula básica:**  
X₀ → X₁ → X₂ …
Xi+1 = dígitos_centrales(Xi²)

---

## 🔹 Algoritmo de Productos Medios  
- **Descripción:**  
Requiere **dos semillas iniciales (X₀ y Y₀)**.  
En cada iteración, se **multiplican ambas semillas**, se toman los **dígitos centrales** del producto como la nueva semilla, y se repite el proceso.  

- **Características:**  
- Más estable que los cuadrados medios.  
- Reduce la posibilidad de caer en ciclos triviales.  

- **Fórmula básica:**  
Xi+1 = dígitos_centrales(Xi * Yi)

---

## 🔹 Algoritmo de Multiplicador Constante  
- **Descripción:**  
Se parte de una **semilla inicial (X₀)** y una **constante multiplicadora (a)**.  
En cada iteración, la semilla se **multiplica por a** y se toman los **dígitos centrales** como nueva semilla.  

- **Características:**  
- Más simple que el método de productos medios.  
- La calidad depende mucho de la elección de la constante.  

- **Fórmula básica:**  
Xi+1 = dígitos_centrales(a * Xi)

---

## 🔹 Algoritmo Congruencial Lineal (ACL)  
- **Descripción:**  
Es el método más utilizado y matemáticamente sólido.  
Parte de una **semilla inicial (X₀)**, una **constante multiplicadora (a)**, una **constante aditiva (c)** y un **módulo (m)**.  

- **Fórmula general:**  
Xi+1 = (a * Xi + c) mod m

- **Número aleatorio generado:**  
Ri = Xi / (m - 1)

- **Características:**  
- Dependiendo de la elección de parámetros `(a, c, m)`, puede alcanzar **periodos máximos de m**.  
- Muy eficiente y ampliamente usado en simulación y criptografía.  

---

## 🚀 Ejecución
Cada algoritmo está implementado en su propio archivo. Puedes ejecutarlos directamente para observar cómo se generan las tablas con las secuencias de números.  

---
✍️ Autor: *JavierJARA14*  
📅 Materia: *Simulación*  
