import { useEffect, useState } from 'react';

function App() {
  const [vitaminA, setVitaminA] = useState(false);
  const [vitaminB, setVitaminB] = useState(false);
  const [vitaminC, setVitaminC] = useState(false);

  useEffect(() => {
    localStorage.getItem('vitaminA') === 'true'
      ? setVitaminA(true)
      : setVitaminA(false);
    localStorage.getItem('vitaminB') === 'true'
      ? setVitaminB(true)
      : setVitaminB(false);
    localStorage.getItem('vitaminC') === 'true'
      ? setVitaminC(true)
      : setVitaminC(false);
  }, []);

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
                onChange={() => {
                  localStorage.setItem('vitaminA', (!vitaminA).toString());
                  setVitaminA(!vitaminA);
                }}
              />
              Vitamin A
            </label>
            <label>
              <input
                type='checkbox'
                checked={vitaminB}
                onChange={() => {
                  localStorage.setItem('vitaminB', (!vitaminB).toString());
                  setVitaminB(!vitaminB);
                }}
              />
              Vitamin B
            </label>
            <label>
              <input
                type='checkbox'
                checked={vitaminC}
                onChange={() => {
                  localStorage.setItem('vitaminC', (!vitaminC).toString());
                  setVitaminC(!vitaminC);
                }}
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
                localStorage.setItem('vitaminA', 'false');
                setVitaminA(false);
                localStorage.setItem('vitaminB', 'false');
                setVitaminB(false);
                localStorage.setItem('vitaminC', 'false');
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
