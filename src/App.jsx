import React from 'react';
import deserts from './assets/json/deserts.json';
import image from './assets/images/image-baklava-desktop.jpg';

const App = () => {
  return (
    <main>
      <div className='container'>
        <div className='left'>
          <h1>Desserts</h1>
          <div className='left-row'>
            {deserts.map((desert, index) => (
              <div className='desert-col' key={index}>
                <div className='desert-img'>
                  <img src={image} alt='' />
                  <button>Add to cart</button>
                </div>
                <div className='desert-content'>
                  <h3>{desert.category}</h3>
                  <h2>{desert.title}</h2>
                  <span>{desert.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='right'></div>
      </div>
    </main>
  );
};

export default App;
