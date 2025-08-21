import { Navigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext"; // Usaremos un contexto para Firebase Auth

export default function PrivateRoute({ children }) {
  const { usuario } = useAuth();

  if (!usuario) {
    // Si no está logueado, lo redirigimos a login
    return <Navigate to="/" />;
  }

  return children; // Si está logueado, mostramos la ruta
}
