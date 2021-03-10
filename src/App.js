import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';


import EditarPerfil from './rutas/EditarPerfil'
import IniciarSesion from './rutas/IniciarSesion'
import Registro from './rutas/Registro'
import RegistroExitoso from './rutas/RegistroExitoso'
import Tablero from './rutas/Tablero'
import Transaccion from './rutas/Transaccion'


function App() {
  return (
    <>
    <AuthState>

        <Router>
 
          <Switch>
              <Route exact path="/" component={IniciarSesion}/>
              <Route exact path="/registro" component={Registro}/>
              <Route exact path="/registro-exitoso" component={RegistroExitoso}/>
              <Route exact path="/gastos/:id" component={Transaccion}/>
              <Route exact path="/usuarios/:id" component={Tablero}/>
              <Route exact path="/editar-perfil/:id" component={EditarPerfil}/>

          </Switch>

        </Router>

    </AuthState>

    

    </>
  );
}

export default App;
