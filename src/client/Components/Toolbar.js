
import React from 'react';
import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <header>
      <div>

        <section>
          <nav className="tab-bar">
            <NavLink exact to="/" className="tab" activeStyle={{color: 'green'}}>Главная</NavLink>
            <NavLink to="/profile" className="tab" activeStyle={{color: 'green'}}>Профаил</NavLink>
            <NavLink to="/trips" className="tab" activeStyle={{color: 'green'}}>Путешествия</NavLink>
            
          </nav>
        </section>
      </div>
    </header>
  );
}

export default Toolbar;