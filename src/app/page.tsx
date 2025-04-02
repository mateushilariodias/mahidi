// import React from 'react';
// import MahidiText from '../components/MahidiText';
// import WordAnimation from '../components/WordAnimation';

// function App() {
//   return (
//     <div className="bg-black h-screen overflow-hidden">
//       <MahidiText />
//       <WordAnimation />
//     </div>
//   );
// }

// export default App;

// 'use client'
// import { useEffect, useState } from "react";
// import "@fontsource/cinzel-decorative";

// export default function MahidiEffect() {
//   const [visible, setVisible] = useState(true);
//   const [fragments, setFragments] = useState<string[]>([]);
//   const [mahidi, setMahidi] = useState(" ...AINDA NÃO É OFICIAL... ");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setMahidi((prev) => {
//         if (prev.length === 0) return " ...AINDA NÃO É OFICIAL... ";
//         return prev.slice(1) + prev[0];
//       });
//     }, 300);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const words = [
//       "EUs", "Amarras", "Assombração", "Sonho de viver", "Testamento", "Devaneio caótico",
//       "Cacos", "A palavra", "Vilão", "Paz e terror"
//     ];

//     const breakWord = (word: string) => {
//       const breakPoints = Array.from({ length: word.length }, (_, i) => i)
//         .sort(() => Math.random() - 0.5)
//         .slice(0, Math.floor(word.length / 2));
//       return word
//         .split('')
//         .map((char, i) => (breakPoints.includes(i) ? char : '_'))
//         .join('');
//     };

//     let repeatedWords: string[] = [];
//     words.forEach((word, index) => {
//       for (let i = 0; i <= index; i++) {
//         repeatedWords.push(breakWord(word));
//       }
//     });

//     setFragments([...repeatedWords]);
//   }, []);

//   return (
//     <div className="relative w-screen h-screen bg-black flex items-center justify-center overflow-hidden" style={{
//       backgroundImage: "url('/broken-mirror.jpg')",
//       backgroundSize: "cover",
//       backgroundBlendMode: "overlay",
//       backdropFilter: "blur(8px)",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//     }}
//     >
//       <h1 className="absolute text-white text-6xl font-bold animate-fade" style={{
//         fontFamily: "Cinzel Decorative, serif", textShadow: "4px 4px 10px blue", letterSpacing: "3px"
//       }}>
//         {mahidi}
//       </h1>
//       {fragments.map((frag, index) => (
//         <span
//           key={index}
//           className="absolute text-gray-400 text-xl animate-float"
//           style={{
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             transform: `rotate(${Math.random() * 360}deg)`,
//             opacity: Math.random() * 0.5 + 0.5,
//             filter: "blur(2px)"
//           }}
//         >
//           {frag}
//         </span>
//       ))}
//     </div>
//   );
// }

'use client'
import { useEffect, useState } from "react";
import "@fontsource/cinzel-decorative";

export default function PuzzleEffect() {
  const [title, setTitle] = useState("...AINDA NÃO É OFICIAL...");
  const [fragments, setFragments] = useState<string[]>([]);
  // Rotação do título
  useEffect(() => {
    const interval = setInterval(() => {
      setTitle((prev) => prev.slice(1) + prev[0]);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
     const words = [
       "EUs", "Amarras", "Assombração", "Sonho de viver", "Testamento", "Devaneio caótico",
       "Cacos", "A palavra", "Vilão", "Paz e terror"
     ];
    
     const breakWord = (word: string) => {
       const breakPoints = Array.from({ length: word.length }, (_, i) => i)
         .sort(() => Math.random() - 0.5)
         .slice(0, Math.floor(word.length / 2));
       return word
         .split('')
         .map((char, i) => (breakPoints.includes(i) ? char : '_'))
         .join('');
     };
    
     const repeatedWords: string[] = [];
     words.forEach((word, index) => {
       for (let i = 0; i <= index; i++) {
         repeatedWords.push(breakWord(word));
       }
     });
    
     setFragments([...repeatedWords]);
   }, []);

  return (
    <div className="relative w-screen h-screen bg-black flex items-center justify-center overflow-hidden" 
      style={{
        backgroundImage: "url('/broken-mirror.jpg')",
        backgroundSize: "cover",
        backgroundBlendMode: "hard-light",
      }}
    >
      {/* Título principal */}
      <h1 className="absolute text-white text-6xl font-bold animate-fade px-4 mx-4 xl:px-0 xl:mx-0" style={{
         fontFamily: "Cinzel Decorative, serif", textShadow: "4px 4px 10px blue", letterSpacing: "3px"
       }}>
         {title}
       </h1>

      {/* Fragmentos do quebra-cabeça */}
      {fragments.map((frag, index) => (
         <span
           key={index}
           className="absolute text-gray-400 text-xl animate-float"
           style={{
             top: `${Math.random() * 100}%`,
             left: `${Math.random() * 100}%`,
             transform: `rotate(${Math.random() * 360}deg)`,
             opacity: Math.random() * 0.5 + 0.5,
             filter: "blur(2px)"
           }}
         >
           {frag}
         </span>
       ))}
     </div>
   );
 }