import React, { useState, useEffect } from 'react';

import { ToggleContainer, Option } from './style';

interface ToggleProps {
  options: string[];
  isDuplicate: boolean;
  onActiveChange?: (active: string[]) => void;
}

const Toggle: React.FC<ToggleProps> = ({
  options,
  isDuplicate,
  onActiveChange,
}) => {
  const [active, setActive] = useState<string[]>([options[0]]);

  useEffect(() => {
    onActiveChange?.(active);
  }, [active, onActiveChange]);

  const handleToggle = (option: string) => {
    if (isDuplicate) {
      setActive((prevActive) => {
        return prevActive.includes(option)
          ? prevActive.filter((target) => target !== option) // Remove option if it exists
          : [...prevActive, option]; // Add option if it doesn't exist
      });
    } else {
      setActive([option]);
    }
  };

  return (
    <ToggleContainer>
      <Option
        isSelected={active.includes(options[0])}
        onClick={() => handleToggle(options[0])}
      >
        {options[0]}
      </Option>
      <Option
        isSelected={active.includes(options[1])}
        onClick={() => handleToggle(options[1])}
      >
        {options[1]}
      </Option>
    </ToggleContainer>
  );
};

export default Toggle;
