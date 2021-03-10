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
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      antes de la caja{/* <!-- Replace with your content --> */}
      <div class="px-4 py-6 sm:px-0">
  
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
        
<div class="flex justify-end">
        <button type="button" class="mt-3 mr-3  items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {/* <!-- Heroicon name: outline/plus --> */}
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        </button>
        
</div>

        </div>
      
      </div>
      después de la caja{/* <!-- /End replace --> */}
    </div>
  </main>

        </div>
    )
}
