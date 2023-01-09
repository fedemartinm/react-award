import React, { CSSProperties } from 'react';

interface MaskProps {
  image: string;
  className: string;
  style?: CSSProperties;
  backgroundColor?: string;
  children?: React.ReactNode;
}

/**
 * Mask component
 */
export const Mask = (props: MaskProps) => {
  const { backgroundColor, className, children, style = {} } = props;

  return (
    <div
      className={className}
      style={{
        WebkitMaskImage: `url(${props.image})`,
        maskImage: `url(${props.image})`,
        backgroundColor,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
