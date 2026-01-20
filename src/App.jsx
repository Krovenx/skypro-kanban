import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./Components/GlobalStyle";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppRoutes />
    </Router>
  );
}

export default App;
