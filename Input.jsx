import React from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";

const Input = () => {
  return(
      <div className='input'>
          <input type="text" placeholder='Aa'/>
          <div className="send">
              <img src="" alt=""/>
              <input type="file" style={{display:"none"}} id="file"/>
              <label htmlFor="file">
                  <img src="" alt=""/>
              </label>
              <button>Gửi</button>
          </div>
      </div>
  );
};

export default Input;