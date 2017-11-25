import React from 'react';

import './controller.css';

const Controller = ({
  check,
  uncheck,
  reset,
  restart
}) => (
  <div className="btn-group controller">
    <button className="btn" onClick={check}>Check</button>
    <button className="btn" onClick={uncheck}>Uncheck</button>
    <button className="btn" onClick={reset}>Reset</button>
    <button className="btn" onClick={restart}>Restart</button>
  </div>
);

export default Controller;