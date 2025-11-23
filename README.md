# PokeStats Web Analyzer  
Aplicación Web para Análisis, Comparación y Construcción de Equipos Pokémon  
---

## 📘 Descripción General

Este proyecto forma parte de una actividad académica de la materia **Ingeniería de Aplicaciones para Ciencia de Datos**.  

El objetivo principal es diseñar una aplicación web que utilice herramientas fundamentales del desarrollo frontend (HTML5, CSS y JavaScript) aplicadas a un caso real de análisis de datos.

Durante la carrera estuve trabajando con una **base de datos completa de Pokémon**, limpiándola, transformándola y utilizándola para distintos ejercicios de estadística, programación, ciencia de datos y visualización.  
Por ello, este proyecto toma esa base de datos depurada y la convierte en una herramienta útil para **crear equipos competitivos de 3 Pokémon** para el nuevo juego **Pokémon ZA**, especialmente para batallas en línea.

---

## 🎯 Objetivo del Proyecto

El propósito de esta aplicación es:

- Analizar estadísticas base de Pokémon (HP, Attack, Defense, Speed, etc.).
- Filtrar por tipos, generaciones y rangos de stats.
- Ordenar Pokémon según las estadísticas relevantes para estrategias competitivas.
- Visualizar automáticamente las gráficas individuales de cada Pokémon.
- Consultar fortalezas y debilidades de todos los tipos mediante una tabla especializada.
- Permitir seleccionar Pokémon de manera informada para formar equipos sólidos en formato **3v3 (Triples / Equipo de 3)** ideal para el metajuego de **Pokémon ZA**.

En pocas palabras:  
### **Una herramienta para encontrar sinergias, coberturas y combinaciones óptimas en equipo para batallas online.**

---

## 🧩 Funcionalidades Principales

### ✔ Filtros avanzados
- Por nombre  
- Por tipo  
- Por generación  
- Por rango de estadísticas (HP, Attack, Speed, etc.)

### ✔ Ordenamiento
- Ascendente y descendente  
- Por cualquier stat  
- Por “Total” (suma general de stats)

### ✔ Gráfica de estadísticas
- Gráfica dinámica generada con Chart.js  
- Se actualiza al seleccionar un Pokémon  
- Permite identificar roles como sweeper, tanque, soporte, etc.

### ✔ Imágenes oficiales
- Sprites oficiales de PokeAPI  
- Imágenes grandes en el panel de detalles

### ✔ Modo Oscuro
- Tema light/dark con botón  
- Guarda estilos modernos y agradables para estudio nocturno

### ✔ Tabla de tipos completa
- Fortalezas y debilidades de los 18 tipos  
- Página dedicada `types.html`  
- Colores oficiales de cada tipo

### ✔ Arquitectura modular (ES6)
Código dividido en módulos:
- `app.js` → control general  
- `dataLoader.js` → carga del JSON  
- `ui.js` → renderizado visual  
- `filters.js` → filtros y ordenamiento  
- `chartManager.js` → gráficas  

Esto permite mantener orden, escalabilidad y claridad en el código, cumpliendo con las mejores prácticas del desarrollo web moderno.

---

## 🛠 Tecnologías Utilizadas

- **HTML5** → estructura
- **CSS3** → diseño y estilos, responsive y modo oscuro
- **JavaScript ES6** → lógica, interacción y manejo de datos
- **Chart.js** → visualización de estadísticas
- **Fetch API** → carga del dataset en JSON
- **Módulos ES6** → arquitectura y mantenibilidad

---

## 🎮 Aplicación en Pokémon ZA (Equipo 3v3)

El proyecto sirve como apoyo real para diseñar equipos competitivos en el nuevo metajuego de **Pokémon ZA**, destacando:

- Cobertura de tipos  
- Velocidades mínimas para superar amenazas  
- Balance ataque/defensa  
- Roles complementarios en equipos pequeños  
- Identificación de counters mediante la tabla de tipos  
- Posibilidad de comparar stats directamente con la gráfica

El sistema de filtros + ordenamiento + análisis visual permite construir equipos óptimos con información clara y rápida.

---

## 🚀 Cómo Ejecutar

1. Descargar o clonar el proyecto  
2. Abrir **index.html** en cualquier navegador moderno  
3. Asegurarse de que el archivo `pokemonData_transformed.json` esté en la misma carpeta  
4. Navegar entre:
   - Página principal (Pokédex analítica)
   - Página secundaria (tabla de tipos)
5. ¡Listo! No requiere servidor ni instalación.

---

## 👨‍🎓 Conclusión Académica

Este proyecto demuestra la capacidad de:

- Diseñar interfaces web profesionales  
- Implementar control de flujo, funciones, eventos y manipulación del DOM  
- Utilizar módulos, asincronía y carga de datos reales  
- Aplicar razonamiento analítico a través de herramientas front-end  
- Integrar ciencia de datos y programación en un contexto temático (Pokémon)  
- Construir un sistema útil y escalable para un caso real de análisis competitivo  

Además, combina experiencia previa en manejo de datasets con una aplicación totalmente funcional.

---

## 📩 Autor  
Estudiante de Ingeniería en Ciencia de Datos  
Proyecto académico — Universidad  



