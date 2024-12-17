import React, { useState, ChangeEvent } from "react";

// Definimos el tipo para las reservaciones
interface Reservation {
  id: number;
  name: string;
  date: string;
  time: string;
  status: string;
}

// Datos simulados iniciales
const initialReservations: Reservation[] = [
  { id: 1, name: "John Doe", date: "2024-06-16", time: "2:00 PM", status: "Confirmed" },
  { id: 2, name: "Jane Smith", date: "2024-06-16", time: "4:00 PM", status: "Pending" },
  { id: 3, name: "Alex Brown", date: "2024-06-17", time: "10:00 AM", status: "Confirmed" },
];

const Reservations: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>(initialReservations);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newReservation, setNewReservation] = useState<Omit<Reservation, "id">>({
    name: "",
    date: "",
    time: "",
    status: "Pending",
  });

  // Manejo del formulario
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewReservation({ ...newReservation, [name]: value });
  };

  // Agregar una nueva reservación
  const addReservation = () => {
    const newId = reservations.length > 0 ? reservations[reservations.length - 1].id + 1 : 1;
    setReservations([...reservations, { ...newReservation, id: newId }]);
    setShowModal(false);
    setNewReservation({ name: "", date: "", time: "", status: "Pending" });
  };

  // Eliminar una reservación
  const deleteReservation = (id: number) => {
    setReservations(reservations.filter((reservation) => reservation.id !== id));
  };

  return (
    <div className="p-6">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Reservaciones</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Agregar Reservación
        </button>
      </div>

      {/* Tabla de reservaciones */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="p-3 border-b">Nombre</th>
              <th className="p-3 border-b">Fecha</th>
              <th className="p-3 border-b">Hora</th>
              <th className="p-3 border-b">Estado</th>
              <th className="p-3 border-b text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{reservation.name}</td>
                <td className="p-3 border-b">{reservation.date}</td>
                <td className="p-3 border-b">{reservation.time}</td>
                <td className="p-3 border-b">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      reservation.status === "Confirmed"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {reservation.status}
                  </span>
                </td>
                <td className="p-3 border-b text-center">
                  <button
                    onClick={() => deleteReservation(reservation.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para agregar reservación */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Agregar Nueva Reservación</h3>
            <div className="space-y-3">
              <div>
                <label className="block mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={newReservation.name}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                  placeholder="Nombre del cliente"
                />
              </div>
              <div>
                <label className="block mb-1">Fecha</label>
                <input
                  type="date"
                  name="date"
                  value={newReservation.date}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              </div>
              <div>
                <label className="block mb-1">Hora</label>
                <input
                  type="time"
                  name="time"
                  value={newReservation.time}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                onClick={addReservation}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservations;
