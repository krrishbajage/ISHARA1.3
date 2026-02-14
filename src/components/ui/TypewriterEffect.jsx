import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ 
  text, 
  speed = 50, 
  delay = 0,
  cursor = true,
  cursorChar = '|',
  onComplete = () => {},
  className = '',
  tag: Tag = 'p'
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Handle initial delay
    if (!hasStarted && delay > 0) {
      const delayTimer = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else if (!hasStarted) {
      setHasStarted(true);
    }
  }, [delay, hasStarted]);

  useEffect(() => {
    if (!hasStarted || currentIndex >= text.length) {
      if (currentIndex >= text.length && !isComplete) {
        setIsComplete(true);
        onComplete();
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, hasStarted, isComplete, onComplete]);

  return (
    <Tag className={className}>
      {displayedText}
      {cursor && !isComplete && (
        <span className="typewriter-cursor animate-pulse text-cyan-500">{cursorChar}</span>
      )}
    </Tag>
  );
};

export default TypewriterEffect;