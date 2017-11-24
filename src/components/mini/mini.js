import React from 'react';
import ReactModal from 'react-modal';

const Mini = ({
  miniShown,
  setMiniShown
}) => {

  return (
    <ReactModal 
      isOpen={miniShown}
      contentLabel="Minimal Modal Example" >
      <button onClick={() => setMiniShown(false)}>Close Modal</button>
    </ReactModal>
  );
}

export default Mini;