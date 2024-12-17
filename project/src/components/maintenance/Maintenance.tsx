import React, { useState, ChangeEvent } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Measurement {
  id: number;
  phLevel: number;
  waterVolume: number;
  chlorineGranular: number;
  chlorineTablets: number;
  stabilizer?: number;
  flocculant?: number;
  clarifier?: number;
  date: string;
}

const Maintenance: React.FC = () => {
  const [phLevel, setPhLevel] = useState<number>(7);
  const [waterVolume, setWaterVolume] = useState<number>(10000);

  // Checkboxes para incluir químicos
  const [includeStabilizer, setIncludeStabilizer] = useState<boolean>(false);
  const [includeFlocculant, setIncludeFlocculant] = useState<boolean>(false);
  const [includeClarifier, setIncludeClarifier] = useState<boolean>(false);

  // Resultados calculados
  const [chlorineGranular, setChlorineGranular] = useState<number>(0);
  const [chlorineTablets, setChlorineTablets] = useState<number>(0);
  const [stabilizer, setStabilizer] = useState<number>(0);
  const [flocculant, setFlocculant] = useState<number>(0);
  const [clarifier, setClarifier] = useState<number>(0);

  // Historial
  const [measurements, setMeasurements] = useState<Measurement[]>([]);

  // Calcular químicos
  const calculateChemicals = () => {
    const chlorinePerLiter = phLevel < 7.2 ? 3 : phLevel > 7.8 ? 1 : 2;

    const granular = (chlorinePerLiter / 1000) * waterVolume; // Cloro granular
    const tablets = granular / 200; // Pastillas de cloro
    const stabilizerAmount = includeStabilizer ? waterVolume * 0.01 : 0;
    const flocculantAmount = includeFlocculant ? waterVolume * 0.005 : 0;
    const clarifierAmount = includeClarifier ? waterVolume * 0.002 : 0;

    setChlorineGranular(granular);
    setChlorineTablets(tablets);
    setStabilizer(stabilizerAmount);
    setFlocculant(flocculantAmount);
    setClarifier(clarifierAmount);
  };

  // Guardar medición
  const saveMeasurement = () => {
    const newMeasurement: Measurement = {
      id: measurements.length + 1,
      phLevel,
      waterVolume,
      chlorineGranular,
      chlorineTablets,
      stabilizer: includeStabilizer ? stabilizer : undefined,
      flocculant: includeFlocculant ? flocculant : undefined,
      clarifier: includeClarifier ? clarifier : undefined,
      date: new Date().toLocaleString(),
    };
    setMeasurements([...measurements, newMeasurement]);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-100">
      {/* Gráficos */}
      <div className="bg-white p-6 rounded-lg shadow flex justify-center space-x-12">
        <div>
          <h3 className="font-semibold text-center mb-2">Nivel de pH</h3>
          <CircularProgressbar
            value={phLevel}
            maxValue={14}
            text={`${phLevel}`}
            styles={buildStyles({
              pathColor: phLevel < 7.2 ? "red" : phLevel > 7.8 ? "orange" : "green",
            })}
          />
        </div>
        <div>
          <h3 className="font-semibold text-center mb-2">Cloro Granulado</h3>
          <CircularProgressbar
            value={chlorineGranular}
            maxValue={waterVolume / 1000}
            text={`${chlorineGranular.toFixed(2)}g`}
            styles={buildStyles({ pathColor: "yellow" })}
          />
        </div>
      </div>

      {/* Formulario */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Volumen de Agua (Litros)</label>
            <input
              type="number"
              value={waterVolume}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setWaterVolume(parseFloat(e.target.value))
              }
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="font-semibold">Nivel de pH</label>
            <input
              type="number"
              value={phLevel}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPhLevel(parseFloat(e.target.value))
              }
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="mt-4">
          <label className="font-semibold">¿Incluir otros químicos?</label>
          <div className="flex space-x-4 mt-2">
            <label>
              <input
                type="checkbox"
                checked={includeStabilizer}
                onChange={() => setIncludeStabilizer(!includeStabilizer)}
              />{" "}
              Estabilizador
            </label>
            <label>
              <input
                type="checkbox"
                checked={includeFlocculant}
                onChange={() => setIncludeFlocculant(!includeFlocculant)}
              />{" "}
              Floculante
            </label>
            <label>
              <input
                type="checkbox"
                checked={includeClarifier}
                onChange={() => setIncludeClarifier(!includeClarifier)}
              />{" "}
              Clarificante
            </label>
          </div>
        </div>

        <button
          onClick={calculateChemicals}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        >
          Calcular
        </button>
      </div>

      {/* Resultados */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-bold text-lg mb-4">Resultados</h3>
        <p>Cloro Granulado: {chlorineGranular.toFixed(2)} g</p>
        <p>Pastillas de Cloro: {chlorineTablets.toFixed(1)} pastillas</p>
        {includeStabilizer && <p>Estabilizador: {stabilizer.toFixed(2)} g</p>}
        {includeFlocculant && <p>Floculante: {flocculant.toFixed(2)} g</p>}
        {includeClarifier && <p>Clarificante: {clarifier.toFixed(2)} ml</p>}
        <button
          onClick={saveMeasurement}
          className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600"
        >
          Guardar Medición
        </button>
      </div>

      {/* Historial */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-bold text-lg mb-4">Historial de Mediciones</h3>
        {measurements.length === 0 ? (
          <p>No hay mediciones registradas.</p>
        ) : (
          <ul>
            {measurements.map((m) => (
             <li key={m.id}>
             <strong>Fecha:</strong> {m.date} - <strong>pH:</strong> {m.phLevel} -{" "}
             <strong>Cloro Granulado:</strong> {m.chlorineGranular.toFixed(2)}g{" "}
             {m.stabilizer !== undefined && (
               <span>- <strong>Estabilizador:</strong> {m.stabilizer.toFixed(2)}g </span>
             )}
             {m.flocculant !== undefined && (
               <span>- <strong>Floculante:</strong> {m.flocculant.toFixed(2)}g </span>
             )}
             {m.clarifier !== undefined && (
               <span>- <strong>Clarificante:</strong> {m.clarifier.toFixed(2)}ml </span>
             )}
           </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Maintenance;
