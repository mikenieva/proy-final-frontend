import React, {useContext, useState, useEffect} from 'react'
import { Router } from 'react-router-dom';
import clientesAxios from '../config/axios'

import AuthContext from '../context/auth/AuthContext'

  

export default function IngresosYPresupuestos(props) {

  const authContext = useContext(AuthContext)
  const {autenticado, usuarioAutenticado, actualizarIngresos, datosUsuario} = authContext;

    useEffect(() => {

      usuarioAutenticado() // Verifica si tengo token

      if(!autenticado){
        props.history.push('/usuarios') // REDIRECTS CON REACT-ROUTER-DOM
      }

    }, [autenticado,datosUsuario,props.history])

 const [buttonState, setButtonState] = useState(false)
 const [secondButtonState, setSecondButtonState] = useState(false)


 const [incomeItem, setIncomeItem] = useState({
    incomeAmount: null,
    incomeSource: null,
    incomeDate: null
})

const [budgetItem, setBudgetItem] = useState({
    budgetAmount: null,
    budgetConcept: null
})

 const estatusBoton = ()=> {
    if(buttonState == false) {
        setButtonState(true)
    }
}
console.log("antes del click", secondButtonState)
const estatusSegundoBoton = ()=> {
    if(secondButtonState == false){
        setSecondButtonState(true)
    }
    console.log("despues del click",secondButtonState)

}

const registrarIngreso = ()=> {
    setButtonState(false)

}

const registrarPresupuesto = ()=> {
    setSecondButtonState(false)
}

const {incomeAmount, incomeSource, incomeDate} = incomeItem
const {budgetAmount, budgetConcept} = budgetItem

  
  const onChange = e => {
    console.log(incomeItem)

    setIncomeItem({
      ...incomeItem,
      [e.target.name]: e.target.value
    })
  }

  // Cuando se llenen los campos

  const onSubmit = e => {
    e.preventDefault()

    // const data = {
    //     ...incomeItem,
    //     income 
    // }


    //validar que no haya campos vacíos
    if(
      incomeAmount === "" ||
      incomeSource === "" || 
      incomeDate === ""
      
      ){

        console.log("Todos los campos son obligatorios")
        return
    }


  }
    return (
        <div>
            
  
                    <div id="Contenedor ing y pres" class="space-y-3 px-4 py-1 max-w-4xl">
                    <div class="flex justify-end mb-2 mt-2">
                    
                        <p className= "text-gray-900 hover:text-c-peach focus:outline-none" onClick={()=>estatusBoton()}>Agregar ingreso</p>
                        </div>
                        <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                            
                        

                            <div class="px-4 py-3 font-bold text-gray-900 bg-c-yellow hover:bg-c-peach">
                                    <p>Tus ingresos</p>
                                    
                            </div>
                            {!buttonState ? <p></p> : 
            
                <form onSubmit={onSubmit} className="space-y-1">
                    <label className="">  $   </label>
                    <input onChange={onChange} value={incomeAmount} className="h-8 w-8/12" name="incomeAmount" type="number" min="0" /><br/>
                    <input onChange={onChange} value={incomeSource} name="incomeSource" className="h-8 w-9/12 pl-7 pr-12 sm:text-sm  border border-gray-600" placeholder="Concepto: sueldo,ventas, etc"/><br/>
                    <input onChange={onChange} value={incomeDate} name="incomeDate" type="date" className="h-8 w-9/12"/>
                    <div className="flex justify-start mx-8 py-2 ">
                        <button onClick={registrarIngreso} type="submit" className="border-gray-700 bg-gray-300 text-gray-700 h-8 w-9/12">Registra tu ingreso</button>
                    </div>
                </form>
    }
                    { buttonState ? <p></p> :
                            <div class= "space-y-0">
                                <div class="px-4 py-2">
                                    Sueldo      [$ 8,100]
                                </div>
                                <div class="px-4 py-2 ">
                                    Comisiones   [$ 1,700]
                                </div>
                            </div>}

                        </div>
                        
                        <div class="flex justify-end mb-2 mt-2">
                            <p className= "text-gray-900 hover:text-c-peach focus:outline-none" onClick={()=>estatusSegundoBoton()}>Agregar presupuesto</p>    
                        </div>

                        <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                        <div class="px-4 py-3 text-gray-900 font-bold bg-c-yellow hover:bg-c-peach">
                                    Presupuestos  [Total: $ 6,430]
                            </div>

                            {!secondButtonState ? <p></p> : 
                                    <form onSubmit={onSubmit} className="space-y-1">
                                        <label className="">  $   </label>
                                        <input onChange={onChange} value={budgetAmount} className="h-8 w-8/12" name="budgetAmount" type="number" min="0" /><br/>
                                        <input onChange={onChange} value={budgetConcept} name="budgetConcept" className="h-8 w-9/12 pl-7 pr-12 sm:text-sm  border border-gray-600" placeholder="Concepto a presupuestar"/><br/>
                                        <div className="flex justify-start mx-8 py-2 ">
                                            <button onClick={registrarPresupuesto} type="submit" className="border-gray-700 bg-gray-300 text-gray-700 h-8 w-9/12">Registrar presupuesto</button>
                                        </div>
                                    </form>
                        }
                            {secondButtonState ? <p></p> :
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
                            </div>}

                        </div>

                    </div>

                    
            <div/>

            
    </div>

            


        
    )
}
