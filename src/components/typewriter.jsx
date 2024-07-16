import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, typingSpeed = 150, pauseTime = 1000 }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < words[wordIndex].length && !isDeleting) {
      setTimeout(() => {
        setText(words[wordIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      setTimeout(() => {
        setText(words[wordIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    } else if (charIndex === words[wordIndex].length && !isDeleting) {
      setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, pauseTime]);

  return <span>{text}</span>;
};

export default Typewriter;
