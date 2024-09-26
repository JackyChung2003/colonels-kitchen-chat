// import React from 'react';
// import { Button } from "@/components/ui/button";

// interface SuggestedPromptsProps {
//   prompts: string[];
//   handleSendMessage: (message: string) => void;
//   isLoading: boolean;
// }

// export const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({ prompts, handleSendMessage, isLoading }) => {
//   return (
//     <div className="flex flex-wrap gap-2">
//       {prompts.map((prompt, index) => (
//         <Button
//           key={index}
//           variant="outline"
//           onClick={() => handleSendMessage(prompt)}
//           disabled={isLoading}
//           className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600"
//         >
//           {prompt}
//         </Button>
//       ))}
//     </div>
//   );
// }
