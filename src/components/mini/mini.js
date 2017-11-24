import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import './mini.css';

const Mini = ({
  miniShown,
  setMiniShown
}) => {

  const computeClassName = () => 'mini';
  return (
    <ReactModal 
      className={computeClassName()}
      isOpen={miniShown}
      onRequestClose={() => setMiniShown(false)} >
    </ReactModal>
  );
}

const mapStateToProps = ({ miniShown }) => ({ miniShown });

export default connect(mapStateToProps, null)(Mini);