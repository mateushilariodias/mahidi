'use client'
import React, { useEffect, useState } from 'react';

const words = ['espelho', 'castelo', 'elevador', 'livro', 'vida'];

const WordAnimation = () => {
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      const randomIndex = Math.floor(Math.random() * randomWord.length);
      const brokenWord = randomWord.slice(0, randomIndex) + '****' + randomWord.slice(randomIndex + 1);

      setVisibleWords((prevWords) => {
        const newWords = [...prevWords, brokenWord];
        if (newWords.length > 5) {
          newWords.shift();
        }
        return newWords;
      });
    }, 1000); // Intervalo de aparecimento das palavras

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {visibleWords.map((word, index) => (
        <div
          key={index}
          className="absolute text-white opacity-70 text-xl"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
            animation: `float 5s infinite ease-in-out`,
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default WordAnimation;