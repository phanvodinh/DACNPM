import React from "react";
import Add from "../img/img.png";


const Chatss = () => {
  return(
      <div className='chatss'>
          <div className="userChat">
              <img src={Add} alt=""/>
              <div className="userChatInfo">
                  <span>Nhl</span>
                  <p>Hello</p>
              </div>
          </div>
          <div className="userChat">
              <img src={Add} alt=""/>
              <div className="userChatInfo">
                  <span>Nhl</span>
                  <p>Hello</p>
              </div>
          </div>
          <div className="userChat">
              <img src={Add} alt=""/>
              <div className="userChatInfo">
                  <span>Nhl</span>
                  <p>Hello</p>
              </div>
          </div>

      </div>
  );
};

export default Chatss;