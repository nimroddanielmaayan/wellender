import { useContext } from 'react';
import { SuppsContext } from '../App';

function SuppEditForm(supp) {
  const {} = useContext(SuppsContext);

  return (
    <form style={{ marginTop: '1.5vw' }}>
      <input type='text' placeholder='Edit supplement...' />
      <button type='submit'>Update</button>
      <button type='submit'>Cancel</button>
    </form>
  );
}
export default SuppEditForm;
