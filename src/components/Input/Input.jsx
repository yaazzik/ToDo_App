import React, { useState } from 'react';
import './Input.css';

function Input(props) {
  const {
    value,
    status = false,
    setTaskText,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  const onChangeHandler = (e) => {
    setTaskText(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onSelectHandler = (e) => {
    const { target } = e;
    setCaretPosition(target.selectionStart || 0);
  };

  const INPUT_MAX_LENGTH = 23 * 14.5;

  return (
      <div className="Input">
          <div className="caretWrapper">
              <input
                className="taskInput"
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                onSelect={onSelectHandler}
                placeholder="Сегодня надо..."
                title="todo"
                style={status ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
              />
              { isFocused
          && (
          <span
            className="caret"
            style={{
              left: `${caretPosition * 14.5 <= INPUT_MAX_LENGTH
                ? caretPosition * 14.5
                : INPUT_MAX_LENGTH}px`,
            }}
          />
          ) }
          </div>
      </div>

  );
}

export default Input;
