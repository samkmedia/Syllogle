'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    function calc() {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight.getTime() - now.getTime();

      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      setTimeLeft(
        `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
      );
    }

    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-center border border-gray-200 rounded-xl p-4 bg-white">
      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">New puzzle at midnight</p>
      <p className="text-2xl font-bold text-gray-900 tabular-nums">{timeLeft}</p>
    </div>
  );
}
