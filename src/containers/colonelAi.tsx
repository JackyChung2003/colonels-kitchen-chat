import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipLoader } from "react-spinners";
import './ColonelAi.css';
import ChickenRecipeProfile1 from '../assets/Images/chicken-recipi-1.webp';
import ChickenRecipeProfile2 from '../assets/Images/chicken-recipi-2.webp';
import ChickenRecipeProfile3 from '../assets/Images/chicken-recipi-3.webp';
import ChickenRecipeProfile4 from '../assets/Images/chicken-recipi-4.webp';
import ChickenRecipeProfile5 from '../assets/Images/chicken-recipi-5.webp';
import ChickenRecipeProfile6 from '../assets/Images/chicken-recipi-6.webp';
import ChickenRecipeProfile7 from '../assets/Images/chicken-recipi-7.webp';
import ChickenRecipeProfile8 from '../assets/Images/chicken-recipi-8.webp';
import ChickenRecipeProfile9 from '../assets/Images/chicken-recipi-9.webp';
import ChickenRecipeProfile10 from '../assets/Images/chicken-recipi-10.webp';
import ChickenCooking from '../assets/Images/chicken-cooking.webp';
import ChickenChasing from '../assets/Images/chicken-chase.webp';
import ChickenHidden from '../assets/Images/chicken-hidden.webp';
import systemPrompt from './Prompt/systemPrompt'
import suggestionPrompts from './Prompt/suggestionPrompt';
import recipeSuggestion from './Prompt/recipeSuggestion';
import wisdomSuggestions from './Prompt/wisdomSuggestions';
import userProfile from '../assets/Images/user-profile.webp';
import MessageDisplay from '../utils/MessageDisplay';
import { handlePlayChickenSound } from '../utils/playChickenSound';

// Define profile images for each type of response
const profiles = {
  general: [
    ChickenRecipeProfile1,
    ChickenRecipeProfile2,
    ChickenRecipeProfile3,
    ChickenRecipeProfile4,
    ChickenRecipeProfile5,
    ChickenRecipeProfile6,
    ChickenRecipeProfile7,
    ChickenRecipeProfile8,
    ChickenRecipeProfile9,    
    ChickenRecipeProfile10
  ],
  wisdom: ChickenHidden,
  recipe: ChickenCooking,
  chickenSound: ChickenChasing,
  user: userProfile
};

const nodeId = import.meta.env.VITE_GAIANET_NODE_ID || process.env.REACT_APP_GAIANET_NODE_ID;

const apiUrl = nodeId 
  ? `https://${nodeId}.us.gaianet.network/v1/chat/completions`
  : 'https://llama.us.gaianet.network/v1/chat/completions';

function ColonelAi() {
  const [messages, setMessages] = useState<{ role: string; content: string; profile: string; isLoading?: boolean }[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPrompts, setCurrentPrompts] = useState<string[]>([]); // Initialize with an empty array

  // Function to get a random general profile
  const getRandomGeneralProfile = () => {
    const randomIndex = Math.floor(Math.random() * profiles.general.length);
    return profiles.general[randomIndex];
  };

  // Function to shuffle and select 5 random prompts
  const getRandomPrompts = () => {
    const shuffledPrompts = [...suggestionPrompts].sort(() => 0.5 - Math.random()); // Shuffle the prompts
    return shuffledPrompts.slice(0, 5); // Get 5 random prompts
  };

  // Use effect to load the initial 5 prompts when the component mounts
  useEffect(() => {
    setCurrentPrompts(getRandomPrompts());
  }, []);

  // Handle refresh to get another 5 random prompts
  const handleRefreshPrompts = () => {
    setCurrentPrompts(getRandomPrompts()); // Update the prompts when the button is clicked
  };


  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Randomly select a general profile for this message
    const selectedProfile = getRandomGeneralProfile();

    setIsLoading(true);
    const newMessages = [
      ...messages,
      { role: 'user', content: message, profile: profiles.user },
      { role: 'assistant', content: '', isLoading: true, profile: selectedProfile  }
    ];
    setMessages(newMessages);
    setInputMessage('');

    try {
      const response = await axios.post(apiUrl, {
        model: 'llama',
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
          { role: 'assistant', content: aiResponse, profile: selectedProfile }
        ]);
      } else {
        throw new Error('No response content found');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: "Well, butter my biscuit! I couldn't cook up a response for you this time. Try again, partner!", profile: selectedProfile }
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

  const handleDailyWisdom = () => {
    const wisdom = wisdomSuggestions[Math.floor(Math.random() * wisdomSuggestions.length)];
    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: wisdom, profile: profiles.wisdom }
    ]);
  };

  const handleRecipeSuggestion = () => {
    const randomRecipe = recipeSuggestion[Math.floor(Math.random() * recipeSuggestion.length)];
    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: `Why not try making: ${randomRecipe}`, profile: profiles.recipe }
    ]);

    // Update the input field with "Tell me more about [recipe]"
    setInputMessage(`Tell me more about ${randomRecipe}`);
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
          <div className='suggestions-top-section'>
            <h2 className="suggestions-title">Suggested Topics</h2>
            <button onClick={handleRefreshPrompts} className="refresh-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-repeat"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
              ></path>
              <path
                fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              ></path>
            </svg>
            </button>
          </div>
          <div className="suggestions">
            {currentPrompts.map((prompt, index) => (
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
                    // Use MessageDisplay for formatted content
                    <MessageDisplay content={message.content} />
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
              <button onClick={() => handlePlayChickenSound(setMessages, profiles)} className="more-btn yellow">🐔</button>
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
