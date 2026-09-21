import React from 'react';

// Precision vector path for the on-brand Playfair Display / haute editorial serif letter 'E'
// Centered at (256, 256) inside a 512x512 canvas
export const EKO_E_GLYPH_PATH =
  'M354.10 111Q352.46 125.34 351.85 138.85Q351.23 152.37 351.23 159.33Q351.23 166.71 351.64 173.46Q352.05 180.22 352.46 184.73L343.04 184.73Q340.58 160.56 336.08 146.43Q331.57 132.30 320.72 126.36Q309.86 120.42 288.15 120.42L254.16 120.42Q240.23 120.42 233.06 122.67Q225.89 124.93 223.44 132.09Q220.98 139.26 220.98 154.42L220.98 357.58Q220.98 372.33 223.44 379.70Q225.89 387.07 233.06 389.33Q240.23 391.58 254.16 391.58L284.06 391.58Q309.86 391.58 323.18 384.62Q336.49 377.65 342.43 361.88Q348.37 346.11 351.23 319.08L360.65 319.08Q359.43 330.14 359.43 348.57Q359.43 356.35 360.04 370.89Q360.65 385.44 362.29 401Q341.40 400.18 315.19 399.98Q288.97 399.77 268.49 399.77Q259.48 399.77 245.35 399.77Q231.22 399.77 214.83 399.98Q198.45 400.18 181.66 400.39Q164.86 400.59 149.71 401L149.71 392.81Q163.63 391.99 170.80 389.53Q177.97 387.07 180.43 379.70Q182.89 372.33 182.89 357.58L182.89 154.42Q182.89 139.26 180.43 132.09Q177.97 124.93 170.80 122.26Q163.63 119.60 149.71 119.19L149.71 111Q164.86 111.41 181.66 111.61Q198.45 111.82 214.83 112.02Q231.22 112.23 245.35 112.23Q259.48 112.23 268.49 112.23Q287.33 112.23 311.30 112.02Q335.26 111.82 354.10 111M208.69 251.08L283.65 251.08Q283.65 251.08 283.65 255.18Q283.65 259.28 283.65 259.28L208.69 259.28Q208.69 259.28 208.69 255.18Q208.69 251.08 208.69 251.08M286.11 197.02L295.53 197.02Q293.89 220.36 294.09 232.65Q294.30 244.94 294.30 255.18Q294.30 265.42 294.71 277.71Q295.12 290 296.76 313.34L287.33 313.34Q285.70 300.24 283.44 287.74Q281.19 275.25 273.61 267.26Q266.04 259.28 248.01 259.28L248.01 251.08Q261.53 251.08 268.70 245.56Q275.87 240.03 279.14 231.42Q282.42 222.82 283.65 213.61Q284.88 204.39 286.11 197.02';

export interface BrandMarkEProps {
  className?: string;
  idSuffix?: string;
}

export default function BrandMarkE({
  className = 'w-full h-full',
  idSuffix = 'default',
}: BrandMarkEProps) {
  const goldGradId = `brandEkoGold_${idSuffix}`;
  const haloGradId = `brandEkoHalo_${idSuffix}`;
  const shadowFilterId = `brandEkoShadow_${idSuffix}`;

  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="eko PHTGRPHY Monogram"
    >
      <defs>
        {/* Rich Metallic Champagne Gold Gradient */}
        <linearGradient id={goldGradId} x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#F7E5B5" />
          <stop offset="28%" stopColor="#DFBA70" />
          <stop offset="55%" stopColor="#C5A059" />
          <stop offset="80%" stopColor="#E8CD8C" />
          <stop offset="100%" stopColor="#96722C" />
        </linearGradient>

        {/* Ambient Warm Center Halo Glow */}
        <radialGradient id={haloGradId} cx="50%" cy="50%" r="48%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.22" />
          <stop offset="60%" stopColor="#C5A059" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
        </radialGradient>

        {/* Archival Depth & Drop Shadow */}
        <filter id={shadowFilterId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#000000" floodOpacity="0.65" />
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#C5A059" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Internal ambient radial gold glow behind letter */}
      <circle cx="256" cy="256" r="205" fill={`url(#${haloGradId})`} />

      {/* Haute Couture Serif E Vector */}
      <g filter={`url(#${shadowFilterId})`}>
        <path d={EKO_E_GLYPH_PATH} fill={`url(#${goldGradId})`} />
      </g>
    </svg>
  );
}
