import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import UserDashboard from "./pages/UserDashboard";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <UserDashboard />
    </div>
  );
}

export default App;
