import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Instagram } from 'lucide-react';
import bioPortrait from '../assets/images/bio_portrait.jpg';

interface AboutMeProps {
  onBioModalToggle?: (isOpen: boolean) => void;
}

export default function AboutMe({ onBioModalToggle }: AboutMeProps) {
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);

  // Notify parent component of modal open/close state
  useEffect(() => {
    onBioModalToggle?.(isBioModalOpen);
  }, [isBioModalOpen, onBioModalToggle]);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsBioModalOpen(false);
      }
    };

    if (isBioModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isBioModalOpen]);

  return (
    <section 
      id="about" 
      className="relative w-full bg-[#E5E7EA] text-[#1B263B] py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-16 overflow-hidden border-t border-[#1B263B]/20 selection:bg-[#1B263B] selection:text-[#E5E7EA]"
    >
      <div className="max-w-xl mx-auto">
        
        {/* Top Minimalist Header Tag & Hairline */}
        <div className="w-full mb-8 sm:mb-12">
          <span className="block font-sans text-xs sm:text-sm tracking-tight text-[#1B263B]/80 font-bold mb-2 uppercase">
            EKO PHTGRPHY
          </span>
          <div className="w-full h-[1px] bg-[#1B263B]/20" />
        </div>

        {/* Content Block */}
        <div className="relative">
          
          {/* Top Label & Organic Pebble Image Lockup */}
          <div className="relative mb-6 sm:mb-8">
            <div className="flex items-start">
              <span className="font-sans font-bold text-sm sm:text-base md:text-lg text-[#1B263B] tracking-tight mr-4 sm:mr-6 pt-2 shrink-0">
                about EKO
              </span>

              {/* Organic Pebble Image Cutout */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative cursor-pointer group"
                onClick={() => setIsBioModalOpen(true)}
              >
                <div className="w-36 h-40 sm:w-48 sm:h-52 md:w-56 md:h-60 overflow-hidden rounded-[38%_62%_58%_42%/42%_46%_54%_58%] shadow-[0_12px_32px_rgba(27,38,59,0.25)] bg-[#111927] border-2 border-[#1B263B]/40 transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={bioPortrait}
                    alt="eko PHTGRPHY"
                    className="w-full h-full object-cover object-center filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Headline, Intersecting Geometric Circle, and Indented "See More →" Pill */}
          <div className="relative pt-2">
            
            {/* The Geometric Wireframe Circle intersecting right side of headline */}
            <div 
              className="absolute right-[-20px] sm:right-[-40px] md:right-[-60px] top-[40%] -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border border-[#1B263B]/20 pointer-events-none z-0"
              aria-hidden="true"
            />

            {/* Display Typography */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative z-10"
            >
              <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-bold text-[#1B263B] tracking-tight leading-[1.08] mb-8 sm:mb-10">
                Places, people<br />
                & passing<br />
                moments
              </h2>
            </motion.div>

            {/* Indented Tab/Pill Link: "See More →" */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 inline-block"
            >
              {/* Outer Cavity / Recessed Depression */}
              <div className="p-[3px] rounded-full bg-[#1B263B]/10 shadow-[0_6px_20px_rgba(27,38,59,0.15)] border-t border-[#1B263B]/20 border-b border-[#1B263B]/35">
                <button
                  type="button"
                  onClick={() => setIsBioModalOpen(true)}
                  aria-label="Read full biography and artist dossier"
                  className="group relative inline-flex items-center gap-2.5 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#1B263B] hover:bg-[#111927] shadow-[0_4px_16px_rgba(27,38,59,0.3)] border-t border-white/10 border-b border-black/40 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                >
                  <div className="relative flex flex-col">
                    <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.24em] font-bold text-[#C5A059] group-hover:text-white transition-colors pb-0.5">
                      KHOW HIM
                    </span>
                    <span className="relative w-full h-[1.5px] bg-[#C5A059]/30 overflow-hidden block">
                      <motion.span
                        className="absolute top-0 bottom-0 w-full bg-[#C5A059] group-hover:bg-white block shadow-[0_0_6px_rgba(197,160,89,0.8)]"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.8,
                          ease: 'easeInOut',
                        }}
                      />
                    </span>
                  </div>
                  <span className="text-[#C5A059] group-hover:text-white text-xs sm:text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Bio Modal Overlay */}
      <AnimatePresence>
        {isBioModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsBioModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="relative w-full max-w-2xl bg-[#111927] text-white rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] border border-[#C5A059]/40 overflow-hidden z-10 max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Nav Bar */}
              <div className="flex items-center justify-between px-6 py-4 sm:px-8 sm:py-5 border-b border-[#C5A059]/20 bg-[#162132] backdrop-blur-sm shrink-0">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                    BEHIND THE LENS
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsBioModalOpen(false)}
                  className="group flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#C5A059]/70 hover:text-white uppercase transition-colors px-2 py-1 rounded cursor-pointer"
                  aria-label="Close bio modal"
                >
                  <span className="hidden sm:inline">[ CLOSE ]</span>
                  <X className="w-4 h-4 sm:hidden group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="overflow-y-auto px-6 py-6 sm:px-10 sm:py-8 space-y-6">
                
                {/* Header: Photo + Identity Lockup */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-[#C5A059]/20">
                  <div className="w-28 h-32 sm:w-32 sm:h-36 shrink-0 overflow-hidden rounded-[40%_60%_55%_45%/45%_50%_50%_55%] shadow-md bg-[#1B263B] border-2 border-[#C5A059]/40">
                    <img
                      src={bioPortrait}
                      alt="eko PHTGRPHY"
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      eko PHTGRPHY
                    </h3>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#B3A298] mt-2 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Johannesburg, South Africa</span>
                    </div>
                  </div>
                </div>

                {/* Manifesto & Narrative */}
                <div className="space-y-4 text-[#B3A298] leading-relaxed font-normal text-sm sm:text-base">
                  <p>
                    Lereko &ldquo;Eko&rdquo; is a street photographer drawn to the character of places and the people who move through them.
                  </p>
                  <p className="pl-6 sm:pl-8 border-l-2 border-[#C5A059]/50 italic text-[#E0D7D0] my-3 leading-relaxed">
                    From quiet corners to crowded streets, his work is shaped by travel, curiosity and an instinct for the moments that often go unnoticed.
                  </p>
                  <p>
                    His photography is less about directing the scene and more about being present enough to see it.
                  </p>
                </div>

              </div>

              {/* Modal Footer: Instagram CTA */}
              <div className="flex items-center justify-between gap-3 px-6 py-4 sm:px-10 sm:py-5 border-t border-[#C5A059]/20 bg-[#162132] backdrop-blur-sm shrink-0">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>CONNECT ON INSTAGRAM</span>
                </div>

                {/* Indented pill */}
                <div className="p-[3px] rounded-full bg-[#121927] shadow-[inset_0_3px_8px_rgba(0,0,0,0.6),inset_0_-1px_1px_rgba(255,255,255,0.1)] border-t border-[#C5A059]/30 border-b border-black">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Instagram"
                    title="Instagram"
                    className="group relative inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1B263B] hover:bg-[#253552] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] border-t border-black/40 border-b border-white/20 text-[#C5A059] hover:text-white transition-all duration-300 active:scale-[0.96] cursor-pointer"
                  >
                    <Instagram className="w-5 h-5 stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
