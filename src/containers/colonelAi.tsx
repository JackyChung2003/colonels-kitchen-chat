// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import { Loader2 } from "lucide-react";
// import { ClipLoader } from "react-spinners";
// import "./colonelAi.css";

// const suggestionPrompts = [
//     "What's your opinion on AGI?",
//     "Do you hate Elon Musk?",
//     "How do you see the future of AI evolving?",
//     "What are your thoughts on the current state of deep learning?",
//     "What do you think about Andrej Karpathy?",
//   ];
// // 0x9b829bf1e151def03532ab355cdfe5cee001f4b0
// // 0xb4020f2d82c62b376ed7aa8b105c84b9efb9aff3
// const apiUrl = 'https://0xb4020f2d82c62b376ed7aa8b105c84b9efb9aff3.us.gaianet.network/v1/chat/completions';

// function ColonelAi() {
//   const [messages, setMessages] = useState<{ role: string; content: string; isLoading?: boolean }[]>([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSendMessage = async (message: string) => {
//     if (!message.trim()) return;

//     setIsLoading(true);
//     const newMessages = [
//       ...messages,
//       { role: 'user', content: message },
//       { role: 'assistant', content: '', isLoading: true }
//     ];
//     setMessages(newMessages);
//     setInputMessage('');

//     try {
//       const systemPrompt = `You are Colonel Sanders AI. Respond with humor and insight on KFC history, cooking, and life lessons.`;
//       const response = await axios.post(apiUrl, {
//         messages: [
//           { role: "system", content: systemPrompt },
//           { role: "user", content: message }
//         ]
//       }, {
//         headers: {
//           'accept': 'application/json',
//           'Content-Type': 'application/json'
//         }
//       });

//       if (response.data?.choices?.length > 0) {
//         const aiResponse = response.data.choices[0].message.content;
//         setMessages((prev) => [
//           ...prev.slice(0, -1),
//           { role: 'assistant', content: aiResponse }
//         ]);
//       } else {
//         throw new Error('No response content found');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setMessages((prev) => [
//         ...prev.slice(0, -1),
//         { role: 'assistant', content: "Well, butter my biscuit! I couldn't cook up a response for you this time. Try askin' again, partner!" }
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     const scrollArea = document.querySelector('.scroll-area');
//     if (scrollArea) {
//       scrollArea.scrollTop = scrollArea.scrollHeight;
//     }
//   }, [messages]);
// //   const [query, setQuery] = useState('');
// //   const [response, setResponse] = useState('');

// //   // Function to send query to the GaiaNet node
// //   const handleSubmit = async () => {
// //     const res = await fetch('http://0xb4020f2d82c62b376ed7aa8b105c84b9efb9aff3:8080/api/v1/chat', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({ query }),
// //     });

// //     const data = await res.json();
// //     setResponse(data.response);
// //   };

// //   return (
// //     <div className="chat-container">
// //       <h1>Ask the Colonel</h1>
// //       <div className="chat-box">
// //         <input
// //           type="text"
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           placeholder="Ask Colonel Sanders anything..."
// //         />
// //         <button onClick={handleSubmit}>Ask</button>
// //       </div>
// //       {response && (
// //         <div className="response">
// //           <h3>Colonel's Response:</h3>
// //           <p>{response}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
//     return (
//     <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
//       <header className="bg-gray-800 shadow-md">
//         <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-2xl font-bold text-gray-100">Chat with Colonel Sanders AI</h1>
//         </div>
//       </header>
//       <main className="flex-grow max-w-4xl w-full mx-auto p-4">
//         {/* Suggested Prompts */}
//         <div className="mb-4 bg-gray-800 border-gray-700 p-4">
//           <h2 className="text-lg font-semibold mb-2 text-gray-200">Suggested Topics</h2>
//           <div className="flex flex-wrap gap-2">
//             {suggestionPrompts.map((prompt, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleSendMessage(prompt)}
//                 disabled={isLoading}
//                 className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600 p-2 rounded"
//               >
//                 {prompt}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Chat Box */}
//         <div className="mb-4 bg-gray-800 border-gray-700 p-4 h-96 overflow-y-auto scroll-area">
//           {messages.map((message, index) => (
//             <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
//               <div className={`p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
//                 {message.isLoading ? (                                                                                                                                                  
//                   <div className="flex items-center space-x-2">
//                     <ClipLoader size={24} color="#ffffff" />
//                     <span>Thinking...</span>
//                   </div>
//                 ) : (
//                   message.content
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Input Area */}
//         <div className="flex space-x-2">
//           <input
//             type="text"
//             value={inputMessage}
//             onChange={(e) => setInputMessage(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-grow bg-gray-700 text-gray-200 border-gray-600 placeholder-gray-400 p-2 rounded"
//             onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage(inputMessage)}
//             disabled={isLoading}
//           />
//           <button 
//             onClick={() => handleSendMessage(inputMessage)} 
//             disabled={isLoading}
//             className="bg-blue-600 text-white hover:bg-blue-700 p-2 rounded"
//           >
//             {isLoading ? <ClipLoader size={16} color="#ffffff" /> : 'Send'}
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ColonelAi;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipLoader } from "react-spinners";
import './colonelAi.css';
import ChickenRecipeProfile from '../assets/Images/chicken recipi.webp';

// import openai from 'openai';

// Define profile images for each type of response
const profiles = {
  general: ChickenRecipeProfile, // Default avatar
  wisdom: ChickenRecipeProfile,   // Wisdom avatar
  recipe: ChickenRecipeProfile,     // Recipe avatar
  chickenSound: ChickenRecipeProfile, // Fun avatar'
  user: ChickenRecipeProfile, // User avatar
};

const suggestionPrompts = [
  "What's your opinion on AGI?",
  "Do you hate Elon Musk?",
  "How do you see the future of AI evolving?",
  "What are your thoughts on deep learning?",
  "What do you think about Andrej Karpathy?",
];

const apiUrl = 'https://0xb4020f2d82c62b376ed7aa8b105c84b9efb9aff3.us.gaianet.network/v1/chat/completions';

function ColonelAi() {
  // const [messages, setMessages] = useState<{ role: string; content: string; isLoading?: boolean }[]>([]);
  const [messages, setMessages] = useState<{ role: string; content: string; profile: string; isLoading?: boolean }[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    setIsLoading(true);
    // const newMessages = [
    //   ...messages,
    //   { role: 'user', content: message },
    //   { role: 'assistant', content: '', isLoading: true }
    // ];
    const newMessages = [
      ...messages,
      // { role: 'user', content: message, profile: profiles.general },
      // { role: 'assistant', content: '', isLoading: true, profile: profiles.general }
      { role: 'user', content: message, profile: profiles.user },  // User's message with user profile
      { role: 'assistant', content: '', isLoading: true, profile: profiles.general }  // Loading state for AI
    ];
    setMessages(newMessages);
    setInputMessage('');

    try {
      const systemPrompt = `You are Colonel Sanders AI. Respond with humor and insight on KFC history, cooking, and life lessons.`;
      const response = await axios.post(apiUrl, {
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ]
      }, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.data?.choices?.length > 0) {
        const aiResponse = response.data.choices[0].message.content;
        // setMessages((prev) => [
        //   ...prev.slice(0, -1),
        //   { role: 'assistant', content: aiResponse }
        // ]);
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: 'assistant', content: aiResponse, profile: profiles.general } // Default profile for general response
        ]);
      } else {
        throw new Error('No response content found');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: "Well, butter my biscuit! I couldn't cook up a response for you this time. Try again, partner!", profile: profiles.general }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to the bottom of chat on new message
  useEffect(() => {
    const scrollArea = document.querySelector('.scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages]);

  // Fun features: play chicken sound, show daily wisdom, suggest recipes
  const handlePlayChickenSound = () => {
    // const audio = new Audio('/chicken-cluck.mp3');
    // audio.play();
    const audio = new Audio('/chicken-cluck.mp3');
    audio.play();
    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: "Chicken sound played!", profile: profiles.chickenSound }
    ]);
  };

  const handleDailyWisdom = () => {
    const wisdoms = [
      "Well butter my biscuit, patience is the secret ingredient in life!",
      "You don’t need a silver fork to eat good chicken!",
      "Life is too short for bad chicken, fry with love!",
      "The secret’s always in the spices!"
    ];
    const wisdom = wisdoms[Math.floor(Math.random() * wisdoms.length)];
    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: wisdom, profile: profiles.wisdom }
    ]);
  };

  const handleRecipeSuggestion = () => {
    const recipes = [
      "Classic Southern Fried Chicken",
      "Buttermilk Fried Chicken with Gravy",
      "KFC-style Spicy Chicken Wings",
      "Colonel’s Special Mashed Potatoes"
    ];
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    // alert(`Why not try making: ${randomRecipe}`);
    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: `Why not try making: ${randomRecipe}`, profile: profiles.recipe }
    ]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow-md">
        <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-100">Chat with Colonel Sanders AI</h1>
        </div>
      </header>
      <main className="flex-grow max-w-4xl w-full mx-auto p-4">
        {/* Suggested Prompts */}
        <div className="mb-4 bg-gray-800 border-gray-700 p-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-200">Suggested Topics</h2>
          <div className="flex flex-wrap gap-2">
            {suggestionPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(prompt)}
                disabled={isLoading}
                className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600 p-2 rounded"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Box */}
        <div className="mb-4 bg-gray-800 border-gray-700 p-4 h-96 overflow-y-auto scroll-area">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
              
              {/* Display profile image next to each message */}
              {message.role === 'assistant' && (
                <img src={message.profile} alt="AI profile" className="w-8 h-8 rounded-full mr-2" />
              )}
        
              <div className={`p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                {message.isLoading ? (
                  <div className="flex items-center space-x-2">
                    <ClipLoader size={24} color="#ffffff" />
                    <span>Thinking...</span>
                  </div>
                ) : (
                  message.content
                )}
              </div>
              
              {/* User profile image displayed on the right side */}
              {message.role === 'user' && (
                <img src={message.profile} alt="User profile" className="w-8 h-8 rounded-full ml-2" />
              )}
            </div>
          ))}
        </div>


        {/* More Section */}
        <div className="mb-4 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-lg font-semibold mb-2 text-gray-200">More Fun with the Colonel</h2>
          <button onClick={handlePlayChickenSound} className="bg-yellow-500 text-black p-2 rounded mr-4">Play Chicken Sound</button>
          <button onClick={handleDailyWisdom} className="bg-green-500 text-black p-2 rounded mr-4">Get Daily Wisdom</button>
          <button onClick={handleRecipeSuggestion} className="bg-red-500 text-white p-2 rounded">Suggest Recipe</button>
        </div>

        {/* Input Area */}
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow bg-gray-700 text-gray-200 border-gray-600 placeholder-gray-400 p-2 rounded"
            onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage(inputMessage)}
            disabled={isLoading}
          />
          <button
            onClick={() => handleSendMessage(inputMessage)}
            disabled={isLoading}
            className="bg-blue-600 text-white hover:bg-blue-700 p-2 rounded"
          >
            {isLoading ? <ClipLoader size={16} color="#ffffff" /> : 'Send'}
          </button>
        </div>

      </main>
    </div>
  );
}

export default ColonelAi;
