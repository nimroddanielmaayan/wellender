import { useContext } from 'react';
import { SuppsContext } from '../App';
import SuppEditForm from './SuppEditForm';
import { FaRegEdit } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';

function Supp({ supp }) {
  // Consuming the SuppsContext data
  const { handleSuppChange, handleSuppDelete, handleSuppEdit } =
    useContext(SuppsContext);

  return (
    <div key={supp.id} className='supp'>
      <input
        style={{ marginRight: '0.7vw', cursor: 'pointer' }}
        type='checkbox'
        checked={supp.isChecked}
        onChange={() => handleSuppChange(supp.id)}
      />
      {supp.suppName}
      <FaRegEdit
        onClick={() => handleSuppEdit(supp.id)}
        style={{ marginLeft: '2vw', cursor: 'pointer' }}
      />
      <TiDelete
        onClick={() => handleSuppDelete(supp.id)}
        style={{ marginLeft: '0.6vw', cursor: 'pointer' }}
      />
      {supp.isEditing && <SuppEditForm currentSupp={supp} />}
    </div>
  );
}

export default Supp;
