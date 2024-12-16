

const notifications = [
  { message: "pH level too high", type: "alert", time: "10:30 AM" },
  { message: "Maintenance scheduled", type: "info", time: "9:00 AM" },
];

const Notifications = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`border-l-4 p-3 ${
            notification.type === "alert" ? "border-red-500" : "border-blue-500"
          }`}
        >
          <p>{notification.message}</p>
          <span className="text-sm text-gray-500">{notification.time}</span>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
