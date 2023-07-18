import { useEffect, useState } from 'react';
import Vitamin from './components/Vitamin';

// Main state array - needs to be persisted
function App() {
  const [vitamins, setVitamins] = useState([
    { id: 1, vitaminName: 'Vitamin A', isChecked: false },
    { id: 2, vitaminName: 'Vitamin B', isChecked: false },
    { id: 3, vitaminName: 'Vitamin C', isChecked: false },
    { id: 4, vitaminName: 'Vitamin A', isChecked: false },
  ]);

  // This also needs to be persisted
  let nextVitaminId = 5;

  // Run on page load
  useEffect(() => {}, []);

  const handleVitaminChange = (id) => {
    setVitamins((prevVitamins) =>
      prevVitamins.map((vitamin) =>
        vitamin.id === id
          ? { ...vitamin, isChecked: !vitamin.isChecked }
          : vitamin
      )
    );
  };

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`You entered: "${inputValue}"`);
    setInputValue('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Clear all of the vitamins
  function uncheckAllVitamins() {
    setVitamins((prevVitamins) => {
      return prevVitamins.map((vitamin) => ({ ...vitamin, isChecked: false }));
    });
  }

  return (
    <>
      <div className='maindiv'>
        <div className='vitamins'>
          <h1>Today's Nutritional Supplements</h1>
          <div>
            {vitamins.map((vitamin) => (
              <Vitamin
                key={vitamin.id}
                id={vitamin.id}
                vitaminName={vitamin.vitaminName}
                isChecked={vitamin.isChecked}
                onChange={handleVitaminChange}
              />
            ))}
          </div>
          <button className='refresh' onClick={() => uncheckAllVitamins()}>
            <img src='refresh.png' alt='refresh' />
          </button>
          <form className='newVitaminForm' onSubmit={handleSubmit}>
            <input
              type='text'
              value={inputValue}
              onChange={handleChange}
              placeholder='Enter a new supplement...'
            />
            <button type='submit'>Add Supplement</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
