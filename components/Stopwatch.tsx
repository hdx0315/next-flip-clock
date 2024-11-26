'use client';

import React, { useState, useEffect } from 'react';
import FlipCard from './FlipCard';
import Link from 'next/link';

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inp, setInp] = useState(false);
  const [customTime, setCustomTime] = useState(''); // For the input field value

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => setTime((time) => time + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTimeUnit = (unit: number) => unit.toString().padStart(2, '0');

  const hours = formatTimeUnit(Math.floor(time / 3600));
  const minutes = formatTimeUnit(Math.floor((time % 3600) / 60));
  const seconds = formatTimeUnit(time % 60);

  const handleSetCustomTime = () => {
    const newTime = parseInt(customTime, 10);
    if (!isNaN(newTime) && newTime >= 0) {
      setTime(newTime);
      setInp(false); // Close the input field
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-black relative p-4">
      {/* Timer Display */}
      <div className="flex flex-col xl:flex-row">
        {/* Hours and Minutes Section */}
        <div className="flex flex-col md:flex-row justify-center items-center bg-black p-4 pb-0 sm:pb-0 md:pb-2 sm:p-6 md:p-8 xl:pr-0 xl:py-0 rounded-xl">
          {/* Hours */}
          <div className="flex mb-4 md:mb-0">
            <FlipCard digit={hours[0]} />
            <FlipCard digit={hours[1]} />
          </div>
          {/* Colon */}
          <span className="hidden md:block text-2xl md:text-4xl mx-2 text-white">:</span>
          {/* Minutes */}
          <div className="flex mb-4 md:mb-0">
            <FlipCard digit={minutes[0]} />
            <FlipCard digit={minutes[1]} />
          </div>
          {/* Colon */}
          <span className="hidden xl:block text-2xl md:text-4xl mx-2 text-white">:</span>
        </div>

        {/* Seconds Section */}
        <div className="flex flex-col md:flex-row justify-center items-center bg-black p-4 pt-0 sm:pt-0 md:pt-2 sm:p-6 md:p-8 xl:pl-0 xl:py-0 rounded-xl">
          <div className="flex">
            <FlipCard digit={seconds[0]} />
            <FlipCard digit={seconds[1]} />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-8 right-8 space-x-4 flex flex-wrap justify-end">
        {/* Toggle Input Field 
        <button
          className="bg-transparent border-2 border-transparent hover:border-gray-600 text-gray-600 font-bold py-2 px-4 rounded mb-2 sm:mb-0"
          onClick={() => setInp(!inp)}
        >
          .
        </button>
        {inp && (
          <div className="flex items-center space-x-2">
            <input
              type="text"
              name="time"
              id="time"
              value={customTime}
              onChange={(e) => setCustomTime(e.target.value)}
              placeholder="Enter seconds"
              className="text-white bg-black px-2 py-1 border-2 border-white rounded"
            />
            <button
              className="bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
              onClick={handleSetCustomTime}
            >
              Set
            </button>
          </div>
        )} */}
        {/* Start/Pause Button */}
        <button
          className="bg-transparent border-2 border-transparent hover:border-green-500 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        {/* Reset Button */}
        <button
          className="bg-transparent border-2 border-transparent hover:border-red-500 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0"
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
        {/* Back to Clock Link */}
        <Link href="/" className="mt-2 sm:mt-0">
          <button className="bg-transparent text-white font-bold py-2 px-4 rounded border-2 border-transparent hover:border-sky-500">
            Back to Clock
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Stopwatch;
