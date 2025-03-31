import Item from '../components/Item'

function List({data, selectThisHog}) {

const dataList = data.map(item => (
    <Item 
        key={item.name}
        pig={item} 
        selectThisHog={selectThisHog}
        />
))

return (
    <>
    <div className="ui link cards">
        {dataList}
    </div>
    </>
    )}

    export default List

