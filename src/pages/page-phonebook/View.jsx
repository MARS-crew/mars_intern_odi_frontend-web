import React from 'react';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'

function View(props) {
  const { values } = props;

  return (
    <>
    {Object.values(values).map((values) => (
        <tr key={values.idx} >
          <td>{values.idx}</td>
          <td>{values.name}</td>
          <td>{values.number}</td>
          <td className='delete-btn' onClick={() => props.deletenum(values.idx)}>
            <Icon icon={trash}/>
          </td>
        </tr>
    ))}
  </>

  );
}

export default View
