import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';

import Header from './components/Header'
import Ingresos from './components/Ingresos'
import Presupuestos from './components/Presupuestos'
import Sidebar from './components/Header'

import EditarPerfil from './rutas/EditarPerfil'
import Graficas from './rutas/Graficas'
import IniciarSesion from './rutas/IniciarSesion'
import Registro from './rutas/Registro'
import RegistroExitoso from './rutas/RegistroExitoso'
import Tablero from './rutas/Tablero'
import Transaccion from './rutas/Transaccion'


function App() {
  return (
    <>
    <Router>

      <div>
          <Header/>
      </div>

      <div className="division-tablero">
        <Tablero/>
        <Graficas/>
      </div>
    
      <Switch>
          <Route exact path="/usuarios/:id/editar-perfil" component={EditarPerfil}/>
          <Route exact path="/auth" component={IniciarSesion}/>
          <Route exact path="/usuarios/registro" component={Registro}/>
          <Route exact path="/usuarios/registro-exitoso" component={RegistroExitoso}/>
          <Route exact path="/gastos/:id" component={Transaccion}/>






      </Switch>

    
     </Router>

    </>
  );
}

export default App;
