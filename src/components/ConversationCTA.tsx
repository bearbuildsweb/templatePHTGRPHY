import { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

const WHATSAPP_BASE = 'https://wa.me/27680246914';

const CONVERSATION_TOPICS = [
  {
    label: 'Street Couture & Nightfall',
    message: "Hi Eko, I'm interested in booking a Street Couture and Nightfall session (art-directed portraiture & direct-flash nocturne).",
  },
  {
    label: 'Weddings & Celebrations',
    message: "Hi Eko, I'm getting married / celebrating and would love to check your availability and discuss coverage.",
  },
  {
    label: 'Brand & Product Imagery',
    message: "Hi Eko, I'm looking to collaborate on striking, purposeful Brand & Product Imagery.",
  },
  {
    label: 'Family & Little Ones',
    message: "Hi Eko, I'd like to book a Family & Little Ones session to document our connection and story.",
  },
  {
    label: 'Lifestyle',
    message: "Hi Eko, I'd like to book a Lifestyle shoot exploring exceptional spaces, architecture, or destinations.",
  },
];

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}

export default function ConversationCTA() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Allow external triggers to select focus
  useEffect(() => {
    const handleSelectFocus = (e: Event) => {
      const customEvent = e as CustomEvent<{ topic: string }>;
      if (customEvent.detail?.topic) {
        setSelectedTopic(customEvent.detail.topic);
      }
    };
    window.addEventListener('select-booking-focus', handleSelectFocus);
    return () => window.removeEventListener('select-booking-focus', handleSelectFocus);
  }, []);

  const activeTopicObj = selectedTopic ? CONVERSATION_TOPICS.find((t) => t.label === selectedTopic) : null;
  const activeMessage = activeTopicObj
    ? activeTopicObj.message
    : "Hi Eko, I'd like to discuss a shoot with eko PHTGRPHY";

  const whatsappHref = `${WHATSAPP_BASE}?text=${encodeURIComponent(activeMessage)}`;

  return (
    <section
      id="booking"
      className="relative w-full bg-[#111929] text-white py-24 md:py-36 px-6 md:px-12 z-10 border-t border-[#C5A059]/20"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Confident Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif uppercase tracking-tight text-white leading-none mb-10 sm:mb-12">
          START HERE.
        </h2>

        {/* Topic Quick-Selection Focus Tabs */}
        <div className="w-full max-w-4xl mb-10 flex flex-col items-center">
          {/* Recessed Indent Pill / Tab Header (Informational, non-CTA) */}
          <div className="p-[3px] rounded-2xl sm:rounded-full bg-[#121927] shadow-[0_6px_20px_rgba(0,0,0,0.6),inset_0_4px_12px_rgba(0,0,0,0.8),inset_0_-1px_1px_rgba(255,255,255,0.1)] border-t border-[#C5A059]/30 border-b border-black/80 mb-6 max-w-[calc(100vw-3rem)] sm:max-w-none inline-block">
            <div className="flex items-center justify-center px-3 py-1.5 sm:px-5 sm:py-2 rounded-2xl sm:rounded-full bg-[#111929] shadow-[inset_0_5px_12px_rgba(0,0,0,0.6),inset_0_1px_3px_rgba(0,0,0,0.8),inset_0_-1px_2px_rgba(255,255,255,0.12)] border-t border-black/80 border-b border-white/10 select-none">
              <span className="font-sans text-[8.5px] sm:text-[10px] md:text-[11px] text-[#C5A059] font-bold uppercase tracking-[0.12em] sm:tracking-[0.2em] text-center leading-normal">
                LET'S PLAN YOUR SHOOT
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {CONVERSATION_TOPICS.map((topic) => {
              const isSelected = selectedTopic === topic.label;
              return (
                <button
                  key={topic.label}
                  onClick={() => setSelectedTopic(isSelected ? null : topic.label)}
                  className={`group relative font-sans text-xs uppercase tracking-widest px-4 py-2.5 border transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#C5A059] text-[#111929] border-[#C5A059] font-extrabold shadow-[0_0_22px_rgba(197,160,89,0.4)] scale-[1.02]'
                      : 'bg-[#111927] text-white/90 border-[#C5A059]/25 hover:border-[#C5A059] hover:bg-[#162234]'
                  }`}
                >
                  <span>{topic.label}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Focus Prompt Preview */}
          {selectedTopic && (
            <div className="mt-6 text-xs sm:text-sm font-sans text-white max-w-xl mx-auto bg-[#111927] border border-[#C5A059]/40 px-4 sm:px-5 py-3 rounded-md shadow-[0_6px_20px_rgba(0,0,0,0.6)] leading-relaxed text-left flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <span className="shrink-0 inline-flex items-center text-[#C5A059] font-mono font-bold tracking-wider uppercase text-[10px] bg-[#C5A059]/15 border border-[#C5A059]/30 px-2 py-0.5 rounded">
                MESSAGE PREVIEW
              </span>
              <span className="text-[#B3A298] font-normal">"{activeMessage}"</span>
            </div>
          )}
        </div>

        {/* High-Impact Primary WhatsApp CTA - Enabled ONLY when a focus is selected */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {selectedTopic ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              id="main-whatsapp-conversion-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C5A059] hover:bg-[#d6b26d] text-[#111929] hover:text-white font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold px-8 sm:px-10 py-4 sm:py-5 border border-[#C5A059] transition-all duration-300 shadow-[0_10px_30px_rgba(197,160,89,0.3)] active:scale-[0.98] group cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
              <span>START CHAT</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              id="main-whatsapp-conversion-btn"
              aria-disabled="true"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111927]/60 text-white/30 font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-bold px-8 sm:px-10 py-4 sm:py-5 border border-white/10 cursor-not-allowed opacity-60 select-none transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current shrink-0 opacity-40" />
              <span>START CHAT</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </button>
          )}
        </div>

        {/* Upward Arrow Bouncing to Point at the Disabled Start Chat CTA */}
        {!selectedTopic && (
          <div className="mt-7 flex flex-col items-center justify-center animate-bounce select-none pointer-events-none">
            <div className="p-[2.5px] rounded-full bg-[#121927] shadow-[0_6px_20px_rgba(0,0,0,0.6),inset_0_4px_12px_rgba(0,0,0,0.8),inset_0_-1px_1px_rgba(255,255,255,0.1)] border-t border-[#C5A059]/30 border-b border-black/80">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#111929] shadow-[inset_0_5px_12px_rgba(0,0,0,0.6),inset_0_1px_3px_rgba(0,0,0,0.8),inset_0_-1px_2px_rgba(255,255,255,0.12)] border-t border-black/80 border-b border-white/10 text-[#C5A059]"
                aria-label="Select a shoot topic above to enable chat"
              >
                <ArrowUp className="w-5 h-5 stroke-[2.25] text-[#C5A059]" />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
