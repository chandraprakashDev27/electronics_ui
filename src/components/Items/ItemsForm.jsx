import React, { useState , useRef}  from 'react';
import Rodal from 'rodal';
import { sendHttpRequest } from '../../assets/ustils/http-utils';

function ItemsForm({title,visible,hideModal,getAddedRecords}) {
  const fileInput    = useRef(null);
  const selectDealer = useRef(null);
  const selectUnit   = useRef(null);
  const defaultItemImage = "https://kripson.com/wp-content/uploads/2020/12/product-placeholder.jpg";
  const [img,setImg]     = useState(defaultItemImage)

  const onSubmit = async (e) =>{
    e.preventDefault();
    e.target.classList.add('was-validated');
    
    if(!e.target.checkValidity()){
        alert("Please fill required fields..");
        return;
    } 
    const itemData = new FormData(e.target);
          itemData.append("act","save");
          itemData.append("dealer_nm",selectDealer.current.selectedOptions[0].label);
          itemData.append("dealer_id",selectDealer.current.value);
          itemData.append("unit_nm",selectUnit.current.selectedOptions[0].label);
          itemData.append("unit_id",selectUnit.current.value);
    let resp = await sendHttpRequest("/manageItems",itemData);
 
    if(resp.result === "OK"){
        hideModal()
        getAddedRecords();
        e.target.reset()
        e.target.classList.remove('was-validated')
    }
  }

  const renderImage = () => {
    let imageFile = fileInput.current.files[0];
    if(imageFile){
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = function(file){
            setImg(file.target.result)
        }
    }
    else{
        setImg(defaultItemImage)
    }
   
     
  }

  return (
    <Rodal visible={visible} onClose={hideModal} width={600} customStyles={{minHeight:"600px"}} animation='slideUp'>
        <form onSubmit={onSubmit} className='needs-validation' noValidate>
            <h5>{title}</h5>
            <hr />
            <div className="row">
                <div className="col-4">
                    <img src={img} alt="" width={160}/>
                </div>
                <div className='col-5'>
                    <input  type="file" onChange={renderImage} ref={fileInput} style={{display:"none"}} name='item_img'/>
                    <button className='btn btn-sm btn-primary w-75' onClick={e=>e.target.previousElementSibling.click()} type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
                        </svg>
                    </button>
                    <button className='btn btn-sm btn-outline-danger w-25' type='button' onClick={e=>{
                        fileInput.current.value = "";
                        setImg(defaultItemImage)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                        </svg>
                    </button>
                </div>
                <div className="col-md-12 col-sm-12 mb-2">
                    <label htmlFor=''>Item Name</label>
                    <input name='item_nm' type="text" className='form-control' required/>
                </div>
                <div className="col-md-6 col-sm-6">
                    <label htmlFor=''>Dealer Name</label>
                     <select ref={selectDealer} className='form-control' required>
                        <option value="">Please select</option>
                        <option value="1">Dealer 1</option>
                        <option value="2">Dealer 2</option>
                        <option value="3">Dealer 3</option>
                        <option value="4">Dealer 4</option>
                        <option value="5">Dealer 5</option>
                        <option value="6">Dealer 6</option>
                        <option value="7">Dealer 7</option>
                        <option value="8">Dealer 8</option>
                        <option value="9">Dealer 9</option>
                        <option value="10">Dealer 10</option>
                    </select>
                </div>
                <div className="col-md-6 col-sm-6">
                    <label htmlFor=''>Unit</label>
                    <select ref={selectUnit} className='form-control' required>
                        <option value="">Please select</option>
                        <option value="2">Unit 2</option>
                        <option value="3">Unit 3</option>
                        <option value="4">Unit 4</option>
                        <option value="5">Unit 5</option>
                        <option value="6">Unit 6</option>
                        <option value="7">Unit 7</option>
                        <option value="8">Unit 8</option>
                        <option value="9">Unit 9</option>
                        <option value="10">Unit 10</option>
                    </select>
                </div>
                <div className="col-md-6 col-sm-6">
                    <label htmlFor=''>HSN Code</label>
                    <input name='hsn_code' type="number" className='form-control' required/>
                </div>
                <div className="col-md-6 col-sm-6">
                    <label htmlFor=''>Quantity</label>
                    <input name='quantity' type="number" className='form-control' required/>
                </div>
                <div className="col-md-6 col-sm-6">
                    <label htmlFor=''>Dealer Price</label>
                    <input name='dealer_price' type="number" className='form-control' required />
                </div>
                <div className="col-md-6 col-sm-6">
                    <label htmlFor=''>Selling Price</label>
                    <input name='selling_price' type="number" className='form-control' required/>
                </div>
                <div className="col-12 mt-5">
                    <button className='btn btn-sm btn-success w-100' required>Save Item</button>
                </div>
            </div>
        </form>
    </Rodal>
  )
}

export default ItemsForm;