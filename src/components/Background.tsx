import React from 'react';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-[#0f9b0f]" />
    </div>
  );
}