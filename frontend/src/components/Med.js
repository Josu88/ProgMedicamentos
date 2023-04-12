import "../App.css";
import { useState, useContext } from "react";
import {
  deleteMedService,
  addUnitsService,
  delUnitsService,
} from "../services";
import { AuthContext } from "../context/AuthContext";

export const Med = ({ Med, addUnit, remUnit, removeMed }) => {
  const [error, setError] = useState("");
  const { token, idUser } = useContext(AuthContext);

  const deleteMed = async ({ idMed }) => {
    try {
      await deleteMedService({ idMed });
      removeMed(idMed);
      //window.location.reload(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const addUnits = async ({ idMed, token }) => {
    try {
      await addUnitsService({ idMed, token });
      addUnit(idMed);
      //window.location.reload(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const delUnits = async ({ idMed, token }) => {
    try {
      await delUnitsService({ idMed, token });
      remUnit(idMed);
      //window.location.reload(true);
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
          {token && Med.idUser === Number(idUser) ? (
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
                  addUnits({ idMed, token });
                }}
              >
                +
              </button>
              <button
                className="delUnitButton"
                onClick={() => {
                  delUnits({ idMed, token });
                }}
              >
                -
              </button>
            </span>
          ) : (
            <span className="ButtonBlock">
              <p>Botones bloqueados para este usuario</p>
            </span>
          )}
          {error ? <p className="MenError">{error}</p> : null}
        </article>
      </li>
    </ul>
  );
};
