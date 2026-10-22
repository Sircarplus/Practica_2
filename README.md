# API de Biblioteca

API REST para gestionar los libros de una biblioteca, construida con Node.js y Express. Los datos se guardan en memoria, así que se reinician cada vez que se para el servidor.

## Requisitos

- Node.js 18.11 o superior
- npm

## Puesta en marcha

```bash
npm install
npm start        # modo producción
npm run dev      # reinicio automático al guardar (requiere Node 18.11+)
```

El servidor queda disponible en http://localhost:3000

## Scripts disponibles

| Comando       | Descripción                                   |
|---------------|-----------------------------------------------|
| `npm start`   | Arranca el servidor en modo producción        |
| `npm run dev` | Arranca con recarga automática (`--watch`)    |

## Estructura del proyecto

```
src/
├── server.js            # Punto de entrada: levanta el servidor (listen)
├── app.js               # Configuración de Express y middlewares globales
├── data/db.js           # Datos en memoria y contadores de id
├── routes/              # Definición de URLs y métodos HTTP
├── controllers/         # Lógica de negocio de cada endpoint
├── middlewares/         # cargarLibro, notFound, errorHandler
└── utils/helpers.js     # Validaciones y funciones auxiliares
```

## Arquitectura

Cada petición sigue este recorrido:

1. **Ruta**: `routes/` decide qué controlador atiende la URL y el método HTTP.
2. **Middleware**: por ejemplo, `cargarLibro` busca el libro por id y lo adjunta a la petición antes de llegar al controlador.
3. **Controlador**: `controllers/` ejecuta la lógica de negocio y construye la respuesta.
4. **Manejo de errores**: si la ruta no existe actúa `notFound`, y cualquier error lanzado lo recoge `errorHandler`.

## Endpoints

| Método | Ruta           | Descripción                  |
|--------|----------------|------------------------------|
| GET    | `/libros`      | Lista todos los libros       |
| GET    | `/libros/:id`  | Devuelve un libro por su id  |
| POST   | `/libros`      | Crea un libro nuevo          |
| PUT    | `/libros/:id`  | Actualiza un libro           |
| DELETE | `/libros/:id`  | Elimina un libro             |

## Ejemplos de uso

Crear un libro:

```bash
curl -X POST http://localhost:3000/libros \
  -H "Content-Type: application/json" \
  -d '{"titulo": "El Quijote", "autor": "Miguel de Cervantes"}'
```

Respuesta:

```json
{
  "id": 1,
  "titulo": "El Quijote",
  "autor": "Miguel de Cervantes"
}
```

Consultar un libro:

```bash
curl http://localhost:3000/libros/1
```

## Códigos de respuesta

| Código | Significado                                  |
|--------|----------------------------------------------|
| 200    | Petición correcta                            |
| 201    | Recurso creado                               |
| 400    | Datos inválidos (falla la validación)        |
| 404    | Libro o ruta no encontrados                  |
| 500    | Error interno del servidor                   |

Los errores se devuelven en formato JSON:

```json
{
  "error": "Libro no encontrado"
}
```

## Limitaciones

- Los datos viven en memoria: al reiniciar el servidor se pierden.
- No hay autenticación ni control de acceso.

## Posibles mejoras

- Conectar una base de datos real (SQLite, PostgreSQL o MongoDB).
- Añadir autenticación y préstamos de libros por usuario.
- Paginación y filtros en el listado.
- Tests automáticos de los endpoints.
