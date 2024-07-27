import React, { useEffect, useRef, useState } from 'react'
import Rodal from 'rodal';
import { AgGridReact } from 'ag-grid-react';
import { sendHttpRequest } from '../../assets/ustils/http-utils';

import ActionButtons from '../common/ActionsButtons';

function Unit({visible,hideModal}) {
  const uintInput = useRef(null)
  const [units,getUnits] = useState([]);
  async function getAllUnits(){
    const reqData = new FormData();
          reqData.append('act','getall');
    let result = await sendHttpRequest("/manageUnit",reqData);
        console.log("result.data",result.data);
        getUnits(result.data)
  }

  async function addUnit(){ 
    let unitName = uintInput.current.value;
    const unitData = new FormData();
    if(unitName.length===0){
      alert("Please enter value....");
      return;
    }
    unitData.append('unit_nm',unitName);
    unitData.append('act',"save")
    let resp = await sendHttpRequest("/manageUnit",unitData);
    if(resp.result==="OK"){
      uintInput.current.value='';
      getAllUnits();
    }
  }

  useEffect(()=>{
    getAllUnits();
  },[])
  return (
    <Rodal visible={visible} onClose={hideModal} width={600} customStyles={{minHeight:"600px"}} animation='slideUp'>
        <h5>Units</h5>
        <div className='row'>
          <div className='col-8'>
            <input ref={uintInput} type="text" className='form-control' placeholder='Enter unit name'/>
          </div>
          <div className='col-4'>
            <button onClick={addUnit} className='btn btn-primary w-100'>Add new unit</button>
          </div>
        </div>
        <div className="ag-theme-quartz mt-2" // applying the Data Grid theme
    style={{ height: 500}}>
            <AgGridReact rowData={units} columnDefs={[
              {headerName:"#",field:"srNo",width:100},
              {headerName:"Unit Name",field:"unit_nm",},
              { headerName:"Act",field: "act" ,autoHeight: true,width:70,cellRenderer: params=><ActionButtons params={params} onAction={()=>{}}/>}
            ]}
            onGridReady={(params) => params.api.sizeColumnsToFit()}
            />
        </div>
    </Rodal>
  )
}

export default Unit;