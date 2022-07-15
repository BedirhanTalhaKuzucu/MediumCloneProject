import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import AppRouter from "./AppRouter/AppRouter";
import { AppStateProvider } from './contexts/AppContext';

function App() {
  return (
    <div className="App">
      <AppStateProvider>
        < AppRouter />
      </AppStateProvider>
    </div>
  );
}

export default App;
