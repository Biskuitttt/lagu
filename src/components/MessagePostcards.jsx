import React, { useState, useRef, useEffect } from 'react';
import './MessagePostcards.css'; // We'll create a new small css too

const messages = [
  "You're the best! 🌟",
  "Keep shining ✨",
  "I believe in you 💛",
  "Sending hugs 🤗",
  "You are loved ❤️",
  "Dream big! 🌈",
  "Smile more 😊",
  "You're amazing!",
  "Stay strong 💪",
  "Adventure awaits!",
  "You make me proud 🥰",
  "Keep being awesome!",
  "You got this 💥",
  "Shine bright like a diamond 💎",
  "Thanks for being you 💖",
  "Magic is real ✨",
  "Never give up 🌻",
  "Big hugs from afar 🤍",
  "Stay golden 🌟",
  "You matter 🌸"
];

const MessageCard = ({ image, message, index, bringToFront, topZIndex }) => {
  const [flipped, setFlipped] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const parent = cardRef.current.parentElement;
    const parentWidth = parent.offsetWidth;
    const parentHeight = parent.offsetHeight;
  
    const radius = 300; // bouquet size
    const angle = (index / 20) * Math.PI * 2;
  
    const centerX = parentWidth / 2;
    const centerY = parentHeight / 2;
  
    const x = centerX + radius * Math.cos(angle) + (Math.random() * 60 - 30) - 100;
    const y = centerY + radius * Math.sin(angle) + (Math.random() * 60 - 30) - 150;
    
    setPosition({ x, y });
  }, [index]);
  

  const startDrag = (clientX, clientY) => {
    bringToFront(index);
    const rect = cardRef.current.getBoundingClientRect();
    setDragOffset({
      x: clientX - rect.left,
      y: clientY - rect.top
    });
    setIsDragging(true);
  };

  const doDrag = (clientX, clientY) => {
    if (!isDragging) return;
    const parentRect = cardRef.current.parentElement.getBoundingClientRect();
    const newX = clientX - parentRect.left - dragOffset.x;
    const newY = clientY - parentRect.top - dragOffset.y;
    setPosition({ x: newX, y: newY });
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    startDrag(e.clientX, e.clientY);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    doDrag(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    stopDrag();
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    doDrag(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    stopDrag();
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (!isDragging) {
      setFlipped(!flipped);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`message-card ${flipped ? 'flipped' : ''}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: topZIndex,
        cursor: isDragging ? 'grabbing' : 'grab',
        transition: isDragging ? 'none' : 'transform 0.3s ease-out',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt="Polaroid" draggable="false" className="polaroidImageContent" />
        </div>
        <div className="card-back">
          <div className="message-text">{message}</div>
        </div>
      </div>
    </div>
  );
};

const MessagePostcards = ({ onClose }) => {
  const [topZIndex, setTopZIndex] = useState(100);

  const bringToFront = (index) => {
    setTopZIndex((prev) => prev + 1);
  };

  return (
    <div className="message-postcards-container" onClick={(e) => {
      if (e.target.className === "message-postcards-container") {
        onClose();
      }
    }}>
      {[...Array(20)].map((_, i) => (
        <MessageCard
          key={i}
          index={i}
          image={`/img/img/placeholder-${i}.jpg`}
          message={messages[i % messages.length]}
          bringToFront={bringToFront}
          topZIndex={topZIndex + i}
        />
      ))}

      <div className="back-button-container">
        <button onClick={onClose} className="backButton">
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default MessagePostcards;
