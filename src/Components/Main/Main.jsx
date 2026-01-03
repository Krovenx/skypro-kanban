import React from "react";
import "./Main.css";
import Column from "../Column/Column";

const Main = ({ loading }) => {
  return (
    <main className="main">
      <div className="container">
        {loading ? (
          <div className="loading-container">
            <div className="loading-text">Данные загружаются...</div>
          </div>
        ) : (
          <div className="main__block">
            <div className="main__content">
              {["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"].map((title, i) => (
                <Column loading={loading} title={title} key={title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;