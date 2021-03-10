import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom'
  

export default function IngresosYPresupuestos() {
    return (
        <div>
  
<main>
    <div class="mx-auto py-3 ">
      
                
                    <div id="Contenedor ing y pres" class="space-y-3 px-4 py-1 max-w-4xl">
                        <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                            
                            <div class="px-4 py-3 font-bold text-gray-900 bg-c-yellow hover:bg-c-peach">
                                    Ingresos    [Total: $ 9,800]
                            </div>

                            <div class= "space-y-0">
                                <div class="px-4 py-2">
                                    Sueldo      [$ 8,100]
                                </div>
                                <div class="px-4 py-2 ">
                                    Comisiones   [$ 1,700]
                                </div>
                            </div>
                        </div>

                        <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                        <div class="px-4 py-3 text-gray-900 font-bold bg-c-yellow hover:bg-c-peach">
                                    Presupuestos  [Total: $ 6,430]
                            </div>

                            <div class= "space-y-0">
                                <div class="px-4 py-2">
                                    Renta          [$ 3,800]
                                </div>
                                <div class="px-4 py-2 ">
                                    Despensa       [$ 1,500]
                                </div>
                                <div class="px-4 py-2 ">
                                    Transporte     [$ 750]
                                </div>
                                <div class="px-4 py-2 ">
                                    Ahorro         [$ 380]
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
