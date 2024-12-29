import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const SOCIAL_LINKS = [
  {
    icon: Twitter,
    url: 'https://twitter.com/yourusername',
    label: 'Twitter',
  },
  {
    icon: Instagram,
    url: 'https://instagram.com/yourusername',
    label: 'Instagram',
  },
  {
    icon: Github,
    url: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    url: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4 mt-4">
      {SOCIAL_LINKS.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}