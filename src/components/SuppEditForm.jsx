import { useState, useContext } from 'react';
import { SuppsContext } from '../App';

function SuppEditForm({ currentSupp }) {
  const { setSupps } = useContext(SuppsContext);

  /* Update the supplement's name */

  // Edit supplement form - state
  const [editInputValue, setEditInputValue] = useState('');

  // Handle edit supplement form - input
  const handleEditChange = (event) => {
    setEditInputValue(event.target.value);
  };

  // Handle edit supplement form - submission
  const handleEditClick = (event, currentSupp) => {
    event.preventDefault();

    if (editInputValue !== '') {
      setSupps((prevSupps) =>
        prevSupps.map((supp) =>
          supp.id === currentSupp.id
            ? { ...supp, suppName: editInputValue, isEditing: false }
            : supp
        )
      );

      setEditInputValue('');
    }
  };

  // Handle edit supplement form - cancel
  const handleCancelClick = (event, currentSupp) => {
    event.preventDefault();

    setSupps((prevSupps) =>
      prevSupps.map((supp) =>
        supp.id === currentSupp.id ? { ...supp, isEditing: false } : supp
      )
    );

    setEditInputValue('');
  };

  return (
    <form style={{ marginTop: '1.5vw' }}>
      <input
        type='text'
        placeholder='Edit supplement...'
        value={editInputValue}
        onChange={handleEditChange}
      />
      <button onClick={(event) => handleEditClick(event, currentSupp)}>
        Update
      </button>
      <button onClick={(event) => handleCancelClick(event, currentSupp)}>
        Cancel
      </button>
    </form>
  );
}
export default SuppEditForm;
