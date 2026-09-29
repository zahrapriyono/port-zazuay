import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypewriter({
  text,
  speed = 100,
  delay = 500,
  onComplete,
}: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    setIsTyping(true);
    setDisplayText('');
    setIsComplete(false);
  }, []);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      startTyping();
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay, startTyping]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setIsTyping(false);
        setIsComplete(true);
        onComplete?.();
      }, 0);
    }
  }, [displayText, isTyping, text, speed, onComplete]);

  return { displayText, isTyping, isComplete };
}
