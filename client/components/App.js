import React from 'react';
import Header from './Header';

const App = (props) => {
  return (
    //class name container keeps mateialize happy
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
};

export default App;
