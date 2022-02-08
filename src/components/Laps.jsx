import React from 'react';
import './Laps.scss';

const Laps = ({laps}) => {
  return (
    <div className='laps'>
      {laps.map(lap => {
        return (
          <div key={lap.id} className='laps__item'>
            <span className='laps__number'>#{lap.id}</span>
            <div>{lap.min} : {lap.sec} : {lap.mis}</div>
          </div>
        )
      })}
    </div>
  );
};

export default Laps;