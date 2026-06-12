/**
 * ProtectedRoute - Componente de ruta protegida
 *
 * Redirige al login si el usuario no está autenticado.
 * NOTA: Actualmente NO se usa en AppRouter. Requiere
 * implementar AuthContext para funcionar.
 * Mantenido para referencia futura.
 */

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
    const { usuario, loading } = useAuth();

    // Mientras se verifica la autenticación
    if (loading) {
        return <p>Cargando...</p>;
    }

    // Si no hay usuario autenticado, redirigir al login
    if (!usuario) {
        return <Navigate to="/login" replace />;
    }

    // Usuario autenticado: renderizar el contenido protegido
    return children;
}
