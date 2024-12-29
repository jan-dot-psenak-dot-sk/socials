import { ExternalLink, LucideIcon } from 'lucide-react';
import React from 'react';

interface LinkCardProps {
  title: string;
  url: string;
  description?: string;
  icon?: LucideIcon;
}

export function LinkCard({ title, url, description, icon: Icon }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200 flex items-center justify-between group"
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <Icon className="w-5 h-5 text-white group-hover:text-white transition-colors" />
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
      <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
    </a>
  );
}