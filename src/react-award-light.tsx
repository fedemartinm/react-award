import lottie from 'lottie-web/build/player/lottie_light';
import { buildAward } from './components/award';

/**
 * Use this version if you are using react-award without any other lottie-based package
 * and you want to reduce the footprint that react-award leaves in your bundle.
 *
 * If you are using other lottie-based components, it is recommended that you use full/light
 * depending on the internal lottie dependency of those components.
 *
 * - - -
 *
 * This React component displays a solid color mask with the silhouette of an image,
 * and when triggered, it performs a fade-in effect to reveal the image.
 *
 * The component also plays a confetti animation.
 * The user can specify different images or animation files for the component to display.
 */
export const Award = buildAward(lottie);
