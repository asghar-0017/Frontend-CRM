import React from 'react';
import '../../css/Send.css'; 
import { IoSend } from "react-icons/io5";

const SendButton = () => {
  return (
    <button className="icon-button" style={{height: "100%"}}>
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <div className='send'>
          <IoSend />
          </div>
        </div>
      </div>
      <span>Send</span>
    </button>
  );
};

export default SendButton;
