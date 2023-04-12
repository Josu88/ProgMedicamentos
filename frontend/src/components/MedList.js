import { Med } from "./Med";

export const MedList = ({ Meds, addUnit, remUnit, removeMed }) => {
  return Meds.length ? (
    <ul className="Med-list">
      {Meds.map((med) => {
        return (
          <li key={med.id}>
            <Med
              Med={med}
              addUnit={addUnit}
              remUnit={remUnit}
              removeMed={removeMed}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>There are no Medicine...</p>
  );
};
