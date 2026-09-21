import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const activeProject = activeProjectIndex !== null ? PROJECTS[activeProjectIndex] : null;

  const handleNextProject = useCallback(() => {
    if (activeProjectIndex === null) return;
    setActiveProjectIndex((prev) => ((prev! + 1) % PROJECTS.length));
  }, [activeProjectIndex]);

  const handlePrevProject = useCallback(() => {
    if (activeProjectIndex === null) return;
    setActiveProjectIndex((prev) => ((prev! - 1 + PROJECTS.length) % PROJECTS.length));
  }, [activeProjectIndex]);

  // Lock body scroll and keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProjectIndex(null);
      if (e.key === 'ArrowRight') handleNextProject();
      if (e.key === 'ArrowLeft') handlePrevProject();
    };

    if (activeProjectIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProjectIndex, handleNextProject, handlePrevProject]);

  const p1 = PROJECTS[0]; // Street Couture and Nightfall
  const p2 = PROJECTS[1]; // Weddings & celebrations
  const p3 = PROJECTS[2]; // BRAND & PRODUCT IMAGERY
  const p4 = PROJECTS[3]; // Family & Little ones
  const p5 = PROJECTS[4]; // Lifestyle

  return (
    <section 
      id="portfolio" 
      className="relative w-full bg-[#111929] text-white py-24 sm:py-32 md:py-44 px-6 sm:px-10 md:px-16 z-10 border-t border-[#C5A059]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-28 sm:space-y-36 md:space-y-48">
        
        {/* ==================================================================== */}
        {/* SPREAD 01: Lead Editorial Feature & Integrated Section Title         */}
        {/* Street Couture and Nightfall + "What catches my eye"                 */}
        {/* ==================================================================== */}
        {p1 && (
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
              
              {/* Left Column: Asymmetric Editorial Masthead Lockup */}
              <motion.div 
                className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Integrated Cursive Title: Intimate, highly legible editorial accent */}
                <div className="mb-6 sm:mb-8">
                  <h2
                    className="font-cursive text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] tracking-normal font-normal select-none"
                    style={{ 
                      fontFamily: "'Allura', 'Alex Brush', 'Parisienne', cursive",
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    <span className="block text-white">“What catches</span>
                    <span className="block pl-6 sm:pl-10 text-[#C5A059]">my eye”</span>
                  </h2>
                </div>

                {/* Elevated "Posted Note" Segment for Street Couture and Nightfall */}
                <div
                  onClick={() => setActiveProjectIndex(0)}
                  className="relative group/note cursor-pointer bg-gradient-to-b from-[#162234] to-[#101826] border border-[#C5A059]/35 border-t-[#C5A059]/60 rounded-md p-6 sm:p-7 shadow-[0_16px_36px_rgba(0,0,0,0.55),0_4px_14px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(0,0,0,0.65),0_6px_18px_rgba(0,0,0,0.45)] -rotate-[0.6deg] hover:rotate-0 max-w-lg"
                >
                  {/* Archival Frosted Washi Tape Strip */}
                  <div 
                    className="absolute -top-2.5 left-7 w-16 h-3.5 bg-white/15 backdrop-blur-md border-t border-b border-white/30 rounded-[1px] shadow-[0_2px_5px_rgba(0,0,0,0.3)] -rotate-1 pointer-events-none" 
                    aria-hidden="true"
                  />

                  {/* Top Meta Line: Index */}
                  <div className="flex items-center justify-end mb-4">
                    <span className="text-[#C5A059]/80 text-xs font-mono font-bold select-none">
                      01 / 05
                    </span>
                  </div>

                  {/* Monumental Architectural Project Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight mb-6 uppercase leading-tight group-hover/note:text-[#FAF8F5] transition-colors">
                    {p1.title}
                  </h3>

                  {/* Tactile Editorial Action */}
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C5A059] group-hover/note:text-white transition-colors font-bold">
                    <span>EXPLORE EXHIBIT</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A059] group-hover/note:text-white transition-transform duration-300 group-hover/note:translate-x-0.5 group-hover/note:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Expansive Framed Museum Artwork */}
              <motion.div 
                className="lg:col-span-7 group cursor-pointer order-1 lg:order-2"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveProjectIndex(0)}
              >
                <div className="relative">
                  {/* Subtle Archival Corner Brackets */}
                  <div className="absolute -top-2.5 -left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#C5A059] z-30 pointer-events-none transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                  <div className="absolute -top-2.5 -right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#C5A059] z-30 pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="absolute -bottom-2.5 -left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#C5A059] z-30 pointer-events-none transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />
                  <div className="absolute -bottom-2.5 -right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#C5A059] z-30 pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

                  {/* Museum Matting Frame with Direct-Flash Contrast Image */}
                  <div className="relative w-full aspect-[16/10] bg-white p-2.5 sm:p-3.5 border-4 border-white shadow-[0_20px_50px_rgba(17,25,41,0.25)] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                    <div className="relative w-full h-full overflow-hidden bg-[#111929]">
                      <motion.img 
                        src={p1.image} 
                        alt={p1.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* SPREAD 02: High-Fashion Asymmetrical Diptych                         */}
        {/* Weddings & celebrations + BRAND & PRODUCT IMAGERY                    */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-20 items-start">
          
          {/* Left Diptych Frame: Weddings & celebrations (Vertical 4:5 portrait) */}
          {p2 && (
            <motion.div 
              className="lg:col-span-5 flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              onClick={() => setActiveProjectIndex(1)}
            >
              <div className="relative">
                {/* Archival Corner Accents */}
                <div className="absolute -top-2 -left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C5A059] z-20 pointer-events-none" />
                <div className="absolute -bottom-2 -right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C5A059] z-20 pointer-events-none" />

                <div className="relative w-full aspect-[4/5] bg-white p-2.5 sm:p-3 border-4 border-white shadow-[0_20px_50px_rgba(17,25,41,0.2)] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                  <div className="relative w-full h-full overflow-hidden bg-[#111929]">
                    <motion.img 
                      src={p2.image} 
                      alt={p2.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>

              {/* Elevated "Posted Note" Segment for Weddings & Celebrations */}
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProjectIndex(1);
                }}
                className="relative group/note mt-6 bg-gradient-to-b from-[#162234] to-[#101826] border border-[#C5A059]/35 border-t-[#C5A059]/60 rounded-md p-5 sm:p-6 shadow-[0_16px_36px_rgba(0,0,0,0.55),0_4px_14px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(0,0,0,0.65)] -rotate-[0.6deg] hover:rotate-0 cursor-pointer"
              >
                {/* Archival Frosted Washi Tape Strip */}
                <div 
                  className="absolute -top-2.5 left-6 w-14 h-3.5 bg-white/15 backdrop-blur-md border-t border-b border-white/30 rounded-[1px] shadow-[0_2px_5px_rgba(0,0,0,0.3)] -rotate-1 pointer-events-none" 
                  aria-hidden="true"
                />

                <div className="flex items-center justify-end mb-3">
                  <span className="text-[#C5A059]/80 text-xs font-mono font-bold select-none">
                    02 / 05
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight mb-5 uppercase leading-tight group-hover/note:text-[#FAF8F5] transition-colors">
                  {p2.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-[#C5A059] group-hover/note:text-white transition-colors font-bold">
                  <span>EXPLORE EXHIBIT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059] group-hover/note:text-white transition-transform duration-300 group-hover/note:translate-x-0.5 group-hover/note:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Right Diptych Frame: BRAND & PRODUCT IMAGERY (Horizontal 16:10 frame offset higher) */}
          {p3 && (
            <motion.div 
              className="lg:col-span-7 flex flex-col group cursor-pointer lg:pt-14"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
              onClick={() => setActiveProjectIndex(2)}
            >
              <div className="relative">
                {/* Archival Corner Accents */}
                <div className="absolute -top-2 -right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C5A059] z-20 pointer-events-none" />
                <div className="absolute -bottom-2 -left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C5A059] z-20 pointer-events-none" />

                <div className="relative w-full aspect-[16/10] bg-white p-2.5 sm:p-3.5 border-4 border-white shadow-[0_20px_50px_rgba(17,25,41,0.2)] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                  <div className="relative w-full h-full overflow-hidden bg-[#111929]">
                    <motion.img 
                      src={p3.image} 
                      alt={p3.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>

              {/* Elevated "Posted Note" Segment for Brand & Product Imagery */}
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProjectIndex(2);
                }}
                className="relative group/note mt-6 bg-gradient-to-b from-[#162234] to-[#101826] border border-[#C5A059]/35 border-t-[#C5A059]/60 rounded-md p-5 sm:p-6 shadow-[0_16px_36px_rgba(0,0,0,0.55),0_4px_14px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(0,0,0,0.65)] rotate-[0.5deg] hover:rotate-0 cursor-pointer"
              >
                {/* Archival Frosted Washi Tape Strip */}
                <div 
                  className="absolute -top-2.5 right-6 w-14 h-3.5 bg-white/15 backdrop-blur-md border-t border-b border-white/30 rounded-[1px] shadow-[0_2px_5px_rgba(0,0,0,0.3)] rotate-1 pointer-events-none" 
                  aria-hidden="true"
                />

                <div className="flex items-center justify-end mb-3">
                  <span className="text-[#C5A059]/80 text-xs font-mono font-bold select-none">
                    03 / 05
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight mb-5 uppercase leading-tight group-hover/note:text-[#FAF8F5] transition-colors">
                  {p3.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-[#C5A059] group-hover/note:text-white transition-colors font-bold">
                  <span>EXPLORE EXHIBIT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059] group-hover/note:text-white transition-transform duration-300 group-hover/note:translate-x-0.5 group-hover/note:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          )}

        </div>

        {/* ==================================================================== */}
        {/* SPREAD 03: The Intimate Offset                                      */}
        {/* Family & Little ones                                                 */}
        {/* ==================================================================== */}
        {p4 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
            
            {/* Text & Narrative Column (Offset on Left) */}
            <motion.div 
              className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {/* Elevated "Posted Note" Segment for Family & Little Ones */}
              <div 
                onClick={() => setActiveProjectIndex(3)}
                className="relative group/note cursor-pointer bg-gradient-to-b from-[#162234] to-[#101826] border border-[#C5A059]/35 border-t-[#C5A059]/60 rounded-md p-6 sm:p-7 shadow-[0_16px_36px_rgba(0,0,0,0.55),0_4px_14px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(0,0,0,0.65),0_6px_18px_rgba(0,0,0,0.45)] -rotate-[0.6deg] hover:rotate-0 max-w-lg"
              >
                {/* Archival Frosted Washi Tape Strip */}
                <div 
                  className="absolute -top-2.5 left-7 w-16 h-3.5 bg-white/15 backdrop-blur-md border-t border-b border-white/30 rounded-[1px] shadow-[0_2px_5px_rgba(0,0,0,0.3)] -rotate-1 pointer-events-none" 
                  aria-hidden="true"
                />

                <div className="flex items-center justify-end mb-4">
                  <span className="text-[#C5A059]/80 text-xs font-mono font-bold select-none">
                    04 / 05
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight mb-6 uppercase leading-tight group-hover/note:text-[#FAF8F5] transition-colors">
                  {p4.title}
                </h3>

                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C5A059] group-hover/note:text-white transition-colors font-bold">
                  <span>EXPLORE EXHIBIT</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A059] group-hover/note:text-white transition-transform duration-300 group-hover/note:translate-x-0.5 group-hover/note:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>

            {/* Artwork Frame (Warm 4:3 Museum Frame on Right) */}
            <motion.div 
              className="lg:col-span-7 order-1 lg:order-2 group cursor-pointer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveProjectIndex(3)}
            >
              <div className="relative">
                <div className="absolute -top-2 -right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C5A059] z-20 pointer-events-none" />
                <div className="absolute -bottom-2 -left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C5A059] z-20 pointer-events-none" />

                <div className="relative w-full aspect-[4/3] bg-white p-2.5 sm:p-3.5 border-4 border-white shadow-[0_20px_50px_rgba(17,25,41,0.2)] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                  <div className="relative w-full h-full overflow-hidden bg-[#111929]">
                    <motion.img 
                      src={p4.image} 
                      alt={p4.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        )}

        {/* ==================================================================== */}
        {/* SPREAD 04: The Runway Letterbox                                      */}
        {/* Lifestyle (Panoramic 21:9 Spread)                                    */}
        {/* ==================================================================== */}
        {p5 && (
          <motion.div 
            className="group cursor-pointer flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setActiveProjectIndex(4)}
          >
            <div className="relative">
              {/* Corner Accents on Expansive Letterbox Frame */}
              <div className="absolute -top-2.5 -left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#C5A059] z-20 pointer-events-none" />
              <div className="absolute -top-2.5 -right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#C5A059] z-20 pointer-events-none" />
              <div className="absolute -bottom-2.5 -left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#C5A059] z-20 pointer-events-none" />
              <div className="absolute -bottom-2.5 -right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#C5A059] z-20 pointer-events-none" />

              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-white p-2.5 sm:p-4 border-4 border-white shadow-[0_25px_60px_rgba(17,25,41,0.25)] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                <div className="relative w-full h-full overflow-hidden bg-[#111929]">
                  <motion.img 
                    src={p5.image} 
                    alt={p5.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  />
                </div>
              </div>
            </div>

            {/* Editorial Caption Bar: Elevated Posted Note */}
            <div 
              onClick={(e) => {
                e.stopPropagation();
                setActiveProjectIndex(4);
              }}
              className="relative group/note mt-8 bg-gradient-to-b from-[#162234] to-[#101826] border border-[#C5A059]/35 border-t-[#C5A059]/60 rounded-md p-5 sm:p-6 shadow-[0_16px_36px_rgba(0,0,0,0.55),0_4px_14px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(0,0,0,0.65)] -rotate-[0.3deg] hover:rotate-0 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              {/* Archival Frosted Washi Tape Strip */}
              <div 
                className="absolute -top-2.5 left-8 w-16 h-3.5 bg-white/15 backdrop-blur-md border-t border-b border-white/30 rounded-[1px] shadow-[0_2px_5px_rgba(0,0,0,0.3)] -rotate-1 pointer-events-none" 
                aria-hidden="true"
              />

              <div className="flex items-baseline gap-4">
                <span className="text-[#C5A059]/80 text-xs font-mono font-bold select-none">
                  05 / 05
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold uppercase tracking-tight group-hover/note:text-[#FAF8F5] transition-colors">
                  {p5.title}
                </h3>
              </div>

              <div className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-[#C5A059] group-hover/note:text-white transition-colors font-bold">
                <span>EXPLORE EXHIBIT</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059] group-hover/note:text-white transition-transform duration-300 group-hover/note:translate-x-0.5 group-hover/note:-translate-y-0.5" />
              </div>
            </div>
          </motion.div>
        )}

      </div>

      {/* ==================================================================== */}
      {/* Lightbox Modal: Interactive Museum Gallery Proof-Sheet               */}
      {/* ==================================================================== */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#111929]/98 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 md:p-10 select-none text-white"
            onClick={() => setActiveProjectIndex(null)}
          >
            {/* Top Bar: Title, Index & Close */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-[#C5A059]/20">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#C5A059]">
                  0{(activeProjectIndex! + 1)} / 0{PROJECTS.length}
                </span>
                <span className="font-serif text-white font-bold text-base sm:text-lg uppercase tracking-wide">
                  {activeProject.title}
                </span>
              </div>

              <button 
                onClick={() => setActiveProjectIndex(null)}
                className="flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Central Artwork with Navigation Chevrons */}
            <div className="flex-1 w-full flex items-center justify-between px-2 sm:px-6 relative" onClick={(e) => e.stopPropagation()}>
              
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrevProject}
                className="p-3 text-[#C5A059] hover:text-white transition-colors rounded-full hover:bg-white/10 cursor-pointer hidden sm:block"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Artwork Container */}
              <div className="relative p-2.5 sm:p-4 bg-white border-4 border-white shadow-2xl max-w-full max-h-[80vh] flex flex-col items-center mx-auto">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] sm:max-h-[70vh] w-auto max-w-[85vw] object-contain"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNextProject}
                className="p-3 text-[#C5A059] hover:text-white transition-colors rounded-full hover:bg-white/10 cursor-pointer hidden sm:block"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Bottom Keyboard Guide */}
            <div className="w-full flex items-center justify-between text-[11px] font-mono text-[#B3A298] pt-3 border-t border-[#C5A059]/20">
              <span className="hidden sm:inline">USE ← / → KEYS TO NAVIGATE</span>
              <span className="ml-auto">PRESS ESC TO CLOSE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
