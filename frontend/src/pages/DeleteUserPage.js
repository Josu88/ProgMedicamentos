import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deleteMedService } from "../services";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const DeleteUserPage = () => {
  const { token, setToken } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await deleteMedService({ password, token });
      setMessage("Se ha Borrado correctamente el usuario");
      setToken("");
      localStorage.clear();
      navigate("/");
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };

  return (
    <section>
      <h1>Delete User:</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="pass">Pon el password del usuario:</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button className="Done">Borrar</button>
        {error ? <p>{error}</p> : null}
        <p className="Message">{message}</p>
      </form>
      <nav className="ButtonHomeDU">
        <NavLink to={"/"}>HomePage</NavLink>
      </nav>
    </section>
  );
};
