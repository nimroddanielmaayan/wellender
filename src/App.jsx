import { useState } from 'react';

function App() {
  const [vitaminA, setVitaminA] = useState(false);
  const [vitaminB, setVitaminB] = useState(false);
  const [vitaminC, setVitaminC] = useState(false);

  return (
    <>
      <div className='maindiv'>
        <div className='vitamins'>
          <h1>Today's Vitamins</h1>
          <div>
            <label>
              <input
                type='checkbox'
                checked={vitaminA}
                onChange={() => setVitaminA(!vitaminA)}
              />
              Vitamin A
            </label>
            <label>
              <input
                type='checkbox'
                checked={vitaminB}
                onChange={() => setVitaminB(!vitaminB)}
              />
              Vitamin B
            </label>
            <label>
              <input
                type='checkbox'
                checked={vitaminC}
                onChange={() => setVitaminC(!vitaminC)}
              />
              Vitamin C
            </label>
          </div>
          <div>
            <img
              className='refresh'
              src='refresh.png'
              alt='refresh'
              onClick={() => {
                setVitaminA(false);
                setVitaminB(false);
                setVitaminC(false);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
