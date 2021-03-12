import React,{useState} from 'react'

const [statusLink, setStatusLink] = useState(true)

const mostrarInput = ()=> {
    if(statusLink==false){
        setStatusLink(true)
    } else {setStatusLink(false)}

    

}



export default function Ingresos() {
    return (
        <div>
        <p>hola</p>
        {statusLink ? <p>Mostrar</p>}
            <ul class="space-y-3">
                <li class="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">

                    <a onClick={()=>mostrarInput()}name="agIngreso">Agregar ingreso</a>

                    {/* <form>
                        <label></label>
                        <input/>
                        <label></label>
                        <input/>
                        <label></label>
                        <input/>
                        
                        

                    </form> */}
                </li>
            </ul>
        </div>
    )
}
