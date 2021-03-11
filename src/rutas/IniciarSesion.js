import React from 'react'

export default function IniciarSesion() {
    return (
        <div>

<div class="min-h-screen bg-white flex">
  <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <img class="h-20 w-auto" src="https://res.cloudinary.com/robtc/image/upload/v1615398315/di%CC%81a_cero_3_i3hxsg.png" alt="Workflow"/>
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
          Inicia sesión
        </h2>
      </div>

      <div class="mt-8">
        

        <div class="mt-6">
          <form action="/usuarios/tablero" method="POST" class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
            </div>

            <div class="space-y-1">
              <label for="password" class="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div class="mt-1">
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
            </div>

            <div class="flex items-center justify-between">
              

              
            </div>

            <div>
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-c-yellow hover:bg-c-peach focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Iniciar sesión
              </button>
            </div>

            <div class="text-sm">
                <p>¿No eres usuario aún? <a href="/registro" class="font-medium text-c-yellow hover:text-c-peach">
                  Regístrate aquí
                </a></p>
              </div>
          </form>

        </div>
      </div>
    </div>
  </div>
  <div class="hidden lg:block relative w-0 flex-1">
    <img class="absolute inset-0 h-full object-cover" src="https://res.cloudinary.com/robtc/image/upload/v1615396903/Disen%CC%83o_sin_ti%CC%81tulo_5_nkwluk.png" alt=""/>
  </div>
</div>


        </div>
        
    )
}
