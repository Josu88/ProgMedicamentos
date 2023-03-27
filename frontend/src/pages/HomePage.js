import { MedList } from "../components/MedList";
import useMeds from "../hooks/useMeds";

export const HomePage = () => {
  const { med } = useMeds();

  return (
    <section>
      <h1>Lista de Medicinas</h1>
      <MedList Meds={med} />
    </section>
  );
};
