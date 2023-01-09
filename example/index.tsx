import 'react-app-polyfill/ie11';
import '../dist/react-award.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import award from './images/award.svg';
import dog from './images/dog.svg';

import { Award } from '../.';

import * as confetti from './animations/confetti.json';
import * as lights from './animations/lights.json';

const App = () => {
  const [play, setPlay] = React.useState(false);

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <div>
        <Award play={play} image={award} animation={confetti} />
        <button
          style={{ width: '100%' }}
          onClick={() => {
            setPlay(true);
          }}
        >
          Click me
        </button>
      </div>
      <div>
        <Award
          image={dog}
          style={{
            height: 100,
            width: 100,
          }}
          playOnHover={true}
          animation={lights}
        />
        <p style={{ textAlign: 'center' }}>Play on hover</p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
