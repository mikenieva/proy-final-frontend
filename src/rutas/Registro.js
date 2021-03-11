import React, {useState, useContext, useEffect}  from 'react'
import {Link} from 'react-router-dom'

import AuthContext from '../context/auth/AuthContext'

export default function Registro(props) {

  //Extraer los valores del context
  
    return (
        <div>
            
           
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
          <form action="localhost:4000/usuarios" method="POST" className="space-y-6">
          <div>
              <label for="username" className="block text-sm font-medium text-gray-700">
                Usuario
              </label>
              <div className="mt-1">
                <input id="username" name="username" type="text" autocomplete="Usuario" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
            </div>

            <div>
              <label for="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <div className="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
            </div>

            <div className="space-y-1">
              <label for="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="mt-1">
                <input id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
            </div>

            <div className="flex items-center justify-between">
              

              
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-c-yellow hover:bg-c-peach focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c-peach">
                Regístrate
              </button>
            </div>

            <div className="text-sm">
                <p>¿Ya eres usuario? <a href="/" className="font-medium text-c-yellow hover:text-c-peach">
                  Inicia sesión aquí
                </a></p>
              </div>
          </form>

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
