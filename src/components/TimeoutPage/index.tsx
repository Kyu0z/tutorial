import React, { useState, useEffect } from 'react';

const formatNumber = (number: number) => {
  return number < 10 ? `0${number}` : `${number}`;
};

const TimeoutPage: React.FC = () => {
  const calculateTimeLeft = () => {
    const deadline = new Date('2024-05-10');
    const currentTime = new Date();
    const difference = deadline.getTime() - currentTime.getTime();

    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        Ngày: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Giờ: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Phút: Math.floor((difference / 1000 / 60) % 60),
        Giây: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft.Giây === 0) {
        setTimeLeft((prevTimeLeft) => ({
          ...prevTimeLeft,
          Phút: prevTimeLeft.Phút - 1,
          Giây: 59,
        }));
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <div className='flex items-center' key={interval}>
        <div className='border solid border-black rounded-lg p-2 bg-yellow-400 text-center w-[4.5rem] h-[4.5rem] flex items-center mr-2'>
          <span className='text-lg font-bold text-white'>
            {formatNumber(timeLeft[interval as keyof typeof timeLeft])}{' '}
            {interval}
          </span>
        </div>
        {index < Object.keys(timeLeft).length - 1 && (
          <span className='text-3xl font-bold text-white mr-2'>:</span>
        )}
      </div>
    );
  });

  return (
    <div className='flex items-center justify-center'>
      {timerComponents.length ? (
        <div className='flex'>{timerComponents}</div>
      ) : (
        <span className='text-2xl font-bold'>Time's up!</span>
      )}
    </div>
  );
};

export default TimeoutPage;
