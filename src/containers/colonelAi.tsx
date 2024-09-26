import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipLoader } from "react-spinners";
import './ColonelAi.css';
// import ChickenRecipeProfile from '../assets/Images/chicken_recipi.webp';
import ChickenRecipeProfile from '../assets/Images/chicken recipi.webp';

// Define profile images for each type of response
const profiles = {
  general: ChickenRecipeProfile, // Default avatar
  wisdom: ChickenRecipeProfile,   // Wisdom avatar
  recipe: ChickenRecipeProfile,     // Recipe avatar
  chickenSound: ChickenRecipeProfile, // Fun avatar
  user: ChickenRecipeProfile, // User avatar
};

const suggestionPrompts = [
  "What's your secret to the perfect fried chicken?",
  "Do you have any tips for cooking the best mashed potatoes?",
  "What’s your favorite memory of starting KFC?",
  "How do you balance the 11 herbs and spices?",
  "What's the most important lesson in life you've learned?",
];


const apiUrl = 'https://0xb4020f2d82c62b376ed7aa8b105c84b9efb9aff3.us.gaianet.network/v1/chat/completions';

function ColonelAi() {
  const [messages, setMessages] = useState<{ role: string; content: string; profile: string; isLoading?: boolean }[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    setIsLoading(true);
    const newMessages = [
      ...messages,
      { role: 'user', content: message, profile: profiles.user },
      { role: 'assistant', content: '', isLoading: true, profile: profiles.general }
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
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: 'assistant', content: aiResponse, profile: profiles.general }
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

  useEffect(() => {
    const scrollArea = document.querySelector('.scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages]);

  const handlePlayChickenSound = () => {
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
    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: `Why not try making: ${randomRecipe}`, profile: profiles.recipe }
    ]);
  };

  return (
    <div className="colonel-container">
      <div className="colonel-main-content">
        <header className="header">
          <div className="header-container">
            <h1>Chat with Colonel Sanders AI</h1>
          </div>
        </header>
        <main className="colonel-main">
        <div className="suggestions-container">
          <h2 className="suggestions-title">Suggested Topics</h2>
          <div className="suggestions">
            {suggestionPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(prompt)}
                disabled={isLoading}
                className="suggestion-btn"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
        
        <div className='chat-container'>  
          <div className="chat-box scroll-area">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}>
                {message.role === 'assistant' && (
                  <img src={message.profile} alt="AI profile" className="profile-img left" />
                )}

                <div className={`message-content ${message.role}`}>
                  {message.isLoading ? (
                    <div className="loading">
                      <ClipLoader size={24} color="#ffffff" />
                      <span>Thinking...</span>
                    </div>
                  ) : (
                    message.content
                  )}
                </div>

                {message.role === 'user' && (
                  <img src={message.profile} alt="User profile" className="profile-img right" />
                )}
              </div>
            ))}
          </div>
        </div>
          <div className='colonel-bottom-section'>
            <div className="more-section">
              {/* <h2>More Fun with the Colonel</h2> */}
              <button onClick={handlePlayChickenSound} className="more-btn yellow">Play Chicken Sound</button>
              <button onClick={handleDailyWisdom} className="more-btn green">Get Daily Wisdom</button>
              <button onClick={handleRecipeSuggestion} className="more-btn red">Suggest Recipe</button>
            </div>

            <div className="input-area">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="message-input"
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage(inputMessage)}
                disabled={isLoading}
                />
              <button
                onClick={() => handleSendMessage(inputMessage)}
                disabled={isLoading}
                className="send-btn"
                >
                {isLoading ? <ClipLoader size={16} color="#ffffff" /> : 'Send'}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ColonelAi;
