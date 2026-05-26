export default function GestorEscenas() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-6">
      {/* Barra de Navegación Superior */}
      <header className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm mb-6 relative">
        <div className="flex items-center gap-4">
          <button className="p-2 text-purple-700 hover:bg-purple-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Gestor de Escenas</h1>
        </div>
        
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </header>

      {/* Contenido de la Interfaz */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-purple-50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-800">Secuencias en Desarrollo</h2>
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
              + Nueva Secuencia
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center text-purple-700 font-bold">
                  S1
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Intro Escenario</h3>
                  <p className="text-xs text-gray-500">Duración: 12 seg • 24 FPS</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Completado</span>
            </div>
          </div>
        </div>

        <div className="bg-[#FAF8FC] rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center border border-purple-100 text-center min-h-[300px]">
          <div className="w-20 h-20 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-md font-medium text-gray-800 mb-2">Vista Previa No Disponible</h3>
          <p className="text-sm text-gray-500 mb-4">Seleccione una secuencia para inspeccionar sus parámetros.</p>
        </div>
      </main>
    </div>
  );
}
