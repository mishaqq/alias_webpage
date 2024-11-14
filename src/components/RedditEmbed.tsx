import React, { useEffect } from "react";

interface RedditEmbedProps {
  url: string; // Explicitly define the type of 'url' as a string
}
const RedditEmbed: React.FC<RedditEmbedProps> = ({ url }) => {
  useEffect(() => {
    // Dynamically load the Reddit embed script
    const script = document.createElement("script");
    script.src = "https://embed.redditmedia.com/widgets/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="reddit-embed ">
      <blockquote className="reddit-card" data-card-created="true">
        <a href={url}>Reddit Post</a>
      </blockquote>
    </div>
  );
};

export default RedditEmbed;
