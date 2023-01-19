import "./App.css";

import Calculator from "./components/calculator";
import Offline from "./components/offline";

function App() {
  return navigator.onLine ? <Calculator /> : <Offline />;
}

export default App;
