import Item from '../components/Item'

function List({data}) {

const dataList = data.map(item => (
    <Item 
        key={item.name}
        pig={item} />
))

return (
    <>
    <div className="ui link cards">
        {dataList}
    </div>
    </>
    )}

    export default List

