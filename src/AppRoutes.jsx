import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { GlobalStyle } from "./Components/GlobalStyle";

import MainPage from "./Components/Pages/Main";
import SignInPage from "./Components/Pages/SignIn";
import SignUpPage from "./Components/Pages/SignUp";
import WordPage from "./Components/Pages/Word";

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
        />
        {/* Страница входа */}
        <Route path="/SignIn" element={<SignInPage />} />
        {/* Страница регистрации */}
        <Route path="/SigUp" element={<SignUpPage />} />
        {/* Добавление задач */}
        {/* <Route path="" element={<WordAdd />} /> */}
        {/* Редактирование и просмотр задачи */}
         <Route path="/Card/:id" element={<WordPage />} /> 
        {/* Модальное окно выхода */}
        {/* <Route path="" element={<WordModalExit />} /> */}
        {/* Страница 404 */}
        {/* <Route path="" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
