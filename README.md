# Siddhartha — Ser parte de tu ser 🎙️

Página con un tocadiscos interactivo: fondo con la portada del álbum, disco que gira y brazo que se mueve al reproducir, más los controles normales (play/pausa, retroceder/adelantar 10s, barra de progreso y volumen).

## Estructura del proyecto

Todo en una sola carpeta, sin subcarpetas — así es más fácil de subir desde el celular:

```
siddhartha-player/
├── index.html
├── style.css
├── script.js
├── cover.jpg     (portada del álbum)
└── cancion.m4a   (audio)
```

## Cómo subirlo a GitHub Pages (desde el celular)

1. Crea un repositorio nuevo en GitHub (público).
2. Entra a **"Add file" → "Upload files"**.
3. Sube los 5 archivos: `index.html`, `style.css`, `script.js`, `cover.jpg` y `cancion.m4a`. Como ya no hay carpetas, puedes seleccionarlos todos juntos desde el picker del celular (unos vendrán de "Archivos" y `cover.jpg` puede salir de tu galería).
   - Si el picker no te deja elegir varios tipos a la vez, súbelos en dos o tres tandas: primero los `.html/.css/.js`, luego la imagen, luego el audio.
4. Espera a que termine de subir el audio (pesa unos 4 MB) antes de darle a **Commit changes**.
5. Ve a **Settings → Pages**, en "Branch" selecciona `main` y `/ (root)`, luego **Save**.
6. Espera 1-2 minutos y usa el enlace que te da GitHub.

## Notas

- El navegador **nunca** reproduce audio automáticamente al cargar la página (todos los navegadores lo bloquean); por eso hay que pulsar el botón de play.
- El archivo de audio está en formato `.m4a`, compatible con Safari, Chrome y Edge. Si algún navegador no lo reproduce, puedes convertirlo a `.mp3` y cambiar la ruta en `index.html` (busca la línea `<audio id="audio" src="assets/cancion.m4a" ...>`).
- El disco gira solo mientras la canción está en reproducción; al pausar, el brazo se levanta y el disco se detiene.
