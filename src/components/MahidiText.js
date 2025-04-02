'use client'
import React, { useEffect, useState } from 'react';

const MahidiText = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const targetText = 'MAHIDI';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < targetText.length) {
        setText((prevText) => prevText + targetText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setText('');
          currentIndex = 0;
        }, 2000); // Tempo antes de reiniciar a animação
      }
    }, 200); // Velocidade da animação

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-mono">
      {text}
    </div>
  );
};

export default MahidiText;