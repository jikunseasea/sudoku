import React from 'react';
import { connect } from 'react-redux';

import ReactModal from 'react-modal';

import './success.css';

const Success = ({
  successShown,
  setSuccessShown
}) => (
  <ReactModal
    className="success"
    isOpen={successShown}
    onRequestClose={() => setSuccessShown(false)}>
    <p>Congraduations!</p>
    <p>You win~</p>
  </ReactModal>
);


const mapStateToProps = ({ successShown }) => ({ successShown });

export default connect(mapStateToProps)(Success);