import React, { CSSProperties, useEffect, useRef } from 'react';
import { Player as LottiePlayer } from '@lottiefiles/react-lottie-player';

interface PlayerProps {
  play: boolean;
  animation: string;
  speed?: number;
  className?: string;
  style?: CSSProperties;
  onLoad?: () => any;
  onComplete?: () => any;
}

/**
 * A wrapper for the Lottie player that simplifies the event that is triggered when loading,
 * and allows you to play or stop the animation in a declarative way.
 */
export const Player = (props: PlayerProps) => {
  const { play, className, style, onLoad, onComplete } = props;

  const playerRef = useRef<LottiePlayer | null>(null);

  useEffect(() => {
    if (play) {
      playerRef.current?.stop();
      playerRef.current?.play();
    }
  }, [play]);

  const onLottieEvent = (event: any) => {
    switch (event) {
      case 'complete':
        onComplete && onComplete();
        break;
      case 'load':
        onLoad && onLoad();
        break;
      default:
    }
  };

  return (
    <LottiePlayer
      className={className}
      style={style}
      ref={playerRef}
      onEvent={onLottieEvent}
      src={props.animation}
      speed={props.speed}
      keepLastFrame={true}
    />
  );
};
