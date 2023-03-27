import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Menu = () => {
  const { token } = useContext(AuthContext);
  return (
    <nav>
      {token ? (
        <>
          <Link to={"/NewMed"}>Nueva Medicina</Link>
          <Link to={"/EditMed"}>Editar Medicina</Link>
          <Link to={"/FilterMed"}>Ver medicinas por Laboratorio</Link>
          <Link to={"/Login"}>Login</Link>
          <Link to={"/Register"}>Nuevo Usuario</Link>
          <Link to={"/DeleteUser"}>Borrar Usuario</Link>
          <Link to={"/Logout"}>Logout</Link>
        </>
      ) : (
        <>
          <Link to={"/Login"}>Login</Link>
          <Link to={"/Register"}>Nuevo Usuario</Link>
        </>
      )}
    </nav>
  );
};
