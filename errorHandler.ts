import { Request, Response, NextFunction } from "express";
import { error } from "../utils/helpers";

interface ErrorConTipo extends Error {
  type?: string;
}

export function notFound(req: Request, res: Response): void {
  error(res, 404, `Ruta no encontrada: ${req.method} ${req.originalUrl}`);
}

export function errorHandler(
  err: ErrorConTipo,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err.type === "entity.parse.failed") {
    error(res, 400, "El body no es un JSON válido");
    return;
  }
  console.error(err);
  error(res, 500, "Error interno del servidor");
}
