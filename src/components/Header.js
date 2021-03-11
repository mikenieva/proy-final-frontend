import React, {useContext, useEffect} from 'react'
import AuthContext from '../context/auth/AuthContext'





export default function Header(props) {


  // Extraer los valores del context

  const authContext = useContext(AuthContext)

  const {mensaje, autenticado, cerrarSesion} = authContext

    // useEffect(()=> {
    //   if(autenticado){
    //     // props.history.push('/')
    //   }

    // }, [autenticado, props.history])

    // pasarlo a la acción
    // cerrarSesion()

    return (
  

    <div>
        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
<div>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8" src="https://res.cloudinary.com/robtc/image/upload/v1615398315/di%CC%81a_cero_3_i3hxsg.png" alt="Workflow"/>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Editar perfil</a>

              <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cerrar sesión</a>



            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">


            {/* <!-- Profile dropdown --> */}
            <div class="ml-3 relative">
              <div>
                <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://res.cloudinary.com/robtc/image/upload/v1615416915/PEPE_opekbj.png" alt=""/>
                </button>
              </div>

              {/* <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}

            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          {/* <!-- Mobile menu button --> */}
          <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            
            {/* <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            --> */}
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Editar perfil</a>

        <button  
        name= "cerrar-sesion"  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cerrar sesión</button>



      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://res.cloudinary.com/robtc/image/upload/v1615416915/PEPE_opekbj.png" alt=""/>
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">Pepe Martínez</div>
            <div class="text-sm font-medium leading-none text-gray-400">pepe@gmail.com</div>
          </div>

        </div>

      </div>
    </div>
  </nav>

  <header class="bg-white shadow">
    <div id="header" class="flex justify-between items-center">
        <div class="max-w-7xl mx-auto py-2 px-4 ">
          <h1 class="text-3xl font-bold text-gray-900">
            Marzo 2021
          </h1>
          <p>Te falta presupuestar $ 3,370</p>
        </div>

        <div class="flex justify-end mb-2 mt-2">
            <button type="button" class=" mr-3 items-center p-2 border border-transparent rounded-full shadow-sm text-gray-900 bg-c-yellow hover:bg-c-peach focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {/* <!-- Heroicon name: outline/plus --> */}
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </button>   
        </div>
    </div>
                        
  </header>



</div>

    </div>
    
    )
}
