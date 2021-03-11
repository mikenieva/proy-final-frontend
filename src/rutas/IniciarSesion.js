import React, {useState, useContext, useEffect} from 'react'


// import AlertaContext from '../context/alertas/AlertaContext'

import AuthContext from '../context/auth/AuthContext'


export default function IniciarSesion(props) {

  // Extraer los valores del context
  // const alertaContext = useContext(AlertaContext)

  // const {alerta, mostrarAlerta} = alertaContext

  const authContext = useContext(AuthContext)

  const {mensaje, autenticado, iniciarSesion} = authContext;

  
  useEffect(()=>{
    if(autenticado){
      props.history.push('/usuarios')
    }

    // if(mensaje){
    //   mostrarAlerta(mensaje.msg, mensaje.categoria)
    // }
    
  }, [mensaje, autenticado, props.history])

  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
      email:"",
      password:""
  })

  // Extraer de usuario
  const { email, password } = usuario

  const onChange = (e) => {
      guardarUsuario({
        ...usuario,
        [e.target.name]: e.target.value
      })
  }

  // Cuando el usuario quiere iniciar sesión

  const onSubmit = (e) => {
      e.preventDefault()

  // validar que no haya campos vacíos
    if(email.trim() === "" ||
    password.trim() === ""){
      console.log("Todos los campos son obligatorios")
      // return mostrarAlerta("Todos los campos son obligatorios",
      // "alerta-error")
    }

    // pasarlo al action

    iniciarSesion({email, password})
  }
  


    return (
        <div>

        

<div className="min-h-screen bg-white flex">
  <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div className="mx-auto w-full max-w-sm lg:w-96">
      
      
      <div>

      {/* {alerta ?
        (
      <div className={`alerta${alerta.categoria}`}>{alerta.msg}</div>
        )
        :null} */}

        <img className="h-20 w-auto" src="https://res.cloudinary.com/robtc/image/upload/v1615398315/di%CC%81a_cero_3_i3hxsg.png" alt="Workflow"/>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Inicia sesión
        </h2>
      </div>

      <div className="mt-8">
        

        <div className="mt-6">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <div className="mt-1">
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Tu email"
                    onChange={onChange}
                    value={email}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="mt-1">
                <input 
                    type="password" id="password" name="password" placeholder="Tu contraseña"
                    onChange={onChange}
                    value={password}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
            </div>

            <div>
              <input 
                  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-c-yellow hover:bg-c-peach focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  value="Iniciar Sesión"
                  />
            </div>

            </form>

            <div className="text-sm">
                <p>¿No eres usuario aún? <a href="/registro" className="font-medium text-c-yellow hover:text-c-peach">
                  Regístrate aquí
                </a></p>
              </div>
          

        </div>
      </div>
    </div>
  </div>
  <div className="hidden lg:block relative w-0 flex-1">
    <img className="absolute inset-0 h-full object-cover" src="https://res.cloudinary.com/robtc/image/upload/v1615396903/Disen%CC%83o_sin_ti%CC%81tulo_5_nkwluk.png" alt=""/>
  </div>
</div>


        </div>
        
    )
}
