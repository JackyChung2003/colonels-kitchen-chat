// import React from 'react';
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Loader2 } from "lucide-react";

// interface ChatMessageProps {
//   role: string;
//   content: string;
//   isLoading?: boolean;
// }

// export const ChatMessage: React.FC<ChatMessageProps> = ({ role, content, isLoading }) => {
//   return (
//     <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
//       <div className={`flex items-start max-w-[80%] ${role === 'user' ? 'flex-row-reverse' : ''}`}>
//         <Avatar className="w-8 h-8 mr-2">
//           <AvatarImage src={role === 'user' ? '/user-avatar.png' : '/yann-lecun-avatar.png'} />
//           <AvatarFallback>{role === 'user' ? 'U' : 'YL'}</AvatarFallback>
//         </Avatar>
//         <div className={`p-3 rounded-lg ${
//           role === 'user' 
//             ? 'bg-blue-600 text-white' 
//             : 'bg-gray-700 text-gray-200'
//         }`}>
//           {isLoading ? (
//             <div className="flex items-center space-x-2">
//               <Loader2 className="h-4 w-4 animate-spin" />
//               <span>Thinking...</span>
//             </div>
//           ) : (
//             content
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
