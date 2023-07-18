import { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';

function Vitamin({ id, vitaminName, isChecked, onChange }) {
  return (
    <label>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => onChange(id)}
      />
      {vitaminName} <FaRegEdit style={{ paddingLeft: '10px' }} /> <TiDelete />
    </label>
  );
}

export default Vitamin;
