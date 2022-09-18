import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/home/HomePage';
import { ErrorPage } from './components/errorPage/ErrorPage';
import { EmptyBoard } from './components/empty/EmptyBoard';
import { Board } from './components/main/board/Board';
import { Structure } from './components/main/board/structure/Structure';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Board />} />
        <Route path="empty" element={<EmptyBoard />} />
        <Route path="/structure" element={<Structure />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
