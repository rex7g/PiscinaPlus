import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/profile/Profile";
import Maintenance from "./components/maintenance/Maintenance";
import Notifications from "./components/notifications/Notifications";
import Settings from "./components/settings/Settings";
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  </Layout>
    
  );
};

export default App;
