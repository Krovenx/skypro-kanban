import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { GlobalStyle } from "./Components/GlobalStyle";

import MainPage from "./Components/Pages/Main";
import SignInPage from "./Components/Pages/SignIn";
import SignUpPage from "./Components/Pages/SignUp";
import NewWordPage from "./Components/Pages/Word";
import WordPage from "./Components/Pages/WordAdd";

function AppRoutes() {
  const [loading, setLoading] = useState(true);
  const [popUser, setPopUser] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              loading={loading}
              popUser={popUser}
              setPopUser={setPopUser}
            />
          }
        >
          {/* Добавление новой задачи */}
          <Route path="card/add" element={<NewWordPage />} />
          {/* Модальное окно */}
          <Route path="card/:id" element={<WordPage />} />
        
        </Route>

      </Routes>
    </Router>
  );
}

export default AppRoutes;
