/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Laps from './Laps';
import './Timer.scss';

const Timer = () => {
  
  const [str, setStr] = useState(true);
  const [launch, setLaunch] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [miliseconds, setMiliseconds] = useState(0);
  const [smallMiliseconds, setSmallMiliseconds] = useState(0);

  const [laps, setLaps] = useState([]);
  const [useReset, setUseReset] = useState(false);

  let timer;

  useEffect(() => {

    if (launch) {
      timer = setInterval(() => {
        setSmallMiliseconds(smallMiliseconds + 1);

        if (smallMiliseconds === 99) {
          setMiliseconds(miliseconds + 1);
          setSmallMiliseconds(0)
        }
  
        if (miliseconds === 9) {
          setSeconds(seconds + 1);
          setMiliseconds(0)
        }
  
        if (seconds === 59) {
          setMinutes(minutes + 1)
          setSeconds(0)
        }
      }, 1)
    }

    return () => clearInterval(timer)

  });

  const start = () => {
    setStr(false);
    setLaunch(!launch);
    setUseReset(true)
  }

  const restart = () => {
    if (useReset) {
      const message = window.confirm("Do you want reset?")

      if (message) {
        setLaunch(false);
        setSeconds(0);
        setMinutes(0);
        setMiliseconds(0);
        setSmallMiliseconds(0);
        setLaps([]);
        setUseReset(false);
      }
    }
  }

  const addLap = () => {
    const newLap = {
      id: laps.length + 1,
      min: minutes,
      sec: seconds,
      mis: miliseconds,

    }

    setLaps([...laps, newLap])
  }

  return (
    <div className='timer'>
      <div className='container'>
        <div className='timer__container'>
          <h1>Timer</h1>
          <div className='box'>
            <div className='box__container'>
              <div className='box__number'>{minutes < 10 ? '0' + minutes : minutes}</div>
              :
              <div className='box__number'>{seconds < 10 ? '0' + seconds : seconds} </div>
              .
              <div className='box__number box__number-mili'>{miliseconds} </div>
              <div className='little-numbers'>{smallMiliseconds < 10 ? '0' + smallMiliseconds : smallMiliseconds}</div>
            </div>
          </div>

          <Buttons
            start={start}
            restart={restart}
            addLap={addLap}
            str={str}
            launch={launch}
            useReset={useReset}
          />

          {laps.length > 0 && <Laps laps={laps} />}
        </div>
      </div>
      
    </div>
  );
};

export default Timer;