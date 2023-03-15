import { MedList } from "../components/MedList";
import useMeds from "../hooks/useMeds";

export const HomePage = () => {
  const { med, removeMed } = useMeds();

  return (
    <section>
      <h1>Medicinas:</h1>
      <MedList med={med} removeMed={removeMed} />
    </section>
  );
};
