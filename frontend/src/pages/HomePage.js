import { MedList } from "../components/MedList";
import useMeds from "../hooks/useMeds";
import { useState } from "react";

export const HomePage = () => {
  const [env] = useState(false);
  const { med, removeMed } = useMeds(env);

  return (
    <section>
      <MedList Meds={med} removeMed={removeMed} />
    </section>
  );
};
