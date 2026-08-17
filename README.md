# Siddhartha — Ser parte de tu ser 🎙️

Página con un tocadiscos interactivo: fondo con la portada del álbum, disco que gira y brazo que se mueve al reproducir, más los controles normales (play/pausa, retroceder/adelantar 10s, barra de progreso y volumen).

## Estructura del proyecto

```
siddhartha-player/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── cover.jpg     (portada del álbum)
    └── cancion.m4a   (audio)
```

## Cómo subirlo a GitHub Pages

1. Crea un repositorio nuevo en GitHub (público).
2. "Add file" → "Upload files" y sube `index.html`, `style.css`, `script.js`.
3. Repite "Add file" → "Upload files" y sube la carpeta `assets` completa (con `cover.jpg` y `cancion.m4a`).
   - Si el archivo de audio es pesado, puede tardar un poco más en subir; espera a que termine antes de cerrar la pestaña.
4. Ve a **Settings → Pages**, en "Branch" selecciona `main` y `/ (root)`, luego **Save**.
5. Espera 1-2 minutos y usa el enlace que te da GitHub.

## Notas

- El navegador **nunca** reproduce audio automáticamente al cargar la página (todos los navegadores lo bloquean); por eso hay que pulsar el botón de play.
- El archivo de audio está en formato `.m4a`, compatible con Safari, Chrome y Edge. Si algún navegador no lo reproduce, puedes convertirlo a `.mp3` y cambiar la ruta en `index.html` (busca la línea `<audio id="audio" src="assets/cancion.m4a" ...>`).
- El disco gira solo mientras la canción está en reproducción; al pausar, el brazo se levanta y el disco se detiene.
