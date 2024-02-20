import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import MainPage from '../../pages/MainPage/MainPage';
import FormPage from '../../pages/FormPage/FormPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import './App.css';

function App() {
  return (
    <>
      <header>header </header>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
