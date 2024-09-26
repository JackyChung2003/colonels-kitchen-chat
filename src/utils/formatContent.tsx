// // formatContent.js

// export function formatContent(content) {
//     // Replace double newlines with paragraphs
//     const formattedContent = content
//       .split('\n\n')
//       .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br />')}</p>`)
//       .join('');
    
//     return { __html: formattedContent }; // Return HTML as an object for dangerouslySetInnerHTML
//   }
  