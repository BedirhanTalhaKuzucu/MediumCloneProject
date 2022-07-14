import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import UserDashboard from "./pages/UserDashboard"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

function App() {
  return (
    <div className="App">
      <UserDashboard />
      {/* < Home /> */}
    </div>
  );
}

export default App;
