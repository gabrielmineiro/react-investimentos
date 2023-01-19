import "./App.css";

import Calculadora from "./components/calculadora";
import Offline from "./components/offline";

function App() {
  return navigator.onLine ? <Calculadora /> : <Offline />;
}

export default App;
