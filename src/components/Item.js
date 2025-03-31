

function Item({pig}) {

return (
<>
<div className="ui card">
  <div className="image">
    <img src={pig.image} alt="pig pic"/>
  </div>
  <div className="content">
    <a className="header">{pig.name}</a>
    <div className="meta">
      <span className="date">{pig.greased ? 'Greased' : 'Not Greased'}</span>
    </div>
    <div className="description">
    highest medal achieved: {pig["highest medal achieved"]}
    </div>
  </div>
  <div className="extra content">
    <a>
      <i className="user icon"></i>
      Weight: {pig.weight}
    </a>
  </div>
</div>
</>
)}

export default Item
