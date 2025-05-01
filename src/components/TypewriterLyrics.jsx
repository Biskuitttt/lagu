import React, { useEffect, useRef, useState } from 'react';
import '../style.css';
import ninaAudio from '../assets/music/nina.mp3';
import Particles from './Particles'; // Import Particles component
import FlowingMenu from './FlowingMenu'; // Import FlowingMenu component
import MessagePostcards from './MessagePostcards';

const syncedLyrics = [
  { time: 2, text: "This is made for you"  },
  { time: 8, text: "Yea, you", image: "/image/chair.jpg" },
  { time: 13, text: "And only you", image: "/image/you.jpg" },
  { time: 16, text: "Cuz you matter for me", image: "/image/gura.jpg" },
  { time: 18, text: "Enjoy <3" },
  { time: 21, text: "Saat engkau tertidur", image: "/image/stitch.jpg" },
  { time: 27, text: "Aku pergi menghibur", image: "/image/birb.jpg" },
  { time: 32, text: "Beda kota, pisah raga, bukan masalahku", image: "/image/1.jpg" },
  { time: 37, text: "Lihat wajahmu di layar, ku tetap bersyukur", image: "/image/friends.jpg" },
  { time: 42, text: "Saat engkau terjaga", image: "/image/school.jpg" },
  { time: 48, text: "Aku 'kan ada di sana", image: "/image/peter.jpg" },
  { time: 53, text: "Sempatkan bermain dan bawakan cendera mata", image: "/image/2024.jpg" },
  { time: 58, text: "Satu sampai lima tahun, cepat tak terasa", image: "/image/brown.jpg" },
  { time: 64, text: "Segala hal kuupayakan untuk melindungi", image: "/image/heart1.jpg" },
  { time: 74, text: "Tunggu aku kembali lagi esok pagi", image: "/image/meh.jpg" },
  { time: 85, text: "Tumbuh lebih baik, cari panggilanmu", image: "/image/heart2.jpg" },
  { time: 91, text: "Jadi lebih baik dibanding diriku", image: "/image/masker.jpg" },
  { time: 96, text: "'Tuk sementara ini aku mengembara jauh", image: "/image/vidcall.jpg" },
  { time: 109, text: "Saat dewasa kau 'kan mengerti", image: "/image/jongkok.jpg" },
  { time: 122, text: "Saat engkau dewasa", image: "/image/gigi.jpg" },
  { time: 128, text: "Dan aku kian menua", image: "/image/ih.jpg" },
  { time: 133, text: "Jika ku berpulang lebih awal, tidak apa", image: "/image/meh2.jpg" },
  { time: 138, text: "Berjumpa lagi di sana, aku tetap sama", image: "/image/cart.jpg" },
  { time: 144, text: "Saat engkau teringat", image: "/image/blue.jpg" },
  { time: 149, text: "Tengkar kita, manakala", image: "/image/17.jpg" },
  { time: 154, text: "Maaf atas perjalanan yang tidak sempurna", image: "/image/perjalanan.jpg" },
  { time: 159, text: "Namun percayalah, untukmu kujual dunia", image: "/image/rain.jpg" },
  { time: 165, text: "Segala hal kuupayakan untuk melindungi", image: "/image/jongkok2.jpg" },
  { time: 175, text: "Tunggu aku kembali lagi esok pagi", image: "/image/meh4.jpg" },
  { time: 181, text: "Selalu janjiku pada dirimu", image: "/image/jumpp.jpg" },
  { time: 186, text: "Tumbuh lebih baik, cari panggilanmu", image: "/image/bocil1.jpg" },
  { time: 192, text: "Jadi lebih baik dibanding diriku", image: "/image/peace.jpg" },
  { time: 197, text: "Dan tertawalah saat ini selepas-lepasnya", image: "/image/cilik.jpg" },
  { time: 210, text: "Kar'na kelak kau 'kan tersakiti", image: "/image/cry.jpg" },
  { time: 215, text: "Aku tahu kamu hebat", image: "/image/bocil3.jpg" },
  { time: 218, text: "Namun, s'lamanya diriku pasti berkutat", image: "/image/squad.jpg" },
  { time: 223, text: "'Tuk s'lalu jauhkanmu dari dunia yang jahat", image: "/image/pink.jpg" },
  { time: 228, text: "Ini sumpahku padamu 'tuk biarkanmu", image: "/image/ungu.jpg" },
  { time: 230, text: "Tumbuh lebih baik, cari panggilanmu", image: "/image/ultah.jpg" },
  { time: 236, text: "Jadi lebih baik dibanding diriku", image: "/image/rose.jpg" },
  { time: 241, text: "'Tuk sementara kita tertawakan berbagai hal", image: "/image/wle.jpg" },
  { time: 248, text: "Yang lucu dan lara selepas-lepasnya", image: "/image/peacee.jpg" },
  { time: 254, text: "Saat dewasa kau 'kan mengerti", image: "/image/titan.jpg" },
  { time: 259, text: "Kar'na kelak kau 'kan tersakiti", image: "/image/cry.jpg" },
  { time: 264, text: "Saat dewasa kau 'kan mengerti" },
  { time: 269, text: "Kar'na kelak kau 'kan tersakiti", image: "/image/family.jpg" },
];

const photoMessages = [
    "You're the best!",
    "Don't forget to smile 😊",
    "Remember this moment?",
    "You light up my world 💡",
    "Thank you for being you.",
    "One day at a time 💛",
    "You are loved 🫶",
    "So proud of you!",
    "Hug from afar 🤗",
    "Keep going!",
    "You're my sunshine ☀️",
    "Forever in my heart 💖",
    "I'm always with you",
    "You got this!",
    "Look how far you've come!",
    "Smol bean energy 🌱",
    "Made with love 🧵",
    "Cute moment alert 🥺",
    "Big dreams await 🌠",
    "ILY"
  ];
  const lyricSections = [
    { time: 2, name: "Intro" },
    { time: 21, name: "Verse 1" },
    { time: 64, name: "Chorus 1" },
    { time: 85, name: "Bridge 1" },
    { time: 122, name: "Verse 2" },
    { time: 165, name: "Chorus 2" },
    { time: 215, name: "Bridge 2" },
    { time: 230, name: "Final Chorus" },
    { time: 254, name: "Outro" }
  ];
  
  const menuItems = [
    {
      text: "Photo Gallery",
      link: "#gallery",
      image: "/image/meh.jpg"
    },
    {
      text: "Credits",
      link: "#credits",
      image: "/image/cry.jpg"
    },
    {
      text: "Play Again",
      link: "#play-again",
      image: "/image/jongkok2.jpg"
    }
  ];
  
  const TypewriterLyrics = () => {
    const audioRef = useRef(null);
    const [currentLine, setCurrentLine] = useState('');
    const [typedText, setTypedText] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(null);
    const [imagePosition, setImagePosition] = useState({});
    const [isFading, setIsFading] = useState(false);
    const [nextImage, setNextImage] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [startGame, setStartGame] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [musicEnded, setMusicEnded] = useState(false);
    const [topZIndex, setTopZIndex] = useState(10); // initial top zIndex
    const [draggedIndex, setDraggedIndex] = useState(null);
    const [positions, setPositions] = useState({});
    const [openLetters, setOpenLetters] = useState({});
    const galleryRef = useRef(null);
    const [galleryActive, setGalleryActive] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [showSkipMenu, setShowSkipMenu] = useState(false);
    const [isPlayAgainClicked, setIsPlayAgainClicked] = useState(false);

    const handleBackToMenu = () => {
      setSelectedMenu(null);
      setTimeout(() => {
        document.querySelectorAll('.menu__item-link').forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            handleMenuSelection(href);
          });
        });
      }, 50); // Reattach after menu re-renders
    };
    
    // Handle play/pause toggle and other user interaction functions
    const handlePlayPause = () => {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play()
            .then(() => {
              setIsPlaying(true);
              setShowButton(false);
            })
            .catch(err => {
              console.error("Error playing audio:", err);
            });
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
          setShowButton(true);
        }
      }
    };
    const toggleSkipMenu = (e) => {
      e.stopPropagation(); // Prevent container click handler from firing
      setShowSkipMenu(!showSkipMenu);
    };

    const skipToSection = (time) => {
      if (audioRef.current) {
        audioRef.current.currentTime = time;
        setShowSkipMenu(false);
      }
    };
    const handleStart = () => {
      setStartGame(true); // Start the game when the button is clicked
      // Start playing audio once the game has started
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setShowButton(false);
          })
          .catch(err => {
            console.error("Error playing audio:", err);
          });
      }
    };
  
    const handleClick = () => {
      if (startGame && !musicEnded) {
        setShowButton(true);
        // Close skip menu when clicking elsewhere
        if (showSkipMenu) {
          setShowSkipMenu(false);
        }
      }
    };
  
    const handleMenuSelection = (link) => {
      const menuOption = link.substring(1); // Remove the "#" from the link
      
      if (menuOption === 'gallery') {
        // Go to gallery page - this activates the gallery bouquet
        setSelectedMenu('gallery');
        setGalleryActive(true);
      } 
      else if (menuOption === 'play-again') {
        // Reset game state and restart audio
        setMusicEnded(false);
        setStartGame(true);
        setShowButton(false); // Hide the button initially
        setCurrentLine('');
        setTypedText('');
        setTypingIndex(0);
        setCurrentImage(null);
        setSelectedMenu(null);
        setGalleryActive(false);

        // Set the state to show the "Skip" button
        setIsPlayAgainClicked(true);
        
        // Reset audio to beginning
        setTimeout(() => {
          audioRef.current.play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(err => {
              console.error("Error playing audio:", err);
              setShowButton(true); // Show button if play fails
            });
        }, 50);
      }
      else if (menuOption === 'credits') {
        // Show credits page
        setSelectedMenu('credits');
      }
    };
  
    // Define the CustomFlowingMenu component function inside the main component
    const CustomFlowingMenu = () => (
      <FlowingMenu 
        items={menuItems.map(item => ({
          ...item,
          onClick: (e) => {
            e.preventDefault();
            handleMenuSelection(item.link);
          }
        }))} 
      />
    );
  
    // Typewriter effect logic
    useEffect(() => {
      if (currentLine !== '') {
        setTypedText('');
        setTypingIndex(0);
      }
    }, [currentLine]);
  
    useEffect(() => {
      if (typingIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + currentLine[typingIndex]);
          setTypingIndex((prev) => prev + 1);
        }, 40); // speed of typing
    
        return () => clearTimeout(timeout);
      }
    }, [typingIndex, currentLine]);
  
    // Handle drag and drop functionality for gallery images
    const handleDragStart = (e, index) => {
      e.preventDefault(); // Prevent default to avoid text selection during drag
      const shiftX = e.clientX - e.currentTarget.getBoundingClientRect().left;
      const shiftY = e.clientY - e.currentTarget.getBoundingClientRect().top;
    
      setTopZIndex((prev) => prev + 1);
      setPositions((prev) => ({
        ...prev,
        [index]: {
          ...(prev[index] || {}),
          zIndex: topZIndex + 1,
        },
      }));
  
      const onMouseMove = (moveEvent) => {
        moveEvent.preventDefault();
        const newX = moveEvent.clientX - shiftX;
        const newY = moveEvent.clientY - shiftY;
    
        setPositions((prev) => ({
          ...prev,
          [index]: {
            ...(prev[index] || {}),
            left: newX,
            top: newY,
            zIndex: topZIndex + 1,
          },
        }));
      };
  
      const onMouseUp = () => {
        setDraggedIndex(null);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };
    
      setDraggedIndex(index);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };
  
    const handleImageClick = (index) => {
      // Prevent click events during drag
      if (draggedIndex === index) return;
      
      setOpenLetters((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    };
  
    // Audio management
    useEffect(() => {
      if (startGame) {
        const interval = setInterval(() => {
          if (audioRef.current) {
            const currentTime = audioRef.current.currentTime;
            const current = syncedLyrics
              .slice()
              .reverse()
              .find((line) => currentTime >= line.time);
  
            if (current && current.text !== currentLine) {
              setCurrentLine(current.text);
  
              if (current.image) {
                setIsFading(true); // Start fade out
  
                // Prepare next image
                setNextImage(current.image);  
                // After fade out, swap image and fade in
                setTimeout(() => {
                  setCurrentImage(current.image);
                  setImagePosition(getRandomPosition());
                  setIsFading(false); // Fade in
                }, 500); // match with fade duration
              } else {
                setCurrentImage(null);
                setNextImage(null);
              }
            }
          }
        }, 300);
  
        return () => clearInterval(interval);
      }
    }, [currentLine, startGame]);
  
    const handleMusicEnd = () => {
      setMusicEnded(true);
    };
  
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.addEventListener('ended', handleMusicEnd);
      }
  
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleMusicEnd);
        }
      };
    }, []);
  
    // Menu click handler setup
    useEffect(() => {
      const handleMenuClick = () => {
        const menuLinks = document.querySelectorAll('.menu__item-link');
        menuLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            handleMenuSelection(href);
          });
        });
      };
  
      if (musicEnded) {
        // Add click handlers after the menu is rendered
        setTimeout(handleMenuClick, 100);
      }
    }, [musicEnded]);
    
    // Render functions for different sections/views
    const renderGallery = () => (
      <div className="gallery bouquet" ref={galleryRef}>
        {[...Array(20)].map((_, i) => {
          const radius = 300;
          const angle = (i / 19) * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const rotate = angle * (180 / Math.PI) - 90;
  
          const position = positions[i];
          const photoZ = position?.zIndex ?? i;
  
          const style = position?.left !== undefined
            ? {
                position: 'absolute',
                left: `${position.left}px`,
                top: `${position.top}px`,
                transform: `rotate(${rotate}deg)`,
                zIndex: photoZ,
                cursor: 'grab',
              }
            : {
                position: 'absolute',
                top: '10%',
                left: '50%',
                transform: `translate(${x}px, ${-y}px) rotate(${rotate}deg)`,
                zIndex: photoZ,
                cursor: 'grab',
              };
  
          return (
            <div
              key={i}
              className="polaroidImage bloom"
              style={{
                ...style,
                '--angle': `${rotate}deg`,
              }}
              onMouseDown={(e) => handleDragStart(e, i)}
              onClick={() => handleImageClick(i)}
            >
              <img
                src={`/img/img/placeholder-${i}.jpg`}
                alt={`Memory ${i}`}
                className="polaroidImageContent"
                draggable="false"
              />
              {openLetters[i] && (
                <div className="letterMessage">
                  {photoMessages[i] || "I'm here for you"}
                </div>
              )}
            </div>
          );
        })}
        
        <button 
          onClick={handleBackToMenu}
 
          className="backButton"
        >
          Back to Menu
        </button>
      </div>
    );
  
    const renderCredits = () => (
      <div className="credits-container">
        <h2>Credits</h2>
        <div className="credits-content">
          <p><strong>Music:</strong> Nina by Pamungkas</p>
          <p><strong>Development:</strong> Created with React</p>
          <p><strong>Special Thanks:</strong> To you, for being amazing</p>
        </div>
        <button 
          onClick={handleBackToMenu}
 
          className="backButton"
        >
          Back to Menu
        </button>
      </div>
    );
    // Render the appropriate view based on selectedMenu
    const renderMenuContent = () => {
      switch (selectedMenu) {
        case 'gallery':
          return renderGallery();
        case 'credits':
          return renderCredits();
        default:
          return <CustomFlowingMenu />;
      }
    };
  
    return (
      <div className="container" onClick={handleClick}>
        <Particles particleCount={300} particleColors={['#ffffff', '#ffb6c1', '#add8e6']} speed={0.15} />
  
        <div className="wind-background"></div>
        {!startGame ? (
          // Initial start screen
          <>
            <div
              className="polaroidImage"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-5deg)'}
            >
              <img src="/image/peter.jpg" alt="Creator" className="image" />
              <p className="caption">Creator</p>
            </div>
            <button onClick={handleStart} className="startButton">
              Press Me :3
            </button>
          </>
        ) : musicEnded ? (
          // End screen with menu or selected menu item
          selectedMenu ? renderMenuContent() : <CustomFlowingMenu />
        ) : (
          // Lyrics display during playback
          <div className="lyrics">
            <p>
              {typedText}
              <span style={{ borderRight: '2px solid #eee', animation: 'blink 1s step-end infinite' }}>&nbsp;</span>
            </p>
            {currentImage && (
              <div
                className="polaroidImage"
                style={{
                  position: 'absolute',
                  ...imagePosition,
                  opacity: isFading ? 0 : 1,
                  pointerEvents: 'none',
                }}
              >
                <img src={currentImage} alt="Lyric related" className="polaroidImageContent" />
              </div>
            )}
          </div>
        )}
  
  {startGame && showButton && !musicEnded && !selectedMenu && isPlayAgainClicked && (
        <div className="controls-container">
          <button onClick={handlePlayPause} className="playButton">
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          
          {/* Skip Button with FlowingMenu */}
          <div className="skip-container">
            <button onClick={toggleSkipMenu} className="skipButton">
              Skip
            </button>
            
            {showSkipMenu && (
              <div className="flowingSkipMenu">
                <h3>Jump to Section</h3>
                <div className="skip-menu-sections">
                  {lyricSections.map((section, index) => (
                    <div 
                      key={index} 
                      className="skip-menu-item"
                      onClick={() => skipToSection(section.time)}
                    >
                      {section.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
  
        <audio ref={audioRef} preload="auto">
          <source src={ninaAudio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  };
  
  // Function to generate random positions
  function getRandomPosition() {
    const positions = [
      { top: '10%', left: '10%' },
      { top: '10%', right: '10%' },
      { bottom: '10%', left: '10%' },
      { bottom: '10%', right: '10%' },
    ];
  
    return positions[Math.floor(Math.random() * positions.length)];
  }
  
  export default TypewriterLyrics;