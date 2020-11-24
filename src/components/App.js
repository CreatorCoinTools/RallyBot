import React from 'react';

import '../style/app.css';

import logo from '../images/space.png';

const App = () => {
  return (
    <>
      <img className="logo" src={logo} alt="logo" />
      <h1>Build the best Discord Server!</h1>
      <h4>Qui occaecat labore elit anim incididunt quis reprehenderit.</h4>
      <div className="btn-container">
        <button className="btn-bg1">
          <a
            className="discord-a"
            href="https://discord.com/api/oauth2/authorize?client_id=769334375023640578&permissions=268438560&scope=bot"
          >
            <span>
              <i class="discord fab fa-discord"></i>
            </span>
            Add to Discord
          </a>
        </button>
        <button className="btn-bg2">See features</button>
      </div>
    </>
  );
};

export default App;
