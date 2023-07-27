import { useState, createContext } from 'react';
import Supp from './components/Supp';

// Note: It's possible and also recommended to create a seperate file for the app's entire context, instead of doing it in the App.jsx file, like I did here. Also, it's possible to add custom hooks to the context, which is a good idea if you want to keep your code DRY

// Create and export a context for all of the app's global state\functions
export const SuppsContext = createContext();

function App() {
  /* App-Wide State */

  // Main data array state
  const [supps, setSupps] = useState([
    { id: 1, suppName: 'Vitamin A', isChecked: false, isEditing: false },
    { id: 2, suppName: 'Vitamin B', isChecked: false, isEditing: false },
    { id: 3, suppName: 'Vitamin C', isChecked: false, isEditing: false },
    { id: 4, suppName: 'Vitamin D', isChecked: false, isEditing: false },
    { id: 5, suppName: 'Vitamin E', isChecked: false, isEditing: false },
  ]);

  // Next supplement's ID state
  const [nextSuppId, setNextSuppId] = useState(6);

  /* Supplement checkboxes + edit\delete functions */

  // Handle checkbox change
  const handleSuppChange = (id) => {
    setSupps((prevSupps) =>
      prevSupps.map((supp) =>
        supp.id === id ? { ...supp, isChecked: !supp.isChecked } : supp
      )
    );
  };

  // Handle supplement edit

  // Stage 1: Toggle edit mode (is passed to the Supp component)
  const handleSuppEdit = (id) => {
    setSupps((prevSupps) =>
      prevSupps.map((supp) =>
        supp.id === id ? { ...supp, isEditing: !supp.isEditing } : supp
      )
    );
  };

  // Handle supplement delete
  const handleSuppDelete = (id) => {
    setSupps((prevSupps) => prevSupps.filter((supp) => supp.id !== id));
  };

  /* Clear supplements button */

  // Clear all the supplements
  function uncheckAllSupps() {
    setSupps((prevSupps) => {
      return prevSupps.map((supp) => ({ ...supp, isChecked: false }));
    });
  }

  /* New Supplement form */

  // New supplement form - state
  const [inputValue, setInputValue] = useState('');

  // Handle new supplement form input
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle new supplement form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue !== '') {
      setSupps((prevSupps) => [
        ...prevSupps,
        {
          id: nextSuppId,
          suppName: inputValue,
          isChecked: false,
          isEditing: false,
        },
      ]);

      setNextSuppId((prevNextSuppId) => prevNextSuppId + 1);

      setInputValue('');
    }
  };

  return (
    <SuppsContext.Provider
      value={{
        handleSuppChange,
        handleSuppDelete,
        handleSuppEdit,
        setSupps,
      }}
    >
      <div className='maindiv'>
        <div className='supps'>
          <h1>Today's Nutritional Supplements</h1>
          <div>
            {supps.map((supp) => (
              <Supp supp={supp} key={supp.id} />
            ))}
          </div>
          <button className='refresh' onClick={() => uncheckAllSupps()}>
            <img src='refresh.png' alt='refresh' />
          </button>
          <form className='newSuppForm' onSubmit={handleSubmit}>
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
    </SuppsContext.Provider>
  );
}

export default App;
