# API de Biblioteca
 
## Arrancar
 
npm install
npm start        # modo producción
npm run dev      # reinicio automático al guardar (requiere Node 18.11+)
 
Servidor en http://localhost:4000
 
## Estructura
 

src/
├── server.js            # Punto de entrada: levanta el servidor (listen)
├── app.js               # Configuración de Express y middlewares globales
├── data/db.js           # Datos en memoria y contadores de id
├── routes/              # Definición de URLs y métodos HTTP
├── controllers/         # Lógica de negocio de cada endpoint
├── middlewares/         # cargarLibro, notFound, errorHandler
└── utils/helpers.js     # Validaciones y funciones auxiliares
