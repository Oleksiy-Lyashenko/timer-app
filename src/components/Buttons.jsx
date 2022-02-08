import React from 'react';
import classNames from 'classnames';

const Buttons = ({
  start,
  restart,
  addLap,
  deleteLaps,
  str,
  launch,
  useReset,
}) => {

  return (
    <div className='button-container'>
      <button
        className='button button--start button--active'
        onClick={start}
      >
        {launch ? 'Stop' : 'Start'}
      </button>

      <button
        className={
          classNames('button', 
          {'button--reset': (!launch && useReset)},
          {'button--active': (!launch && useReset)},
          {'button--disabled': (launch && useReset)}
        )}
        onClick={restart}
        disabled={launch}
      >
        Reset
      </button>

      <button
        className={classNames('button', {'button--lap': launch}, {'button--disabled': !launch}, {'button--active': launch})}
        onClick={addLap}
        disabled={!launch}
      >
        Lap
      </button>
    </div>
  );
};

export default Buttons;