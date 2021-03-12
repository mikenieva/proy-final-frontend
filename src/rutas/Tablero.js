import React, {useContext, useEffect} from 'react'
import IngresosYPresupuestos from '../components/IngresosYPresupuestos'
import Graficas from '../components/Graficas'
import Header from '../components/Header'


import AuthContext from './../context/auth/AuthContext'

export default function Tablero(props) {

  const authContext = useContext(AuthContext)
  const {autenticado, usuarioAutenticado, actualizarIngresos, datosUsuario} = authContext;

    useEffect(() => {
      usuarioAutenticado() // Verifica si tengo token

      if(!autenticado){
        props.history.push('/') // REDIRECTS CON REACT-ROUTER-DOM
      }

      actualizarIngresos() //

    }, [autenticado,datosUsuario])

    return (

    <>
      <Header/>
        <div className="division-tablero">
        <div className="columna-tablero">
          <IngresosYPresupuestos/>
        </div>
        <div className="columna-tablero">
          <Graficas/>
        </div>
      </div>

      </>
    )
}
