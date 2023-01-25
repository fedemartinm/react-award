import { useState, useRef, useEffect } from 'react';

/**
 * The "useHover" hook allows you to detect if the mouse is hovering over a specific element in a React component.
 * It returns a reference to the element and a boolean value indicating whether the mouse is hovering over it or not.
 */
export function useHover(): [
  React.MutableRefObject<HTMLDivElement | null>,
  boolean
] {
  const [hovered, setHovered] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  function handleMouseOver() {
    setHovered(true);
  }

  function handleMouseOut() {
    //setWasHovered(false);
  }

  useEffect(() => {
    const current = ref.current;
    if (current) {
      current.addEventListener('mouseover', handleMouseOver);
      current.addEventListener('mouseout', handleMouseOut);
    }
    return () => {
      if (current) {
        current.removeEventListener('mouseover', handleMouseOver);
        current.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, [ref]);

  return [ref, hovered];
}
