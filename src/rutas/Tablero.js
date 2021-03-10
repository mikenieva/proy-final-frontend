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
      
        <div id="Contenedor de tarjetas y gráficas"class="flex justify-center max-w-max">
                
                    <div id="Contenedor ing y pres" class="space-y-3 px-4 py-1 max-w-4xl">
                        <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                            <div class="px-4 py-3 ">
                                Ingresos es un apartado importante{/* <!-- Content goes here -->
                                <!-- We use less vertical padding on card headers on desktop than on body sections --> */}
                            </div>

                            <div class= "space-y-0">
                                <div class="px-4 py-2">
                                    Sueldo{/* <!-- Content goes here --> */}
                                </div>
                                <div class="px-4 py-2 ">
                                    Comisiones{/* <!-- Content goes here --> */}
                                </div>
                                <div class="px-4 py-2 ">
                                    Propinas{/* <!-- Content goes here --> */}
                                </div>
                            </div>
                        </div>

                        <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                            <div class="px-4 py-5 sm:px-6">
                                Presupuestos{/* <!-- Content goes here -->
                                <!-- We use less vertical padding on card headers on desktop than on body sections --> */}
                            </div>
                                <div class="px-4 py-5 sm:p-6">
                                    Renta{/* <!-- Content goes here --> */}
                                </div>
                        </div>

                    </div>

                    <div id="Columna de gráficas" class="max-w-md">

                    </div>
            <div/>

        </div>

      después de la caja{/* <!-- /End replace --> */}
    
    </div>
</main>

        </div>
    )
}
