![npm](https://img.shields.io/npm/v/react-award)

# React Award

This React component displays a solid color mask with the silhouette of an image, and when triggered, it performs a fade-in effect to reveal the image. Additionally, the component also plays a Lottie animation. 

Alternatively, a component can be passed as a child instead of an image, transition effects and lottie animation will be applied but the silhouette will not be displayed.

The idea behind this package is to add gamification to the applications we write by rewarding the user for achieving different achievements. I welcome any suggestions for including other gamification components in this library, feel free to contribute.

👉 The standalone use of this library (if you are not using lottie-web or any wrapper) is `291kb` for the full version and `164kb` for the light version. It is compatible with packages `lottie-react`, `@LottieFiles/lottie-react` and `react-lottie-player`, and using it together only adds a few extra kilobytes to your bundle. Check the "Compatibility and performance" section for more information.

### Examples
 
 Basic       |   Custom component   
:-------------------------:|:-------------------------:
 <img src="https://user-images.githubusercontent.com/33937355/211485759-8ff43341-8efd-4b15-bb04-ab94842dba51.gif" data-canonical-src="https://user-images.githubusercontent.com/33937355/211485759-8ff43341-8efd-4b15-bb04-ab94842dba51.gif" width="200" height="200" /> | <img src="https://user-images.githubusercontent.com/33937355/212456822-a3c1347c-1584-4cfa-ba1c-e1ba930bba57.gif" data-canonical-src="https://user-images.githubusercontent.com/33937355/212456822-a3c1347c-1584-4cfa-ba1c-e1ba930bba57.gif" width="200" height="200" />
 Customized       |   Using placeholder  
<img src="https://user-images.githubusercontent.com/33937355/211487836-21ee4877-9aa4-4750-afe5-e5d890186e05.gif" data-canonical-src="https://user-images.githubusercontent.com/33937355/211487836-21ee4877-9aa4-4750-afe5-e5d890186e05.gif" width="200" height="200" /> |  <img src="https://user-images.githubusercontent.com/33937355/211488215-6f432bde-373b-40b7-bd41-d810e91fd391.gif" data-canonical-src="https://user-images.githubusercontent.com/33937355/211488215-6f432bde-373b-40b7-bd41-d810e91fd391.gif" width="200" height="200" /> 

### Installation

```shell
yarn add react-award
```

or

```shell
npm install react-award --save
```

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

### Compatibility and performance
If you are already using lottie animations in your project, it is likely that you have installed packages `lottie-react`, `@LottieFiles/lottie-react` or `react-lottie-player`. Since those packages and react-award are based on lottie-web, you will not have any issues with the size of the application.

Keep in mind the following points to reduce the size of your bundle:
- Use the same version of lottie in react-award and in your lottie wrapper. 
  For example:
  ```javascript
  import LottiePlayer from 'react-lottie-player/dist/LottiePlayerLight';
  ...
  // previous import works well with:
  import { Award } from 'react-award/dist/react-award-light';
  ```
- Use the lightweight version of react-award if you don't have other animations
  For example:
  ```javascript
  import { Award } from 'react-award/dist/react-award-light';
  ```


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
