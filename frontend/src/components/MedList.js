export const MedList = ({ Med, removeMed }) => {
  return Med.length ? (
    <ul className="Med-list">
      {Med.map((med) => {
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
