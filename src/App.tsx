/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import ConversationCTA from './components/ConversationCTA';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bioModalOpen, setBioModalOpen] = useState(false);

  return (
    <>
      <div className="relative min-h-screen bg-[#111929] text-white overflow-x-hidden selection:bg-[#C5A059] selection:text-[#111929]">
        {/* Stage 1: Arrive (Cinematic, focused Hero) */}
        <Hero
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        {/* Stage 2 & 3: Experience & Explore (Selected Archival Works) */} 
        <Portfolio /> 

        {/* Stage 3.5: About Me (Editorial Artist Profile inspired by reference) */}
        <AboutMe onBioModalToggle={setBioModalOpen} />

        {/* Stage 4: Convert (Direct WhatsApp Conversation Initiation) */}
        <ConversationCTA /> 
        
        {/* Editorial Brand Footer */}
        <Footer /> 
      </div>

      {/* Native Brand Floating WhatsApp Widget (hidden when collapsible nav menu or bio modal is open) */}
      <WhatsAppWidget isHidden={menuOpen || bioModalOpen} />
    </>
  );
}
