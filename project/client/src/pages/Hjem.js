import React from 'react';
import Posts from '../components/Posts';
import ViewSwitch from '../components/ViewSwitch';
import '../styles/nyheter.scss';

export default function Hjem() {
  return (
    <>
      <ViewSwitch />
      <Posts />
    </>
  );
}
