import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import './mini.css';

const MiniGrids = ({
  boxSize,
  handleClickMini
}) => {
  const gridCnt = boxSize ** 2;
  const width = `${1 / boxSize * 100}%`;
  const height = `${1 / (boxSize + 1) * 100}%`;
  const miniGridStyle = { width, height };
  return Array.from({ length: gridCnt }).map((_, i) => (
    <div
      key={i}
      className="mini-grid"
      style={miniGridStyle}
      onClick={handleClickMini}>
      {i + 1}
    </div>
  ));
};

const SpecialGrid = ({
  boxSize,
  handleClickMini,
  value
}) => {
  const width = `${1 / boxSize * 100}%`;
  const height = `${1 / (boxSize + 1) * 100}%`;
  const style = { width, height };
  return (
    <div
      className="special-grid"
      style={style}
      onClick={handleClickMini} >
      {value}
    </div>
  );
};
const SpecialGrids = ({
  boxSize,
  handleClickMini
}) => (
  Array.from({ length: boxSize }).map((_, i) => {
    let value = null;
    switch (i) {
      case 0:
        value = '?';
        break;
      case 1:
        value = 'X';
        break;
      default:
        value = '';
    }
    return (
      <SpecialGrid
        key={i}
        boxSize={boxSize}
        handleClickMini={handleClickMini}
        value={value} />
    );
  })
);

const Mini = ({
  boxSize,
  miniShown,
  setMiniShown,
  handleClickMini
}) => (
  <ReactModal
    className="mini"
    isOpen={miniShown}
    onRequestClose={() => setMiniShown(false)}
    ariaHideApp={false}>
    <MiniGrids 
      boxSize={boxSize} 
      handleClickMini={handleClickMini} />
    <SpecialGrids
      boxSize={boxSize}
      handleClickMini={handleClickMini} />
  </ReactModal>
);

const mapStateToProps = ({ miniShown }) => ({ miniShown });

export default connect(mapStateToProps, null)(Mini);