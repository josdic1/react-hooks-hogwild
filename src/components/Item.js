import { useState } from 'react';

function Item({pig, selectThisHog}) {

const [isHidden, setIsHidden] = useState(false)



return (
<>
{ !isHidden ?
<div className="ui card">
  <div className="image">
    <img src={pig.image} alt="pig pic"/>
  </div>
  <div className="content">
    <a className="header" onClick={() => selectThisHog(pig)}>{pig.name}</a>
    <div className="meta">
      <span className="date">{pig.greased ? 'Greased' : 'Not Greased'}</span>
    </div>
    <div className="description">
    highest medal achieved: {pig["highest medal achieved"]}
    </div>
  </div>
  <div className="extra content">
    <span>
      <i className="user icon"></i>
      Weight: {pig.weight}
    </span>
  </div>
  
</div> : ''}
<div className="extra content">
<button onClick={() => setIsHidden(!isHidden)}>
    <span>
        { !isHidden ? 
    <i className="low vision icon"></i> :
    <i className="eye icon"></i>
        }
    </span>
    </button>
  </div>

</>
)}

export default Item
