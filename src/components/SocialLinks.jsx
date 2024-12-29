import { LINKS } from "../data/links";
import { LinkCard } from "./LinkCard";
import React from "react";

export function SocialLinks() {
  return (
    <div className="flex gap-4 mt-4">
      {LINKS.map(({ title, description, icon: Icon, url }, index) => (
        <LinkCard 
          key={index}
          title={title} 
          description={description} 
          Icon={Icon} 
          url={url} 
        />
      ))}
    </div>
  );
}
