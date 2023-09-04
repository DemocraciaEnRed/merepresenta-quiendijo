import React, { useState } from 'react';
import Logo from "../logo";
import "./index.css";

const Countdown = ({ setIsLoading }) => {
  const [loadingNumber, setLoadingNumber] = useState(5);

  const onCountDown = () => {
    setLoadingNumber(loadingNumber-1)
    if (loadingNumber == 1)
      setIsLoading(false);
  };

  const numbers = {
    5: "FB2D11",
    4: "4BD6F7",
    3: "F7A334",
    2: "32F991",
    1: "9F47FC"
  };
  

  return <div>
    <Logo />
    <p className="ready">Empezamos en...</p>
    <p
      key={loadingNumber}
      className="centered countdown-number animate__animated animate__fadeOut"
      onAnimationEnd={onCountDown}
      style={{ color: `#${numbers[loadingNumber]}` }}
    >
      {loadingNumber}
    </p>
  </div>;
}

export default Countdown;