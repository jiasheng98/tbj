import {useEffect, useRef, useState} from 'react';
import 'react-circular-progressbar/dist/styles.css';
import {useSpring, animated} from 'react-spring';
import { Puff } from 'react-loading-icons'

const Loader = () => {

  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  })

  return (
    <div className="loader-container">
      
      <div class="boxes">
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
    </div>
  );
};

export default Loader;
