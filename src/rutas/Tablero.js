import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom'
  

export default function Tablero() {
    return (
        <div>
  
<main>
    <div class="mx-auto py-3 ">
      
                
                    <div id="Contenedor ing y pres" class="space-y-3 px-4 py-1 max-w-4xl">
                        <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                            <div class="px-4 py-3 text-white bg-gray-900 hover:bg-gray-700">
                                Ingresos [$ Ingreso Total]
                            </div>

                            <div class= "space-y-0">
                                <div class="px-4 py-2">
                                    Sueldo [$ Cantidad]
                                </div>
                                <div class="px-4 py-2 ">
                                    Comisiones [$ Cantidad]
                                </div>
                                <div class="px-4 py-2 ">
                                    Propinas [$ Cantidad]
                                </div>
                            </div>
                        </div>

                        <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                        <div class="px-4 py-3 text-white bg-gray-900 hover:bg-gray-700">
                                Presupuestos [$ Total Presupuestado]
                            </div>

                            <div class= "space-y-0">
                                <div class="px-4 py-2">
                                    Renta [$ Cantidad]
                                </div>
                                <div class="px-4 py-2 ">
                                    Comida [$ Cantidad]
                                </div>
                                <div class="px-4 py-2 ">
                                    Transporte [$ Cantidad]
                                </div>
                            </div>

                        </div>

                    </div>

                    
            <div/>

            
    </div>
</main>

        </div>
    )
}
