// src/components/ProjectCard.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react'; // Necesitarás instalar 'lucide-react'

// Definimos el tipo de las propiedades esperadas (props)
const ProjectCard = ({ title, description, tools, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-indigo-600 dark:border-indigo-400 transform hover:scale-[1.02] cursor-pointer">
      
      {/* Título y Herramientas */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      
      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4">
        Herramientas: {tools.join(', ')}
      </p>

      {/* Descripción */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
        {description}
      </p>

      {/* Botón de Enlace */}
      <a 
        href={link} 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-lg font-semibold text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100 transition duration-150"
      >
        Ver Análisis Completo
        {/* Aquí puedes usar un ícono de flecha si instalas 'lucide-react' */}
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
    </div>
  );
};

export default ProjectCard;