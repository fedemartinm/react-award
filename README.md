![npm](https://img.shields.io/npm/v/react-award)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-award?color=green)

# React AWard

This React component displays a solid color mask with the silhouette of an image, and when triggered, it performs a fade-in effect to reveal the image. Additionally, the component also plays a Lottie animation.

The idea behind this package is to add gamification to the applications we write by rewarding the user for achieving different achievements. I welcome any suggestions for including other gamification components in this library, feel free to contribute.

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

import image from './image.png';
import animation from './lottie-animation.png';

const App = () => {
  return (
    <div className="app">
      <Award playOnHover={true} image={image} animation={animation} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Props

| Prop | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
|      |      |             |       |

## Licence

[MIT](https://github.com/fedemartinm/react-award/blob/master/LICENSE)
