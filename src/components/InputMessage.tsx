// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Loader2 } from "lucide-react";

// interface InputMessageProps {
//   handleSendMessage: (message: string) => void;
//   isLoading: boolean;
// }

// export const InputMessage: React.FC<InputMessageProps> = ({ handleSendMessage, isLoading }) => {
//   const [inputMessage, setInputMessage] = useState('');

//   const sendMessage = () => {
//     handleSendMessage(inputMessage);
//     setInputMessage('');
//   }

//   return (
//     <div className="flex space-x-2">
//       <Input
//         type="text"
//         value={inputMessage}
//         onChange={(e) => setInputMessage(e.target.value)}
//         placeholder="Type your message..."
//         onKeyPress={(e) => e.key === 'Enter' && !isLoading && sendMessage()}
//         className="flex-grow bg-gray-700 text-gray-200 border-gray-600 placeholder-gray-400"
//         disabled={isLoading}
//       />
//       <Button 
//         onClick={sendMessage}
//         disabled={isLoading}
//         className="bg-blue-600 text-white hover:bg-blue-700"
//       >
//         {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Send'}
//       </Button>
//     </div>
//   );
// }
