import React from 'react'

export default function Image({ name, age, bio, image }) {
  return (
    <div className="image"
         style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url('${image}')`,
           backgroundPosition: '50% 50%',
           backgroundSize: 'auto 100%' }}>
      <div className="information">
        <div className="info">
          <span className="name">{name}</span>
          <span className="age">{age}</span>
        </div>
        <div className="bio">
          {bio}
        </div>
      </div>
    </div>
  )
}
