import React from "react";

function ColorCard({ name, isLight, lightClass, darkClass }) {
    const classDefault = 'color-card';
    let finalClass = ((isLight)?lightClass:darkClass)+' '+classDefault;
    return (
        <div className={finalClass}>
            <h3 className='color-cards__title'>{name}</h3>
            <p>{(isLight) ? 'light' : 'dark'}</p>
        </div>
    );
}

export default ColorCard;