import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Column from './Components/Column/Column';
import Card from './Components/Card/Card';
import PopExit from './Components/Popups/PopExit/PopExit';
import PopNew from './Components/Popups/PopNew/PopNew';
import PopBrowse from './Components/Popups/PopBrowse/PopBrowse';

function App() {
  return (
    <div className="wrapper">
      <PopExit />
      <PopNew />
      <PopBrowse />
      <Header />
      
      <Main>
        <Column title="Без статуса">
          <Card themeColor="_orange" themeName="Web Design" title="Название задачи" date="30.10.23" />
          <Card themeColor="_green" themeName="Research" title="Название задачи" date="30.10.23" />
          <Card themeColor="_orange" themeName="Web Design" title="Название задачи" date="30.10.23" />
          <Card themeColor="_purple" themeName="Copywriting" title="Название задачи" date="30.10.23" />
          <Card themeColor="_orange" themeName="Web Design" title="Название задачи" date="30.10.23" />
        </Column>

        <Column title="Нужно сделать">
          <Card themeColor="_green" themeName="Research" title="Название задачи" date="30.10.23" />
        </Column>

        <Column title="В работе">
          <Card themeColor="_green" themeName="Research" title="Название задачи" date="30.10.23" />
          <Card themeColor="_purple" themeName="Copywriting" title="Название задачи" date="30.10.23" />
          <Card themeColor="_orange" themeName="Web Design" title="Название задачи" date="30.10.23" />
        </Column>

        <Column title="Тестирование">
          <Card themeColor="_green" themeName="Research" title="Название задачи" date="30.10.23" />
        </Column>

        <Column title="Готово">
          <Card themeColor="_green" themeName="Research" title="Название задачи" date="30.10.23" />
        </Column>
      </Main>
    </div>
  );
}

export default App;