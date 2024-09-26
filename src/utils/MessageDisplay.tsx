// MessageDisplay.tsx
import React from 'react';

export function formatContent(content: string) {
  // Replace **bold** with <strong>, _italic_ with <em>, and \n\n with <br /><br />
  const formattedContent = content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Bold formatting **text**
    .replace(/_(.*?)_/g, '<em>$1</em>')                // Italic formatting _text_
    .replace(/\n\n/g, '<br /><br />')                  // Double newlines become two <br />
    .replace(/\n/g, '<br />');                         // Single newline becomes one <br />

  return { __html: formattedContent };  // Return the HTML as an object
}

interface MessageDisplayProps {
  content: string;
}

function MessageDisplay({ content }: MessageDisplayProps) {
  return (
    <div dangerouslySetInnerHTML={formatContent(content)} />
  );
}

export default MessageDisplay;
