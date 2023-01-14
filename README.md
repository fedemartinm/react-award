![npm](https://img.shields.io/npm/v/react-award)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-award?color=green)

# React Award

This React component displays a solid color mask with the silhouette of an image, and when triggered, it performs a fade-in effect to reveal the image. Additionally, the component also plays a Lottie animation. 

Alternatively, a component can be passed as a child instead of an image, transition effects and lottie animation will be applied but the silhouette will not be displayed.

The idea behind this package is to add gamification to the applications we write by rewarding the user for achieving different achievements. I welcome any suggestions for including other gamification components in this library, feel free to contribute.


### Examples

Basic       |  Customized    |  Using placeholder
:-------------------------:|:-------------------------:|:-------------------------:
 <img src="https://user-images.githubusercontent.com/33937355/211485759-8ff43341-8efd-4b15-bb04-ab94842dba51.gif" data-canonical-src="https://user-images.githubusercontent.com/33937355/211485759-8ff43341-8efd-4b15-bb04-ab94842dba51.gif" width="200" height="200" /> |  <img src="https://user-images.githubusercontent.com/33937355/211487836-21ee4877-9aa4-4750-afe5-e5d890186e05.gif" data-canonical-src="https://user-images.githubusercontent.com/33937355/211487836-21ee4877-9aa4-4750-afe5-e5d890186e05.gif" width="200" height="200" /> | <img src="https://user-images.githubusercontent.com/33937355/211488215-6f432bde-373b-40b7-bd41-d810e91fd391.gif" data-canonical-src="https://user-images.githubusercontent.com/33937355/211488215-6f432bde-373b-40b7-bd41-d810e91fd391.gif" width="200" height="200" />


### Installation

```shell
yarn add react-award
```

or

```shell
npm install react-award --save
```

Please note that `@lottiefiles/react-lottie-player` is a peer dependency and must be installed in order to use this package.

### Basic Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Award } from 'react-award';

import 'react-award/dist/react-award.css';

// user-defined assets
// import image from './image.png';
// import animation from './lottie-animation.png';

const App = () => {
  return (
    <div className="app">
      <Award 
          playOnHover={true} 
          image={'https://raw.githubusercontent.com/fedemartinm/react-award/main/example/images/award.svg'}
          animation={'https://raw.githubusercontent.com/fedemartinm/react-award/main/example/animations/confetti.json'}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Customize animation size
```javascript
...
  <Award 
      playOnHover={true} 
      image={image} 
      animation={animation}
      playerStyle={{
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
    }}/>
```

### Customize image size

Image and mask image components default to width 100% and height 100%. You can change the image size
by changing the container size: 

```javascript
...
  <Award 
      playOnHover={true} 
      image={image} 
      animation={animation}
      style={{
          height: 200,
          width: 200,
    }}/>
```

You can check the example within the repository to see how the package can be utilized.

### Props

| Prop | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| image | string | The 'source' property of an image | It can be an imported asset or a URL string |
| animation | string | Lottie animation file | It can be an imported asset or a URL string |
| duration | number | Use this property to define the duration of the transition | It does not affect the duration of the animation |
| play | boolean | Set to 'true' to play the animation | This is ignored if 'playOnHover' is set to 'true' |
| playOnHover | boolean | If this is set to 'true', the animation will be triggered when the user moves the mouse over the component | | 
| backgroundColor | boolean | To change the mask color | | 
| showPlaceholder | boolean | Set this property to 'true' to show a placeholder effect when the animation is not ready to be displayed | | 
| speed | number | Animation speed | |
| segments | [ number, number ] | Use this property to play only specific segments of the animation | |
| style | CSSProperties | Container styles | | 
| imageStyle | CSSProperties | Image styles | | 
| maskStyle | CSSProperties | Mask styles | | 
| playerStyle | CSSProperties | Player styles | | 
| onComplete | () => void | Called when the lottie animation has finished | |



## Licence

[MIT](https://github.com/fedemartinm/react-award/blob/master/LICENSE)
