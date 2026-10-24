import { Request, Response, NextFunction } from "express";
import db, { Libro } from "../data/db";
import { error } from "../utils/helpers";

// Añade `libro` al tipo Request de Express
declare global {
  namespace Express {
    interface Request {
      libro?: Libro;
    }
  }
}

// Valida :id y carga el libro en req.libro
function cargarLibro(req: Request, res: Response, next: NextFunction): void {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    error(res, 400, "El id debe ser un número entero");
    return;
  }

  const libro = db.libros.find((l) => l.id === id);
  if (!libro) {
    error(res, 404, `No existe un libro con id ${id}`);
    return;
  }

  req.libro = libro;
  next();
}

export default cargarLibro;
