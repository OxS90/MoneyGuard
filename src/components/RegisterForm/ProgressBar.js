import React, { useEffect, useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar-with-style-item';
import style from './ProgressBar.module.css';
const ProgressBar = ({ password }) => {
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    const calculatedStrength = calculatePasswordStrength(password);
    setStrength(calculatedStrength);
  }, [password]);

  const calculatePasswordStrength = password => {
    const passwordLength = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (passwordLength >= 8 && hasUppercase && hasLowercase && hasSpecialChar) {
      return 4; // Strong password
    } else if (passwordLength >= 8 && hasUppercase && hasLowercase) {
      return 3; // Good password
    } else if (passwordLength >= 6 && (hasUppercase || hasLowercase)) {
      return 2; // Okay password
    } else if (passwordLength > 5) {
      return 1; // Weak password
    } else {
      return 0; // Very weak password
    }
  };

  const scoreWords = ['Very Weak', 'Weak', 'Okay', 'Good', 'Strong'];
  const barColors = ['#ff0000', '#ff6600', '#ffcc00', '#99ff00', '#00ff00'];

  return (
    <div>
      <PasswordStrengthBar
        // className={style.ProgressBar}
        password={password}
        score={strength}
        scoreWords={scoreWords}
        barColors={barColors}
      />
    </div>
  );
};

export default ProgressBar;
