import React from 'react';
import Photos from '../components/Photos';

// bruker 3 forkjellige classnames i css
export default function Galleri() {
  return (
    <div className="galleriPhoto">
      <Photos className="photos" />
    </div>
  );
}
