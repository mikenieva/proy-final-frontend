import React, {useState, useContext, useEffect}  from 'react'

import AuthContext from '../context/auth/AuthContext'
// import AlertaContext from '../context/alertas/AlertaContext'


export default function Registro(props) {

  //Extraer los valores del context
  // const alertaContext = useContext(AlertaContext)
  // const { alerta, mostrarAlerta } = AlertaContext

  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
        username:"",
        email:"",
        password:""
  })

  const authContext = useContext(AuthContext)
  const { mensaje, autenticado, registrarUsuario} = authContext;

  // En caso de que el usuario se haya autenticado o registrado, un registro duplicado

  useEffect(()=>{
    if(autenticado){
      props.history.push('/registro-exitoso')
    }

    // if(mensaje){
    //   mostrarAlerta(mensaje.msg, mensaje.categoria)
    // }

  },[/*mensaje,*/ autenticado, props.history])


  // Extraer de usuario

  const {username, email, password} = usuario
  
  const onChange = e => {
    console.log(usuario)
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  // Cuando el usuario quiera iniciar sesión

  const onSubmit = e => {
    e.preventDefault()

    //validar que no haya campos vacíos
    if(
      username.trim() === "" ||
      email.trim() === "" || 
      password.trim() === ""
      
      ){

        console.log("Todos los campos son obligatorios")
        return

      // mostrarAlerta("Todos los campos son obligatorios", "alerta-error")
      //   return 
    }

    // password mínimo de 6 caracteres

    if(password.length<6) {
      console.log("El password debe ser de al menos 6 caracteres")
      // mostrarAlerta("El password debe ser de al menos 6 caracteres","alerta-error")
      return 
    }

    // pasarlo al action
    registrarUsuario({
      username,
      email,
      password
    })
    
  }


    return (
        <div>
            
            {/* {alerta ?
            (
              <div className={`alerta ${alerta.categoria}`}>
                    {alerta.msg}
              </div> 
            )
            : null} */}

<div className="min-h-screen bg-white flex">
  <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <img className="h-20 w-auto" src="https://res.cloudinary.com/robtc/image/upload/v1615398315/di%CC%81a_cero_3_i3hxsg.png" alt="Workflow"/>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Regístrate
        </h2>
      </div>

      <div className="mt-8">
        

        <div className="mt-6">

        


          <form 
          
            onSubmit={onSubmit} 
            className="space-y-6"
            >
          <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Usuario
              </label>
              <div className="mt-1">
                <input 
                  type="text"
                  id="username" 
                  name="username" 
                  placeholder="Tu nombre de usuario"
                  onChange={onChange}
                  value={username} 
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <div className="mt-1">
                <input 
                type="email"
                id="email" 
                name="email" 
                placeholder="Tu correo electrónico" 
                onChange={onChange}
                value={email}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"                  
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="mt-1">
                <input 
                    type="password"
                    id="password" 
                    name="password" 
                    placeholder="Tu contraseña" 
                    onChange={onChange} 
                    value={password}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"                      
                    />
              </div>
            </div>

            <div className="space-y-3">
              <input to={'/registro'} 
                  type="submit" 
                  value="Regístrate"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-c-yellow hover:bg-c-peach focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c-peach"/>
              
            </div>
            </form>

            <div className="text-sm">
                <p>¿Ya eres usuario? <a href="/" className="font-medium text-c-yellow hover:text-c-peach">
                  Inicia sesión aquí
                </a></p>
              </div>
          

        </div>
      </div>
    </div>
  </div>
  <div className="hidden lg:block relative w-0 flex-1">
    <img className="absolute inset-0 h-full object-cover" src="https://res.cloudinary.com/robtc/image/upload/v1615397508/Disen%CC%83o_sin_ti%CC%81tulo_6_bkrp2h.png" alt=""/>
  </div>
</div>


        </div>
    )
}
