import React, { Fragment } from 'react';
import './App.css';
import PersonalCard from "./components/PersonalCard";
import ColorCard from "./components/ColorCard";
function App() {
  return (
    <div className='color-cards-container'>
      {/* <PersonalCard nombre='Robin' apellido='Hurtado'>
        <p><b>Profesion: </b> Front end developer</p>
      </PersonalCard>
      <PersonalCard nombre='Robin' apellido='Hurtado' /> */}
      <ColorCard
        name="Blue"
        isLight={true}
        lightClass="color-blue--light"
        darkClass="color-blue"
      />
      <ColorCard
        name="Blue"
        isLight={false}
        lightClass="color-blue--light"
        darkClass="color-blue"
      />
      <ColorCard
        name="Red"
        isLight={true}
        lightClass="color-red--light"
        darkClass="color-red"
      />
      <ColorCard
        name="Red"
        isLight={false}
        lightClass="color-red--light"
        darkClass="color-red"
      />
    </div>
  );
}



export default App;
