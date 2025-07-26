import React from 'react';
import { LinkCard } from './components/LinkCard';
import { Background } from './components/Background';
import { LINKS } from './data/links';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">psenakdotsk (Ján Pšenák)</h1>
        </div>

        <div className="space-y-4">
          {LINKS.map((link, index) => (
            <LinkCard key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}