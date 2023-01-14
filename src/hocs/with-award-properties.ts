import React from 'react';

interface AwardChildProperties {
  duration?: number;
  className?: string;
}

/**
 * Inject award properties to custom child
 */
export const withAwardProperties = (WrappedComponent: React.ReactNode) => (
  props: AwardChildProperties
) => {
  if (!React.isValidElement(WrappedComponent)) {
    return null;
  }
  return React.cloneElement(WrappedComponent as React.ReactElement, {
    className: `${props.className}`,
    style: {
      transitionDuration: `${props.duration}ms`,
    },
  });
};
export default withAwardProperties;
