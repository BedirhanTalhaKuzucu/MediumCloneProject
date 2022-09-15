import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import AppRouter from "./AppRouter/AppRouter";
import { AppStateProvider } from "./contexts/AppContext";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <AppStateProvider>
        <Helmet>
          <title>Medium Clone</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <AppRouter />
      </AppStateProvider>
    </div>
  );
}

export default App;
