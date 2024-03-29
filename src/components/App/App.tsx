import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import MainPage from '../../pages/MainPage/MainPage';
import FormPage from '../../pages/FormPage/FormPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
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
