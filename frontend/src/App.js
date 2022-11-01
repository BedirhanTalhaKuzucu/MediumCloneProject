import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import AppRouter from "./AppRouter/AppRouter";
import { AppStateProvider } from "./contexts/AppContext";
import { AuthStateProvider } from "./contexts/AuthContext";
import { UserPageStateProvider } from "./contexts/UserPageContext";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <AuthStateProvider>
        <AppStateProvider>
          <UserPageStateProvider>
            <Helmet>
              {/* <p>deneme</p> */}
              <title>Medium Clone</title>
              <meta name="description" content="App Description" />
              <meta name="theme-color" content="#008f68" />
            </Helmet>
            <AppRouter />
          </UserPageStateProvider>
        </AppStateProvider>
      </AuthStateProvider>
    </div>
  );
}

export default App;
