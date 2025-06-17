import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
//import PrivateRoute from './assets/components/PrivateRoute';
import CriarLoja from './pages/criarLoja';
import Home from './pages/home';
import HomeRedirect from './pages/homeRedirect';
import EditarProduto from './pages/EditarProduto';
import AdicionarProduto from './pages/AdicionarProduto';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/homeRedirect" element={<HomeRedirect />} />
          <Route path="/criarloja" element={<CriarLoja />} />
          <Route path="/home" element={<Home />} />
          <Route path="/produto/:id" element={<EditarProduto />} />
          <Route path="/adicionar-produto" element={<AdicionarProduto />} />
      </Routes>
    </BrowserRouter>
  );
}