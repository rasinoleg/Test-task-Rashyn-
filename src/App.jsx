import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { lazy } from 'react';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const FavouritePage = lazy(() => import('./pages/FavouritePage/FavouritePage'));
const CarsPage = lazy(() => import('./pages/CarsPage/CarsPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="catalog/*" element={<CarsPage />} />
        <Route path="favorites/*" element={<FavouritePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
