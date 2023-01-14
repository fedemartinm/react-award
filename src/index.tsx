import React, { CSSProperties, useEffect, useMemo, useState } from 'react';
import { useTransition } from 'react-transition-state';
import { Mask, Image, Player } from './components';
import { withAwardProperties } from './hocs';
import { useHover } from './hooks/useHover';

import './styles/transitions.css';
import './styles/animations.css';

interface AwardProps {
  /**
   * The 'source' property of an image. It can be an imported asset or a URL string.
   */
  image: string;
  /**
   * Lottie animation file. It can be an imported asset or a URL string.
   */
  animation: string;
  /**
   * Use this property to define the duration of the transition. It does not affect the duration of the animation.
   */
  duration?: number;
  /**
   * Set to 'true' to play the animation. This is ignored if 'playOnHover' is set to 'true'.
   */
  play?: boolean;
  /**
   * If this is set to 'true', the animation will be triggered when the user moves the mouse over the component.
   */
  playOnHover?: boolean;
  /**
   * Use this property to play only specific segments of the animation
   */
  segments?: [number, number];
  /**
   * To change the mask color.
   */
  backgroundColor?: string;
  /**
   * Set this property to 'true' to show a placeholder effect when the animation is not ready to be displayed.
   */
  showPlaceholder?: boolean;
  /**
   * Animation speed
   */
  speed?: any;
  /**
   * Container styles
   */
  style?: CSSProperties;
  /**
   * Image styles
   */
  imageStyle?: CSSProperties;
  /**
   * Mask styles
   */
  maskStyle?: CSSProperties;
  /**
   * Player styles
   */
  playerStyle?: CSSProperties;
  /**
   * Called when the lottie animation has finished
   */
  onComplete?: () => void;
  /**
   * Children. Use this if you want to replace the image
   */
  children: React.ReactNode;
}

/**
 * This React component displays a solid color mask with the silhouette of an image,
 * and when triggered, it performs a fade-in effect to reveal the image.
 *
 * The component also plays a confetti animation.
 * The user can specify different images or animation files for the component to display.
 */
export const Award: React.FC<AwardProps> = props => {
  const [ref, hovered] = useHover();
  const [loaded, setLoaded] = useState(false);
  const [transition, showImage] = useTransition({
    timeout: props.duration,
    preEnter: true,
  });

  // current status
  const showPlaceholder = props.showPlaceholder && !loaded;
  const play = loaded ? (props.playOnHover && hovered) || !!props.play : false;

  useEffect(() => {
    showImage(play);
  }, [play]);

  const CustomChild = useMemo(() => {
    return withAwardProperties(props.children);
  }, [props.children]);

  return (
    <div ref={ref} className="award-container" style={props.style}>
      <Mask
        image={props.image}
        style={props.maskStyle}
        backgroundColor={props.backgroundColor}
        className={`award-mask ${showPlaceholder && 'placeholder'}`}
      >
        <Image
          image={props.image}
          style={props.imageStyle}
          duration={props.duration}
          className={`award-image ${transition.status}`}
        />
      </Mask>
      <CustomChild
        duration={props.duration}
        className={`award-image ${transition.status}`}
      />
      <Player
        play={play}
        speed={props.speed}
        segments={props.segments}
        style={props.playerStyle}
        animation={props.animation}
        onLoad={() => setLoaded(true)}
        onComplete={props.onComplete}
        className={`award-player ${transition.status}`}
      />
    </div>
  );
};

Award.defaultProps = {
  duration: 2000,
  backgroundColor: '#CCCCCC',
  showPlaceholder: false,
};
