# 🎵 Caja de Música Interactiva con p5.js - EEST N°1

Este proyecto es una mini aplicación web que permite **reproducir música en un canvas interactivo** y **generar visualizaciones animadas en tiempo real**, utilizando la biblioteca **p5.js**.

---

## 🚀 Tecnologías Utilizadas

- **HTML**: Estructura de la página web y elementos de control.
- **CSS**: Estilos modernos, diseño responsivo y separación visual de secciones.
- **JavaScript**: Lógica de reproducción, interacción del usuario, análisis de audio y animaciones.
- **[p5.js](https://p5js.org/)**: Biblioteca para dibujo interactivo.
- **[p5.sound](https://p5js.org/reference/#/libraries/p5.sound)**: Biblioteca para análisis de audio y sincronización visual.

---

## ⚙️ Funcionalidades

- 🎵 Canvas p5.js con visualización de audio:
  - Reproducción de música con controles personalizados.
  - Botón para reproducir, pausar y reanudar la canción.
  - Botón para reiniciar la pista desde el comienzo.
  - Botones para adelantar o retroceder 5 segundos.
  - Visualización de la onda de sonido en tiempo real.
  - Animación de partículas que reaccionan al volumen de la música.

---
## 🧪 Instrucciones para Probar el Proyecto de la Caja de Música

Para probar la aplicación de audio y visualizaciones interactivas, seguí estos pasos:

---

1. **Descargar el proyecto desde GitHub:**
   * Ve a esta página: [https://github.com/Elmaciiiii/actividad11_SotodelaColina.git](https://github.com/Elmaciiiii/actividad11_SotodelaColina.git)
   * Haz clic en el botón verde que dice **"Code"**.
   * Elegí la opción **"Download ZIP"** y guardá el archivo en tu computadora.

---

2. **Extraer el archivo ZIP:**
   * Buscá el archivo ZIP descargado y hacé clic derecho para **extraer su contenido**.
   * Se creará una carpeta llamada `actividad11_SotodelaColina-main` o similar.

---

3. **Abrir la carpeta del proyecto en Visual Studio Code:**
   * Abrí **Visual Studio Code**.
   * En la barra de menú, andá a **"Archivo" (File)** y seleccioná **"Abrir Carpeta" (Open Folder)**.
   * Navegá hasta la carpeta que se creó al extraer el ZIP y seleccioná **"Abrir"**.

---

4. **Abrir `index.html` con Live Server:**
   * 📦 **Asegurate de tener instalada la extensión "Live Server" en Visual Studio Code.**
     - Podés buscarla en la sección de extensiones y hacer clic en **"Instalar"**.
   * En el panel de archivos, **abrí el archivo `index.html`**.
   * Hacé clic derecho dentro del archivo abierto y seleccioná **"Open with Live Server"**.
   * La página se abrirá automáticamente en tu navegador.

---

5. **Interactuar con la caja musical:**
   * Presioná **Reproducir** para escuchar la música.
   * Mirá cómo se animan las partículas y la onda de sonido.
   * Probá adelantar, retroceder o reiniciar la pista con los botones.

---
## 📁 Estructura de Archivos
```plaintext
.
├── index.html      // Página principal 
├── styles.css      // Estilos visuales del sitio
├── sketch.js       // Lógica visual y de audio con p5.js
└── assets/
└── musica.mp3 # Archivo de música usado en la visualización
