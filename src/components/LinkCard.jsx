import React from 'react';

export function LinkCard({ title, url, description, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200 flex items-center justify-between group"
    >
      <div className="flex items-center gap-3">
        {false && (
          <img
            src={icon.svg}
            alt={`${title} icon`}
            className="w-5 h-5 text-white group-hover:text-white transition-colors"
          />
        )}
        <div>
          <h3 className="font-semibold text-white group-hover:text-white transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-white/80 mt-1">{description}</p>
          )}
        </div>
      </div>
      {url ? <img className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-external-link'%3E%3Cpath d='M15 3h6v6'/%3E%3Cpath d='M10 14 21 3'/%3E%3Cpath d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/%3E%3C/svg%3E" /> : null}
    </a>
  );
}