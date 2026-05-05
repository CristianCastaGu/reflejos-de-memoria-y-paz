/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, ReactNode } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Shield, 
  Scale, 
  Eye, 
  Heart, 
  ScrollText, 
  Compass, 
  Quote 
} from 'lucide-react';

interface SlideProps {
  children: ReactNode;
  isActive: boolean;
  key?: React.Key;
}

const Slide = ({ children, isActive }: SlideProps) => (
  <AnimatePresence mode="wait">
    {isActive && (
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.02, y: -10 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full flex flex-col items-center justify-center max-w-6xl mx-auto px-6"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 0: Title
    {
      content: (
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">Universidad de La Sabana</p>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">Fundamentos de Gestión Empresarial</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl font-serif italic text-gray-900 leading-[1.1]">
              Reflejos de <br/>
              <span className="not-italic font-normal">Memoria & Paz</span>
            </h1>
            <div className="h-px w-24 bg-gray-900 mx-auto opacity-20" />
            <p className="text-xl font-serif italic text-gray-600 max-w-xl mx-auto">
              "Virtudes, verdad y construcción de país a través de la mirada de Jesús Abad Colorado"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-12"
          >
            <p className="text-sm font-medium text-gray-400">Prof. Luis Henrique Beltrán</p>
          </motion.div>
        </div>
      ),
      bg: "bg-[#fdfbf7]"
    },
    // Slide 1: Introduction
    {
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-400">
              <Camera size={20} />
              <span className="text-xs font-mono uppercase tracking-widest">El Testigo</span>
            </div>
            <h2 className="text-4xl font-serif text-gray-900">La Mirada que Sana</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Jesús Abad Colorado ha documentado el conflicto en Colombia con una sensibilidad única. 
              Su obra no es un espectáculo del dolor, sino un <strong>pulsar del alma</strong> que busca educar a las nuevas generaciones.
            </p>
            <blockquote className="border-l-2 border-gray-900 pl-6 py-2 italic text-gray-700">
              "Para mí la fotografía y la memoria son un antídoto..."
            </blockquote>
          </div>
          <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
             <img 
               src="https://picsum.photos/seed/abad/1200/1500?grayscale&blur=2" 
               alt="Reflection" 
               className="object-cover w-full h-full opacity-80"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      )
    },
    // Slide 2: Fortaleza
    {
      content: (
        <div className="max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 mb-4">
            <Shield className="text-gray-900" size={24} />
          </div>
          <h2 className="text-5xl font-serif italic text-gray-900 tracking-tight">Fortaleza</h2>
          <p className="text-xl font-mono uppercase tracking-[0.2em] text-gray-400 text-sm">Resistir sin rendirse</p>
          <div className="h-px w-16 bg-gray-200 mx-auto" />
          <p className="text-2xl text-gray-700 font-light leading-relaxed px-12">
            "No es una pose heroica sino una respuesta cotidiana al dolor profundo."
          </p>
          <div className="grid grid-cols-2 gap-8 text-left pt-12">
            <div className="bg-white p-8 border-l-4 border-gray-900 shadow-sm transition-transform hover:-translate-y-1">
              <h4 className="font-bold text-gray-900 mb-2 italic">Eugenio Palacio</h4>
              <p className="text-sm text-gray-500">Sobreviviente de Bojayá. La fortaleza de quien conquista el bien a pesar del costo.</p>
            </div>
            <div className="bg-white p-8 border-l-4 border-gray-900 shadow-sm transition-transform hover:-translate-y-1">
              <h4 className="font-bold text-gray-900 mb-2 italic">Matilde Sánchez</h4>
              <p className="text-sm text-gray-500">Perdió a su familia en Machuca. Levantarse una y otra vez sabiendo que la guerra no es el camino.</p>
            </div>
          </div>
        </div>
      )
    },
    // Slide 3: Prudencia
    {
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/lens/800/1000?grayscale" 
              alt="Lens" 
              className="object-cover h-[500px] w-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-xs font-mono uppercase tracking-[0.3em]">Providentia</p>
              <h3 className="text-2xl font-serif italic">Ver más allá</h3>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-serif text-gray-900 leading-tight">Prudencia: <br/><span className="italic">Conciencia Ética</span></h2>
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Ayllón la define como el arte de convertir la verdad en norma de conducta. 
                Jesús Abad no busca el morbo, busca la <strong>memoria</strong>.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="h-px w-8 bg-gray-300 mt-3" />
                  <p>Las fotos son pulsaciones del alma.</p>
                </li>
                <li className="flex gap-4">
                  <div className="h-px w-8 bg-gray-300 mt-3" />
                  <p>Antídoto para educar nuevas generaciones.</p>
                </li>
                <li className="flex gap-4">
                  <div className="h-px w-8 bg-gray-300 mt-3" />
                  <p>Orientación hacia la no repetición.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // Slide 4: Justicia
    {
      content: (
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-16 items-start">
          <div className="w-1/3">
            <div className="sticky top-0 space-y-4">
               <Scale size={48} strokeWidth={1} className="text-gray-900" />
               <h2 className="text-6xl font-serif">Justicia</h2>
               <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">Identidad Radical</p>
               <div className="h-32 w-px bg-gray-200 mt-8" />
            </div>
          </div>
          <div className="w-2/3 space-y-12">
            <p className="text-3xl font-serif italic text-gray-800 leading-relaxed">
              "Dar nombre y rostro a quienes el conflicto pretendió invisibilizar."
            </p>
            <div className="space-y-8">
              <div className="p-8 bg-neutral-900 text-neutral-100 rounded-sm">
                 <p className="text-lg leading-relaxed opacity-90">
                   Restituir la identidad es un acto de justicia. En un país con más de 7 millones de desplazados, 
                   reconocer que cada persona tiene nombre, voz y dignidad es resistir al olvido.
                 </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="py-4 border-t border-gray-200">
                  <span className="block text-2xl font-serif text-gray-900">450k+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-tighter">Muertos reconocidos</span>
                </div>
                <div className="py-4 border-t border-gray-200">
                  <span className="block text-2xl font-serif text-gray-900">7M+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-tighter">Desplazados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 5: Esperanza
    {
      content: (
        <div className="max-w-4xl text-center space-y-12">
          <Heart className="mx-auto text-rose-300" size={40} fill="currentColor" />
          <h2 className="text-5xl font-serif italic text-gray-900 leading-tight">Esperanza como Virtud Vivida</h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto italic">
            "Un cielo despejado con un lucero en medio: así es la esperanza de la gente de mi país."
          </p>
          <div className="bg-[#1a1a1a] p-12 text-white relative overflow-hidden group rounded-sm">
            <div className="relative z-10 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-[0.4em] text-neutral-400">Resistencia Interior</h4>
              <p className="text-2xl font-serif text-neutral-200">
                La esperanza no es un sentimiento ingenuo. Es una actitud activa que no niega el dolor sino que lo trasciende.
              </p>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <Eye size={120} />
            </div>
          </div>
        </div>
      )
    },
    // Slide 6: La Verdad
    {
      content: (
        <div className="w-full space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-serif text-gray-900">La Importancia de la Verdad</h2>
            <p className="text-gray-500 uppercase font-mono tracking-widest text-xs">Pilar Fundamental del Perdón</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <ScrollText className="text-gray-900 mb-6" size={24} />, 
                title: "Condición de Autenticidad", 
                desc: "Después no digan que no sabían lo que estaba pasando. Sin verdad el perdón es solo un gesto vacío." 
              },
              { 
                icon: <Compass className="text-gray-900 mb-6" size={24} />, 
                title: "Antídoto contra la Repetición", 
                desc: "Si una sociedad no conoce su historia de violencia, está expuesta a repetirla. Memoria contra el olvido." 
              },
              { 
                icon: <Heart className="text-gray-900 mb-6" size={24} />, 
                title: "Base de la Dignidad", 
                desc: "Reconocer públicamente lo ocurrido es un acto de justicia. El caso de Andrés y la foto de su padre." 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 border border-gray-100 bg-white hover:border-gray-900 transition-colors duration-500 shadow-sm"
              >
                {item.icon}
                <h3 className="text-xl font-serif mb-4 italic">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    // Slide 7: Aporte al País
    {
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
          <div className="flex flex-col justify-center p-12 bg-white">
             <div className="space-y-8">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">En el Presente</span>
                <h3 className="text-4xl font-serif italic">Gestos Cotidianos</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  "La responsabilidad de hallarle solución a eso tiene que ser un compromiso de todos."
                </p>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li>— Resistirse a la normalización de la violencia.</li>
                  <li>— Escuchar historias sin reducirlas a estadísticas.</li>
                  <li>— Cultivar la templanza en la polarización.</li>
                </ul>
             </div>
          </div>
          <div className="flex flex-col justify-center p-12 bg-[#1a1a1a] text-white">
             <div className="space-y-8">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Como Profesional</span>
                <h3 className="text-4xl font-serif italic">Instituciones Justas</h3>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  Desde la ingeniería y lo técnico: construir sistemas que garanticen transparencia y equidad.
                </p>
                <div className="p-6 border border-neutral-800 bg-neutral-900 italic text-neutral-400 text-sm">
                  "Elegir proyectos alineados con la dignidad humana y el desarrollo equitativo."
                </div>
             </div>
          </div>
        </div>
      )
    },
    // Slide 8: Final Reflection
    {
      content: (
        <div className="text-center space-y-12 max-w-3xl">
           <Quote size={60} className="mx-auto text-gray-200" />
           <motion.h2 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="text-4xl md:text-5xl font-serif italic text-gray-900 leading-tight"
           >
             "La mejor herencia que podemos dejarles a nuestros hijos es que sepan que algo hicimos para que Colombia fuera distinta."
           </motion.h2>
           <div className="space-y-4">
             <div className="h-px w-12 bg-gray-900 mx-auto" />
             <p className="text-sm font-mono tracking-widest uppercase text-gray-500">Jesús Abad Colorado</p>
           </div>
           
           <div className="pt-24 text-xs font-mono text-gray-400 uppercase tracking-[0.2em] flex flex-col items-center gap-4">
              <span>Reflexión Final: Coherencia entre el saber, el querer y el actuar.</span>
              <span className="opacity-50">Saber · Querer · Actuar</span>
           </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`presentation-container ${slides[currentSlide].bg || 'bg-[#fdfbf7]'} transition-colors duration-1000`}>
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <motion.div 
          className="h-full bg-gray-900"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 right-8 flex gap-4 z-50">
        <button 
          onClick={prevSlide}
          className="p-4 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md hover:bg-white text-gray-900 transition-all shadow-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-4 rounded-full bg-gray-900 text-white hover:bg-black transition-all shadow-xl flex items-center gap-2 group"
          aria-label="Next slide"
        >
          <span className="text-xs font-mono uppercase tracking-widest pl-2">Siguiente</span>
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full h-full relative">
         <Slide isActive={true} key={currentSlide}>
            {slides[currentSlide].content}
         </Slide>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 left-8 z-50">
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400">
          Slide {currentSlide + 1} <span className="opacity-30">/</span> {slides.length}
        </p>
      </div>

      {/* Decorative Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    </div>
  );
}
