import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import PrivateRoute from './assets/components/PrivateRoute';
import CriarLoja from './pages/criarLoja';
import HomeManager from './pages/homemanager';
import HomeRedirect from './pages/homeRedirect';
import EditarProduto from './pages/EditarProduto';
import AdicionarProduto from './pages/AdicionarProduto';
import HomeCliente from './pages/homeClient';
import LojaDetalhes from './pages/loja';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute roles={['ADMIN','MANAGER']} />}>
          <Route path="/homeRedirect" element={<HomeRedirect />} />
          <Route path="/criarloja" element={<CriarLoja />} />
          <Route path="/homemanager" element={<HomeManager />} />
          <Route path="/produto/:id" element={<EditarProduto />} />
          <Route path="/adicionar-produto" element={<AdicionarProduto />} />
          <Route path='/homeclient' element={<HomeCliente/>}/>
          <Route path='loja/:id' element= {<LojaDetalhes/>}/>
          <Route path='favoritos' element= {<Favoritos/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}