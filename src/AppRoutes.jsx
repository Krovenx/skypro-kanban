import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { GlobalStyle } from "./Components/GlobalStyle";

import MainPage from "./Components/Pages/Main";
import SignInPage from "./Components/Pages/SignIn";
import NewWordPage from "./Components/Pages/Word";
import WordExit from "./Components/Pages/WordAdd";
import WordReview from "./Components/Pages/WordReview";
import SignUpPage from "./Components/Pages/SignUp";
import NotFoundPage from "./Components/Pages/NotFound";
import PrivateRoute from "./Components/Pages/PrivateRoute";
function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [popUser, setPopUser] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route
            path="/main"
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
            <Route path="pop/exit" element={<WordExit />} />
            {/*  просмотр карточек и редактирование задач*/}
            <Route path="card/:id" element={<WordReview />} />
          </Route>
        </Route>
        {/* Вход */}
        <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
        {/* Регистрация */}
        <Route path="/sign-up" element={<SignUpPage setIsAuth={setIsAuth}/>} />
        {/* Страница 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
