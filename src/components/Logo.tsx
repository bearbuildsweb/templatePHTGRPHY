import React from 'react';

export interface LogoProps {
  /**
   * Logo mode:
   * - 'full': Complete formal lockup (eko + PHTGRPHY)
   * - 'monogram': Monogram brand mark
   */
  mode?: 'full' | 'monogram';
  /**
   * Theme variant of the logo
   */
  variant?: 'secondary' | 'accent' | 'light' | 'auto' | 'orange' | 'black' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  ariaLabel?: string;
}

export default function Logo({
  mode = 'full',
  variant = 'auto',
  className = '',
  size = 'md',
  ariaLabel = 'eko PHTGRPHY Logo'
}: LogoProps) {
  // Map variant to color classes
  let mainColorClass = 'text-[#1B263B]';
  let accentColorClass = 'text-[#C5A059]';

  if (variant === 'accent' || variant === 'orange') {
    mainColorClass = 'text-[#C5A059]';
    accentColorClass = 'text-white';
  } else if (variant === 'light' || variant === 'white') {
    mainColorClass = 'text-white';
    accentColorClass = 'text-[#C5A059]';
  } else if (variant === 'secondary' || variant === 'black') {
    mainColorClass = 'text-[#1B263B]';
    accentColorClass = 'text-[#C5A059]';
  }

  // Size scalers
  const textSizes = {
    sm: { brand: 'text-xl sm:text-2xl', sub: 'text-[9px] tracking-[0.24em]' },
    md: { brand: 'text-2xl sm:text-3xl', sub: 'text-[10px] sm:text-[11px] tracking-[0.26em]' },
    lg: { brand: 'text-3xl sm:text-4xl md:text-5xl', sub: 'text-xs sm:text-sm tracking-[0.3em]' },
    xl: { brand: 'text-4xl sm:text-5xl md:text-6xl', sub: 'text-sm sm:text-base tracking-[0.35em]' },
    custom: { brand: '', sub: '' }
  }[size] || { brand: 'text-2xl sm:text-3xl', sub: 'text-[10px] sm:text-[11px] tracking-[0.26em]' };

  if (mode === 'monogram') {
    return (
      <div 
        className={`inline-flex items-center justify-center ${className}`}
        aria-label={ariaLabel}
      >
        <span className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-[#C5A059] bg-[#1B263B] shadow-[0_4px_12px_rgba(27,38,59,0.3)]">
          <span className="font-serif text-sm sm:text-base font-bold lowercase text-white">e</span>
          <span className="font-sans text-[8px] font-extrabold uppercase text-[#C5A059] ml-0.5">k</span>
        </span>
      </div>
    );
  }

  return (
    <div 
      className={`inline-flex items-baseline gap-2 select-none tracking-tight ${className}`}
      aria-label={ariaLabel}
    >
      <span className={`font-serif font-bold lowercase leading-none ${mainColorClass} ${textSizes.brand}`}>
        eko
      </span>
      <span className={`font-sans font-extrabold uppercase leading-none ${accentColorClass} ${textSizes.sub}`}>
        PHTGRPHY
      </span>
    </div>
  );
}

