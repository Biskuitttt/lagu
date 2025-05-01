import React, { useState } from 'react';
import './MessagePostcards.css';

const MessagePostcards = ({ onClose }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(0);
  const [activeTab, setActiveTab] = useState('Skills');

  const characters = [
    { name: 'Koleda Belobog', image: '/image/peter.jpg', level: 'Lv. 40' },
    { name: 'Character 2', image: '/image/brown.jpg', level: 'Lv. 40' },
    { name: 'Character 3', image: '/image/jongkok.jpg', level: 'Lv. 40' },
    { name: 'Character 4', image: '/image/blue.jpg', level: 'Lv. 40' },
    { name: 'Character 5', image: '/image/17.jpg', level: 'Lv. 10' },
    { name: 'Character 6', image: '/image/stitch.jpg', level: 'Lv. 10' },
    { name: 'Character 7', image: '/image/bocil1.jpg', level: 'Lv. 30' },
    { name: 'Character 8', image: '/image/peace.jpg', level: 'Lv. 10' },
    { name: 'Character 9', image: '/image/pink.jpg', level: 'Lv. 10' },
    { name: 'Character 10', image: '/image/ungu.jpg', level: 'Lv. 10' },
    { name: 'Character 11', image: '/image/rose.jpg', level: 'Lv. 10' },
    { name: 'Character 12', image: '/image/peacee.jpg', level: 'Lv. 10' },
  ];

  const handleCharacterSelect = (index) => {
    setSelectedCharacter(index);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="message-postcards-container">
      <div className="game-header">
        <div className="header-left">
          <div className="home-button">D</div>
          <div className="section-button">City</div>
        </div>
        <div className="header-right">
          <div className="filter-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8h16M8 16h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="game-content">
        <div className="featured-character">
          <div className="character-image">
            <img 
              src={characters[selectedCharacter].image} 
              alt={characters[selectedCharacter].name} 
            />
          </div>
          <div className="character-info">
            <div className="character-name">{characters[selectedCharacter].name}</div>
            <div className="character-icons">
              <span className="character-icon-item">⚔️</span>
              <span className="character-icon-item">🛡️</span>
            </div>
          </div>
        </div>

        <div className="character-grid">
          <div className="character-cards-container">
            {characters.map((char, index) => (
              <div
                key={index}
                className={`character-card ${index === selectedCharacter ? 'selected' : ''}`}
                onClick={() => handleCharacterSelect(index)}
              >
                <div className="character-icon">
                  <img src={char.image} alt={char.name} />
                  <div className="element-icon">🔥</div>
                </div>
                <div className="level-indicator">{char.level}</div>
              </div>
            ))}
          </div>

          <div className="character-tabs">
            <div 
              className={`tab-item ${activeTab === 'Base Stats' ? 'active' : ''}`}
              onClick={() => handleTabChange('Base Stats')}
            >
              <div className="tab-icon">⚙️</div>
              Base Stats
            </div>
            <div 
              className={`tab-item ${activeTab === 'Skills' ? 'active' : ''}`}
              onClick={() => handleTabChange('Skills')}
            >
              <div className="tab-icon">✨</div>
              Skills
            </div>
            <div 
              className={`tab-item ${activeTab === 'Equipment' ? 'active' : ''}`}
              onClick={() => handleTabChange('Equipment')}
            >
              <div className="tab-icon">🔶</div>
              Equipment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePostcards;