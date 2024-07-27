import React from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import ActionButtons from '../common/ActionsButtons';
function ItemImage(props){
  return <div className='p-1'>
    <img className='rounded' src='https://kripson.com/wp-content/uploads/2020/12/product-placeholder.jpg' width={50}/>
  </div>;
}



function ItemsTable({rowData,onAction}) {

  const colDefs               = [
    { headerName:"#",field: "img" ,autoHeight: true,cellRenderer: ItemImage,width:100},
    { headerName:"Item Name",field: "item_nm" ,autoHeight: true,width:400},
    { headerName:"Dealer",field: "dealer_nm" ,autoHeight: true,width:250},
    { headerName:"Unit",field: "unit_nm" ,autoHeight: true,width:110},
    { headerName:"HSN Code",field: "hsn_code" ,autoHeight: true,width:110,},
    { headerName:"Dealer Price",field: "dealer_price" ,autoHeight: true,width:135,cellStyle: { textAlign: 'right' }},
    { headerName:"Selling Price",field: "selling_price" ,autoHeight: true,width:135,cellStyle: { textAlign: 'right' }},
    { headerName:"Act",field: "act" ,autoHeight: true,width:110,cellRenderer: params=><ActionButtons params={params} onAction={onAction}/> },
  ]

  return (
    <div
    className="ag-theme-quartz mt-2" // applying the Data Grid theme
    style={{ height: 500}} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          // onGridReady={(params) => params.api.sizeColumnsToFit()}
      />
    </div>
  )
}

export default ItemsTable;