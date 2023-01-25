import React, { CSSProperties, useEffect, useRef } from 'react';
import { LottiePlayer, AnimationItem } from 'lottie-web';

export interface PlayerProps {
  lottie: LottiePlayer;
  play: boolean;
  animation: any;
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
  const { animation, play, segments, className, style, speed } = props;

  const animationRef = useRef<AnimationItem | null>(null);
  const containerRef = useRef<any>(null);

  // animation loader
  useEffect(() => {
    animationRef.current = props.lottie.loadAnimation({
      autoplay: false,
      loop: false,
      animationData: props.animation,
      renderer: 'svg',
      container: containerRef.current,
    });

    return () => {
      animationRef.current?.destroy();
      animationRef.current = null;
    };
  }, [animation]);

  // event handlers
  useEffect(() => {
    if (!animationRef.current) {
      return;
    }
    const onLoad = () => {
      animationRef.current?.hide();
      animationRef.current?.stop();
      props.onLoad?.call(null);
    };
    const onComplete = () => {
      animationRef.current?.hide();
      animationRef.current?.stop();
      props.onComplete?.call(null);
    };

    animationRef.current.addEventListener('DOMLoaded', onLoad);
    animationRef.current.addEventListener('complete', onComplete);

    return () => {
      animationRef.current?.removeEventListener('DOMLoaded', onLoad);
      animationRef.current?.removeEventListener('complete', onComplete);
    };
  }, [props.onLoad, props.onComplete]);

  useEffect(() => {
    if (play) {
      animationRef.current?.show();
      animationRef.current?.setSpeed(speed || 1);
      if (Array.isArray(segments)) {
        animationRef.current?.playSegments(segments, true);
      } else {
        animationRef.current?.play();
      }
    }
  }, [play, segments, speed]);

  return <div style={style} className={className} ref={containerRef} />;
};
