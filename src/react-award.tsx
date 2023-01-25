import lottie from 'lottie-web';
import { buildAward } from './components/award';

/**
 * This React component displays a solid color mask with the silhouette of an image,
 * and when triggered, it performs a fade-in effect to reveal the image.
 *
 * The component also plays a confetti animation.
 * The user can specify different images or animation files for the component to display.
 */
export const Award = buildAward(lottie);
