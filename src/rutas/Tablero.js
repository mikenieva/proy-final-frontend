import React from 'react'
import IngresosYPresupuestos from '../components/IngresosYPresupuestos'
import Graficas from '../components/Graficas'
import Header from '../components/Header'


export default function Tablero() {
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
