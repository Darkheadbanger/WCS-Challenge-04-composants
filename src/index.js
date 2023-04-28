import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let Contact = () => {
  return (
    <div>
      <h1 className="text-center">My contacts list 📱</h1>
      <div id="container">
        <div className="friend-item">
          <div className="contact-info">
            <h3>
              Emmanuel <br />
            </h3>
            <h4>
              emmanuel@email.com <br />
              📞234234234
            </h4>
          </div>
          <button className="delete-btn">Delete</button>
        </div>
        <div className="friend-item">
          <div className="contact-info">
            <h3>
              Johana <br />
            </h3>
            <h4>
              johana@email.com <br />
              📞123123
            </h4>
          </div>
          <button className="delete-btn">Delete</button>
        </div>
        <div className="friend-item">
          <div className="contact-info">
            <h3>
              Lucas <br />
            </h3>
            <h4>
              lucas@email.com <br />
              📞6764563456
            </h4>
          </div>
          <button className="delete-btn">Delete</button>
        </div>
        <div className="friend-item">
          <div className="contact-info">
            <h3>
              Marie <br />
            </h3>
            <h4>
              emmanuel@email.com <br />
              📞12125465
            </h4>
          </div>
          <button className="delete-btn">Delete</button>
        </div>
        <div className="friend-item">
          <div className="contact-info">
            <h3>
              Pedro <br />
            </h3>
            <h4>
              pedro@email.com <br />
              📞34634571234
            </h4>
          </div>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export const App = (
  // write your React Code here
  <div>
    <Contact />,
    <Contact />,
    <Contact />,
    <Contact />,
    <Contact />
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
