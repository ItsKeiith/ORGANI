import React from 'react';

export default function AnimatorInterface() {
  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col p-4 select-none">
      
      {/* 1. BARRA DE NAVEGACIÓN SUPERIOR */}
      <header className="w-full border-2 border-purple-400 rounded-sm p-2 flex justify-between items-center mb-6 bg-white shadow-sm">
        <button className="p-1 hover:bg-slate-100 rounded text-xl font-bold text-slate-600">☰</button>
        <h1 className="text-2xl font-semibold tracking-wide text-slate-700">Animator</h1>
        <button className="p-1 hover:bg-slate-100 rounded text-xl font-bold text-slate-600">👤</button>
      </header>

      {/* RECUADRO DE PREVISUALIZACIÓN */}
      <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center mb-6 relative">
        <div className="w-full max-w-2xl aspect-[16/10] bg-black rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          <img 
            src="https://cdn.dribbble.com/userupload/3738070/file/original-08d9339248d14784ef77b8b90179bed3.png?resize=752x&vertical=center" 
            alt="Preview" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 4. CONTROLES DE REPRODUCCIÓN */}
      <div className="flex justify-center items-center gap-8 mb-8 text-2xl text-slate-500">
        <button className="hover:text-black transition">↶</button>
        <button className="hover:text-black transition">⚙️</button>
        <button className="hover:text-black transition">▶</button>
        <button className="hover:text-black transition">⏸</button>
        <button className="hover:text-black transition">📤</button>
        <button className="hover:text-black transition">⏭</button>
        <button className="hover:text-black transition">⏮</button>
      </div>

      {/* 5. TIMELINE / LÍNEA DE TIEMPO LIMPIA */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-3">
        
        {/* Track 1 - Vacío */}
        <div className="w-full bg-slate-200/60 rounded-xl h-12 border border-dashed border-slate-300 flex items-center px-4 justify-between text-slate-400 text-sm">
          <span className="font-mono text-xs text-slate-400/70">Pista de clip #1</span>
          <div className="w-full flex justify-around ml-10">
            <span className="w-1 h-3 bg-slate-300/60 rounded-full"></span>
            <span className="w-1 h-3 bg-slate-300/60 rounded-full"></span>
            <span className="w-1 h-3 bg-slate-300/60 rounded-full"></span>
            <span className="w-1 h-3 bg-slate-300/60 rounded-full"></span>
          </div>
        </div>

        {/* Track 2 - Vacío */}
        <div className="w-full bg-slate-200/60 rounded-xl h-12 border border-dashed border-slate-300 flex items-center px-4 justify-between text-slate-400 text-sm">
          <span className="font-mono text-xs text-slate-400/70">Pista de clip #2</span>
          <div className="w-full flex justify-around ml-10">
            <span className="w-1 h-3 bg-slate-300/60 rounded-full"></span>
            <span className="w-1 h-3 bg-slate-300/60 rounded-full"></span>
            <span className="w-1 h-3 bg-slate-300/60 rounded-full"></span>
            <span className="w-1 h-3 bg-slate-300/60 rounded-full"></span>
          </div>
        </div>

        {/* Track 3 - Vacío */}
        <div className="w-full bg-slate-200/60 rounded-xl h-12 border border-dashed border-slate-300 flex items-center px-4 justify-between text-slate-400 text-sm">
          <span className="font-mono text-xs text-slate-400/70">Pista de clip #3</span>
          <div className="w-full flex justify-around ml-10">
            <span className="w-1 h-3 bg-slate-300/60 rounded-full"></span>
            <span className="w-1 h-3 bg-slate-300/60 rounded-full"></span>
            <span className="w-1 h-3 bg-slate-300/60 rounded-full"></span>
            <span className="w-1 h-3 bg-slate-300/60 rounded-full"></span>
          </div>
        </div>

      </div>

    </div>
  );
}