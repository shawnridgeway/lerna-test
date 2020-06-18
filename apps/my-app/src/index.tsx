import React from 'react';
import { render } from 'react-dom';
import Timer from '@lerna-test/timer';
import MultiDiv from '@lerna-test/multi-div';

const App = () => {
  return (
    <>
      <Timer 
        start={30}
      />
      <MultiDiv times={3}>
        <p>Awesome!!</p>
      </MultiDiv>
    </>
  );
}

render(App(), document.getElementById('root'));

