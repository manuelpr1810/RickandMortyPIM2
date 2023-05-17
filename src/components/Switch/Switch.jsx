import React from 'react';

const ToggleSwitch = ({ isDarkMode, onToggle }) => {
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={onToggle}
      />
      <span className="toggle-slider"></span>
    </label>
  );
};

export default ToggleSwitch;