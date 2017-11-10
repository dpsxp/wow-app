import React from 'react';

const Boss = ({ boss }) => (
  <div>
    <h3>{boss.name}</h3>
    <p>{boss.description}</p>
    <p>HP: {boss.health / 1000}k</p>
    <p>LVL: {boss.level}</p>
  </div>
)

export default Boss
