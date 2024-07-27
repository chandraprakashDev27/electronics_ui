import {useEffect, useState} from 'react';
import ItemsForm from './ItemsForm';
import ItemsTable from './ItemsTable';
import { sendHttpRequest } from '../../assets/ustils/http-utils';
import Unit from './Unit';
function Items() {
  const [rowData,setRowData]  = useState([])
  const [itemsVisible, setItemsVisible] = useState(false);
  const [unitVisible,setUnitVisible]    = useState(false)
  const [title,setTitle]      = useState("Add new item") 
  const showItemModal = (event,title) => {
    setItemsVisible(true);
    if(title){
      setTitle(title)
    }else{
      setTitle("Add new item")
    }
  };
  const hideItemsModal = () => {
    setItemsVisible(false);
  };
  const showUnitsModal = () =>{
    setUnitVisible(true)
  }
  const hideUnits = () =>{
    setUnitVisible(false)
  }
  async function getAddedRecords(){
    const reqData = new FormData();
      reqData.append('act','getall');
    let result = await sendHttpRequest("/manageItems",reqData);
        console.log("result.data",result.data);
        setRowData(result.data)
  }
  async function onAction(params,action){
    let formData = new FormData();
        formData.append('itemid',params.data.itemid);
    switch(action){
      case "E":
        break;
      case "D":
        formData.append('act','del');
        if(confirm("Do you want to delete this items !")){
          let resp = await sendHttpRequest('/manageItems',formData);
          if(resp.result==="OK"){
            alert("Item deleted successfully...");
            getAddedRecords()
          }
        }
        break;
    }
  }
  useEffect(()=>{
    getAddedRecords()
  },[])
  
  return (
    // wrapping container with theme & size
    <section>
      <button className='btn btn-sm btn-warning' onClick={showItemModal}>Add New Item</button>&nbsp;
      <button className='btn btn-sm btn-primary' onClick={showUnitsModal}>Quantities</button>
      <ItemsForm visible={itemsVisible} hideModal={hideItemsModal} getAddedRecords={getAddedRecords} title={title}/>
      <ItemsTable rowData={rowData} onAction={onAction}/>
      <Unit visible={unitVisible} hideModal={hideUnits}/>
    </section>
   )
}

export default Items;