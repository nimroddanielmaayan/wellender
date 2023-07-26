import { useState, useContext } from 'react';
import { SuppsContext } from '../App';

function SuppEditForm({ currentSupp }) {
  const { editInputValue, handleEditChange, handleEditClick } =
    useContext(SuppsContext);

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
      <button>Cancel</button>
    </form>
  );
}
export default SuppEditForm;
