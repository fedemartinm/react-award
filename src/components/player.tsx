import React, { CSSProperties, useEffect, useRef } from 'react';
import {
  Player as LottiePlayer,
  IPlayerProps,
} from '@lottiefiles/react-lottie-player';
import { ArgumentType, NotNull } from '../types/utils';

type LottieAnimation = NotNull<IPlayerProps['lottieRef']>;
type Animation = ArgumentType<LottieAnimation>;

interface PlayerProps {
  play: boolean;
  animation: string;
  segments?: [number, number];
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
  const { play, segments, className, style, onLoad, onComplete } = props;

  const lottieRef = useRef<Animation | null>(null);

  useEffect(() => {
    if (play) {
      lottieRef.current?.show();

      if (Array.isArray(segments)) {
        lottieRef.current?.playSegments(segments, true);
      } else {
        lottieRef.current?.play();
      }
    }
  }, [play, segments]);

  const onLottieEvent = (event: any) => {
    switch (event) {
      case 'complete':
        lottieRef.current?.hide();
        lottieRef.current?.stop();
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
      lottieRef={e => (lottieRef.current = e)}
      className={className}
      style={style}
      onEvent={onLottieEvent}
      src={props.animation}
      speed={props.speed}
    />
  );
};
