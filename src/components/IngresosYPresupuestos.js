import React, {useContext, useEffect} from 'react'

import AuthContext from '../context/auth/AuthContext'

  

export default function IngresosYPresupuestos(props) {

  const authContext = useContext(AuthContext)
  const {autenticado, usuarioAutenticado, actualizarIngresos, datosUsuario} = authContext;

    useEffect(() => {
      usuarioAutenticado() // Verifica si tengo token

      if(!autenticado){
        props.history.push('/usuarios') // REDIRECTS CON REACT-ROUTER-DOM
      }

      actualizarIngresos() //

    }, [autenticado,datosUsuario,props.history])



    return (
        <div>
  
  
                    <div id="Contenedor ing y pres" class="space-y-3 px-4 py-1 max-w-4xl">
                        <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                            
                            <div class="px-4 py-3 font-bold text-gray-900 bg-c-yellow hover:bg-c-peach">
                                    <p>ingresos</p>
                                    
                                    <a>Agregar ingresos</a>
                                    <form action="/crearingreso" method="POST">
        
<div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">$</span>
    
    <input name="incomeAmount" type="number" class="form-control" placeholder="¿Cuánto vas a recibir?"/>
</div>

<div>
  <label htmlFor="incomeSource">¿Qué tipo de ingreso es?</label>
  <select name="incomeSource">
    <option selected>Escoge una opción...</option>
    <option value="Mi sueldo">Mi sueldo</option>
    <option value="Una venta que hice">Una venta que hice</option>
    <option value="Otro">Otro</option>
  </select>
</div>

<div>
    <span>¿Cuándo lo vas a recibir?</span>
    <input 
        name="incomeDate" 
        type="date"
        class="form-control" placeholder="¿Cuándo lo recibirás?"/>
        </div>

        <button type="submit" class="btn btn-primary">Registra tu ingreso</button>

    </form>
                                    
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


        
    )
}
