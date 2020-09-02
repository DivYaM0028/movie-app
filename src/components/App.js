import React from 'react';
import {data} from '../data';
import Navbar from './Navbar'
function App() {
  return (
    <div className="App">
      <Navbar / >
        <div className="main">
          <div className="tabs">
            <div className="tabs">Movies</div>
            <div className="tabs">Fav</div>
          </div>

            <div className="list">
              {data.map(movie => (
                <MoviCard movie={movie}/>
              ))}  
            </div> 

        </div>
    </div>
  );
}

export default App;
