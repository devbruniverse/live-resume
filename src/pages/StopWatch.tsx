import { useState, useRef, useEffect } from 'react';
import Button, { ButtonType } from '@/components/basic/Button';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [pauseTime, setPauseTime] = useState(0);
  const [isTimeRunning, setIsTimeRunning] = useState<boolean>(false);
  const intervalRef: { current: NodeJS.Timeout | undefined } =
    useRef(undefined);

  // clean up on unmount
  useEffect(() => {
    document.title = 'Stopwatch!';

    return clearInterval(intervalRef?.current);
  }, []);

  function cleanUp() {
    setTime(0);
    setStartTime(0);
    setPauseTime(0);
    setIsTimeRunning(false);
  }

  function handleStart(resume: undefined | boolean = false) {
    let currentTime = Date.now();

    if (resume) {
      setStartTime(startTime + (currentTime - pauseTime));
      setPauseTime(0);
      setIsTimeRunning(true);
    } else {
      setTime(currentTime);
      setStartTime(currentTime);
      clearInterval(intervalRef.current);
      setIsTimeRunning(true);
    }

    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    }, 10);
  }

  function handleStop() {
    cleanUp();
    clearInterval(intervalRef.current);
  }

  function handlePause() {
    if (isTimeRunning) {
      setIsTimeRunning(false);
      clearInterval(intervalRef.current);
      setPauseTime(Date.now());
    } else {
      handleStart(true);
    }
  }

  function getFormatTime() {
    const miliseconds = time - startTime;
    const seconds = miliseconds / 1000;
    const displayMinutes = `${Math.floor(seconds / 60)}`.padStart(2, '0');
    const displaySeconds = `${Math.floor(seconds % 60)}`.padStart(2, '0');
    const displayMiliseconds = `${miliseconds}`.slice(-3);

    return (
      <>
        <span className="block w-12">{displayMinutes}</span>
        <span className="block w-12">:</span>
        <span className="block w-12">{displaySeconds}</span>
        <span className="block w-12">.</span>
        <span className="block w-12">{displayMiliseconds}</span>
      </>
    );
  }

  return (
    <>
      <h1>Time passed:</h1>
      <p className="flex flex-row text-3xl">{getFormatTime()}</p>
      <div className="flex flex-row gap-8">
        <Button type={ButtonType.PRIMARY} onClick={() => handleStart()}>
          Start
        </Button>
        <Button onClick={handlePause} disabled={time == 0}>
          {isTimeRunning ? 'Pause' : 'Resume'}
        </Button>
        <Button type={ButtonType.DANGER} onClick={handleStop}>
          Stop
        </Button>
      </div>
    </>
  );
}
