import React, { CSSProperties } from 'react';

interface ImageProps {
  image: string;
  duration?: number;
  style?: CSSProperties;
  className?: string;
}

/**
 * Image component
 */
export const Image: React.FC<ImageProps> = props => {
  if (!props.image) {
    return null;
  }

  return (
    <img
      src={props.image}
      style={{
        transitionDuration: `${props.duration}ms`,
        ...(props.style || {}),
      }}
      className={props.className}
    />
  );
};
