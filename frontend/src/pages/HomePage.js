import { MedList } from "../components/MedList";
import useMeds from "../hooks/useMeds";

export const HomePage = () => {
  const { med, addUnit, remUnit, removeMed } = useMeds();

  return (
    <section>
      <h1>Lista de Medicinas</h1>
      <MedList
        Meds={med}
        addUnit={addUnit}
        remUnit={remUnit}
        removeMed={removeMed}
      />
    </section>
  );
};
