import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      <Link to={"/NewMed"}>Nueva Medicina</Link>
      <Link to={"/EditMed"}>Editar Medicina</Link>
      <Link to={"/FilterMed"}>Ver medicinas por Laboratorio</Link>
      <Link to={"/Login"}>Login</Link>
      <Link to={"/Register"}>Nuevo Usuario</Link>
      <Link to={"/DeleteUser"}>Borrar Usuario</Link>
    </nav>
  );
};
