import { useState } from 'react';

function Filter({handleSort}) {

const [ sortData, setSortData ] = useState({
    nameSelect: "",
    weightSelect: ""
})

function sortList(e) {
    const { name, value } = e.target;
  
    const updatedSortData = {
      ...sortData,
      [name]: value,
    };
  
    setSortData(updatedSortData);
    handleSort(updatedSortData);  
  }

return (
<>
<div>
    <select name='nameSelect' onChange={sortList}>
        <option value="all"> Sort by Name...</option>
        <option value="az"> Ascending</option>
        <option value="za"> Descending</option>
    </select>
    <select name='weightSelect' onChange={sortList}>
        <option value="all"> Sort by Weight...</option>
        <option value="az"> Ascending</option>
        <option value="za"> Descending</option>
    </select>
</div>
</>
)}

export default Filter
