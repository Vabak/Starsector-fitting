import React from 'react';

const WeaponDescription = ( props ) => {
  return (
      <div>
        <h2>Weapon name</h2>
        <span>Design type?</span>
        <p>Description</p>
        <div>Primary data</div>
        <div>
          <img src="/" alt="weapon_sprite"/>
          <div>
            <div>
              <span>Primary role</span>
              <span></span>
            </div>
            <div>
              <span>Mount type</span>
              <span></span>
            </div>
            <div>
              <span>Ordnance points</span>
              <span></span>
            </div>
          </div>
        </div>

        <div>Ancillary data</div>
        <div>
          <img src="/" alt="weapon_sprite"/>
          <div>
            <div>
              <span>Damage type</span>
              <span></span>
            </div>
            <div>
              <span>Accuracy</span>
              <span></span>
            </div>
            <div>
              <span>Turn rate</span>
              <span></span>
            </div>
            <div>
              <span>Burst size</span>
              <span></span>
            </div>
            <div>
              <span>Refire delay(seconds)</span>
              <span></span>
            </div>
          </div>

        </div>
      </div>
  );
}

export default WeaponDescription;