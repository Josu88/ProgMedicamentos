import { Med } from "./Med";

export const MedList = ({ Meds, removeMed }) => {
  return Meds.length ? (
    <ul className="Med-list">
      {Meds.map((med) => {
        return (
          <li key={med.id}>
            <Med Med={med} removeMed={removeMed} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>There are no Medicine...</p>
  );
};
