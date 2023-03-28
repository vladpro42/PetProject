import React from 'react';
import css from './RemoveButton.module.css';

const RemoveButton = ({ onClick, className, ...props }) => {
  return (
    <button onClick={onClick} className={[css.button, className].join(" ")} {...props}>
      <svg height="30" viewBox="0 96 960 960" width="30">
        <path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z" />
      </svg>
    </button>
  );
}

export default RemoveButton;