import React, { useState } from 'react';
import Posts from '../components/Posts';
import '../styles/nyheter.scss';

export default function Hjem() {
  const [view, setView] = useState('gridView');

  function clickHandler() {
    if (view === 'gridView') {
      setView('listView');
    } else {
      setView('gridView');
    }
    console.log(view);
  }

  return (
    <>
      <div className="mid">
        <label className="rocker rocker-small">
          <input type="checkbox" onClick={clickHandler} />
          <span className="switch-left"> Liste </span>
          <span className="switch-right"> Grid </span>
        </label>
      </div>
      <Posts cl={view} />
    </>
  );
}
