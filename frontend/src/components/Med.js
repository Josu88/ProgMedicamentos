import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import {
  deleteMedService,
  addUnitsService,
  delUnitsService,
} from "../services";
import { AuthContext } from "../context/AuthContext";

export const Med = ({ Med }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  const deleteMed = async ({ idMed }) => {
    try {
      await deleteMedService({ idMed });

      navigate("/NewMed");
    } catch (error) {
      setError(error.message);
    }
  };

  const addUnit = async ({ idMed, token }) => {
    try {
      await addUnitsService({ idMed, token });

      navigate("/NewMed");
    } catch (error) {
      setError(error.message);
    }
  };

  const delUnit = async ({ idMed, token }) => {
    try {
      await delUnitsService({ idMed, token });

      navigate("/NewMed");
    } catch (error) {
      setError(error.message);
    }
  };

  let idMed = Med.id;

  return (
    <ul className="Med-list">
      <li>
        <article className="Medicines" id={Med.id}>
          <p>Lab: {Med.Lab}</p>
          <p>Composition: {Med.Composition}</p>
          <p>Name: {Med.Name}</p>
          <p>Units: {Med.Units}</p>
          {token ? (
            <span className="ButtonBar">
              <button
                className="DelButton"
                onClick={() => {
                  if (window.confirm("Are you sure?")) deleteMed({ idMed });
                }}
              >
                Borrar
              </button>
              <button
                className="addUnitButton"
                onClick={() => {
                  addUnit({ idMed, token });
                }}
              >
                +
              </button>
              <button
                className="delUnitButton"
                onClick={() => {
                  delUnit({ idMed, token });
                }}
              >
                -
              </button>
            </span>
          ) : null}
          {error ? <p className="MenError">{error}</p> : null}
        </article>
      </li>
    </ul>
  );
};
