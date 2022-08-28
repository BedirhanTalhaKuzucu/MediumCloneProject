import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import AppRouter from "./AppRouter/AppRouter";
import { AppStateProvider } from "./contexts/AppContext";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
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
