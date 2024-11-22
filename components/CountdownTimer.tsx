'use client';

import React, { useState, useEffect } from 'react';

interface TimeRemainingBits {
  complete: boolean;
  seconds: number;
  minutes: number;
  hours: number;
}

const CountdownTimer: React.FC = () => {
  const [targetDate, setTargetDate] = useState<Date>(new Date());
  const [timeRemaining, setTimeRemaining] = useState<TimeRemainingBits>({
    complete: false,
    seconds: 0,
    minutes: 0,
    hours: 0
  });

  useEffect(() => {
    // Set target date to 5 hours from now
    const initialTargetDate = new Date();
    initialTargetDate.setHours(initialTargetDate.getHours() + 5);
    setTargetDate(initialTargetDate);
  }, []);

  useEffect(() => {
    const calculateTimeRemaining = (): TimeRemainingBits => {
      const nowTime = Date.now();
      const complete = nowTime >= targetDate.getTime();

      if (complete) {
        return {
          complete,
          seconds: 0,
          minutes: 0,
          hours: 0,
        };
      }

      const secondsRemaining = Math.floor(
        (targetDate.getTime() - nowTime) / 1000
      );
      const hours = Math.floor(secondsRemaining / 60 / 60);
      const minutes = Math.floor(secondsRemaining / 60) - hours * 60;
      const seconds = secondsRemaining % 60;

      return {
        complete,
        seconds,
        minutes,
        hours,
      };
    };

    const timer = setInterval(() => {
      const updatedTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(updatedTimeRemaining);

      if (updatedTimeRemaining.complete) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const renderTimeSegment = (value: number) => {
    const firstNumber = Math.floor(value / 10) || 0;
    const secondNumber = value % 10 || 0;

    return (
      <div className="time-group flex gap-2">
        {[firstNumber, secondNumber].map((digit, index) => (
          <div key={index} className="time-segment block w-24 text-9xl font-black">
            <div className="segment-display relative h-full">
              <div className="segment-display__top h-1/2 bg-gray-900 text-gray-200 text-center leading-relaxed">
                {digit}
              </div>
              <div className="segment-display__bottom h-1/2 bg-gray-700 text-white text-center">
                {digit}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="countdown flex justify-center items-center gap-8 my-24 font-sans">
      <div className="time-section text-center text-3xl">
        {renderTimeSegment(timeRemaining.hours)}
        <p>Hours</p>
      </div>
      <div className="time-section text-center text-3xl">
        {renderTimeSegment(timeRemaining.minutes)}
        <p>Minutes</p>
      </div>
      <div className="time-section text-center text-3xl">
        {renderTimeSegment(timeRemaining.seconds)}
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;