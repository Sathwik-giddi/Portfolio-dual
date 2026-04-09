import { useState, useEffect } from "react";

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Jambo", lang: "Swahili" },
  { text: "Bonjour", lang: "French" },
  { text: "Nǐ hǎo", lang: "Chinese" },
  { text: "Hola", lang: "Spanish" },
  { text: "Namaste", lang: "Hindi" },
];

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      // After last greeting, wait a bit then exit
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 600);
      
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1200);
      
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [currentIndex, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <h1
          key={currentIndex}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight animate-fade-in-up"
        >
          {greetings[currentIndex].text}
        </h1>
      </div>
    </div>
  );
};

export default IntroAnimation;
